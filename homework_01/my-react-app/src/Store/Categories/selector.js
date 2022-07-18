export const selectCategories = (state) => state.types.categories;

export const selectCategoriesArray = (state) => {
  const categories = selectCategories(state);
  return Object.values(categories);
} 