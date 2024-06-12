import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { RecipeSliceType, createRecipeSlice } from './recipeSlice'
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice';
import { createNotificationSlice, NotificationSliceType } from './notificationSlice';

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
})))