import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";



const IndexPage = () => {

  const allDrinks = useAppStore(state => state.drinks)

  const { drinks } = allDrinks

  const hasDrinks = useMemo(() => drinks.length !== 0, [drinks])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>

      {
        hasDrinks
          ?
          (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
              {
                drinks.map(drink => (
                  <DrinkCard 
                    key={drink.idDrink}
                    drink={drink}
                  />
                ))
              }
            </div>
          )
          :
          (
            <p className="my-10 text-center text-2xl">No hay resultdos aún, utiliza el formulario para buscar recetas</p>
          )
      }

    </>
  )
}

export default IndexPage;