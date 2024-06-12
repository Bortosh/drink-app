import { StateCreator } from "zustand"
import { getCategories, getDetailsFromAPI, getRecipes } from "../services/recipeServices"
import { Categories, DrinkAPIResponse, DrinkDetails, DrinksAPIResponse, SearchFilter } from "../types"
import { FavoritesSliceType } from "./favoritesSlice"

export type RecipeSliceType = {
    categories: Categories
    drinks: DrinksAPIResponse
    drinkDetails: DrinkDetails
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    getDeatils: (id: DrinkAPIResponse['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice: StateCreator<RecipeSliceType & FavoritesSliceType, [], [], RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    drinkDetails: {} as DrinkDetails,
    modal: false,
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (Filters) => {
        const drinks = await getRecipes(Filters)
        set({
            drinks
        })
    },
    getDeatils: async (id) => {
        const drinkDetails = await getDetailsFromAPI(id)
        set({
            drinkDetails,
            modal: true
        })
    },
    closeModal: () => {
        set({
            modal: false,
            drinkDetails: {} as DrinkDetails
        })
    }
})