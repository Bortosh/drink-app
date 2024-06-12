
import { useAppStore } from "../stores/useAppStore";
import { DrinkAPIResponse } from "../types";

type DrinkCardProps = {
    drink: DrinkAPIResponse
}

const DrinkCard = ({ drink }: DrinkCardProps) => {

   const getDeatils = useAppStore(state => state.getDeatils)

    const { strDrink, strDrinkThumb, idDrink } = drink

    const handleClick = (id : DrinkAPIResponse['idDrink']) => {
        getDeatils(id)
    }

    return (
        <div className="border shadow-lg">

            <div className="overflow-hidden">
                <img
                    alt="imagen de bebida"
                    src={strDrinkThumb}
                    className="hover:scale-125 transition-transform hover:rotate-2"
                />
            </div>

            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{strDrink}</h2>
                <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg"
                    onClick={() => handleClick(idDrink)}
                >
                    Ver Receta
                </button>
            </div>

        </div>
    )
}

export default DrinkCard;