import { Icon } from "../../Icons"
import { useContext } from "react"
import { Context } from "../../context/ModalContext"
import RadioButton from "../buttons/RadioButton"

function CategoryFilter() {

    const { setActiveModal, totalPrice, setTotalPrice } = useContext(Context)


    return (
        <div className="flex shrink space-x-2 font-semibold">
            <button onClick={() => setActiveModal("category")} className="text-[#222222] flex items-center px-4 border rounded-xl py-2.5 hover:border-black hover:bg-[#f5f5f5]">
                <span className="flex items-center justify-center space-x-2 text-xs">
                    <Icon name="filter" size={16} />
                    <span>Filtreler</span>
                </span>
            </button>
            <button className="text-[#222222] flex items-center space-x-2 px-4 border rounded-xl py-2.5 hover:border-black hover:bg-[#f5f5f5]">
                <span className="flex items-center justify-center space-x-2 text-xs min-w-max">Vergiler hariç toplamı göster</span>
                <RadioButton onClick={() => setTotalPrice(!totalPrice)} active={totalPrice === true} name="categoryFilter" />
            </button>
        </div>
    )
}

export default CategoryFilter