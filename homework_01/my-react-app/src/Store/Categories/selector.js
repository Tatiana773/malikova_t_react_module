export const selectCategories = (state) => state.types.categories;

export const selectCategoriesArray = (state) => {
  return Object.values(selectCategories(state));
} 