/**
 * React Component Utilities
 * Shared logic for portfolio React components
 */

/**
 * Normalize text for searching (lowercase, trim whitespace)
 * @param {string} text - Text to normalize
 * @returns {string} Normalized text
 */
export const normalizeSearchText = (text) => {
  return String(text || "").toLowerCase().trim();
};

/**
 * Filter items by search query and category
 * @param {Array} items - Items to filter
 * @param {string} query - Search query
 * @param {string} category - Category filter
 * @param {Function} getCategoryFn - Function to get item category
 * @param {Function} getSearchTextFn - Function to get item search text
 * @returns {Array} Filtered items
 */
export const filterItems = (
  items,
  query,
  category,
  getCategoryFn = (item) => item.category,
  getSearchTextFn = (item) => item.searchText || ""
) => {
  const normalizedQuery = normalizeSearchText(query);

  return items.filter((item) => {
    const categoryMatch = category === "All" || getCategoryFn(item) === category;
    const textMatch = !normalizedQuery || getSearchTextFn(item).includes(normalizedQuery);
    return categoryMatch && textMatch;
  });
};

/**
 * Extract unique categories from items
 * @param {Array} items - Items to extract categories from
 * @param {Function} getCategoryFn - Function to get item category
 * @returns {Array} Unique categories with "All" prepended
 */
export const extractCategories = (items, getCategoryFn = (item) => item.category) => {
  const uniqueCategories = new Set(items.map(getCategoryFn));
  return ["All", ...Array.from(uniqueCategories)];
};

/**
 * Create memoized index for fast searching
 * @param {Array} items - Items to index
 * @param {Function} getIndexTextFn - Function to extract search text
 * @returns {Array} Items with precomputed searchText property
 */
export const createSearchIndex = (items, getIndexTextFn) => {
  return items.map((item) => ({
    ...item,
    searchText: normalizeSearchText(getIndexTextFn(item))
  }));
};

/**
 * Handle keyboard navigation for filter chips
 * @param {Event} event - Keyboard event
 * @param {Function} onFilterChange - Callback when filter changes
 * @param {Array} availableFilters - List of available filter options
 */
export const handleFilterKeyboard = (event, onFilterChange, availableFilters) => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    const buttons = Array.from(event.currentTarget.parentElement?.querySelectorAll("button") || []);
    const currentIndex = buttons.indexOf(event.currentTarget);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;

    if (buttons[nextIndex]) {
      buttons[nextIndex].focus();
    }
  }
};

/**
 * Get readable label for category
 * @param {string} category - Category to label
 * @param {Object} tagMap - Map of category to label
 * @returns {string} Readable category label
 */
export const getCategoryLabel = (category, tagMap = {}) => {
  return tagMap[category] || category;
};

/**
 * Debounce a function (useful for search inputs)
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (fn, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
