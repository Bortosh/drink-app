import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinkAPIResponseSchema, DrinksAPIResponseSchema, SearchFilterSchema, RecipeAPIResponseSchema } from '../sschemas/recipes-schemas';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type DrinkAPIResponse = z.infer<typeof DrinkAPIResponseSchema>

export type DrinksAPIResponse = z.infer<typeof DrinksAPIResponseSchema>

export type DrinkDetails = z.infer<typeof RecipeAPIResponseSchema>