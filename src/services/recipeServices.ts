import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../sschemas/recipes-schemas"
import { DrinkAPIResponse, SearchFilter } from "../types"


export async function getCategories() {

    const url = `${import.meta.env.VITE_DRINK_LIST}`

    const { data } = await axios(url)

    const result = CategoriesAPIResponseSchema.safeParse(data)

    if(result.success) {
        return result.data
    }

}

export async function getRecipes(filters : SearchFilter) {

    const category = encodeURIComponent(filters.category);
    const ingredient = encodeURIComponent(filters.ingredient);

    const url = `${import.meta.env.VITE_FILTER_BY_CATEGORY_INGREDIENT}c=${category}&i=${ingredient}`
    
    const { data } = await axios(url)
    
    const result = DrinksAPIResponseSchema.safeParse(data)
    
    if(result.success) {
        return result.data
    }
    
}

export async function getDetailsFromAPI(id : DrinkAPIResponse['idDrink']) {
    const url = `${import.meta.env.VITE_GET_DETAIL_FROM_API}i=${id}`
    const { data } = await axios(url)

    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])

    if(result.success) {
        return result.data
    }

}