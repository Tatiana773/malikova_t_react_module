export const selectItems = (state)=> state.items.goods;
export const selectStateItems = (state)=> state.items;
export const selectAreItemsLoading = (state) => state.items.areItemsLoading;
export const selectItemsError = (state) => state.items.error;
export const selectRemovingItems = (state) => state.items.removingItems;
export const selectIsAddingItem = (state) => state.items.isAddingItem;
export const selectIsUpdatingItem = (state) => state.items.isUdatingItem;
