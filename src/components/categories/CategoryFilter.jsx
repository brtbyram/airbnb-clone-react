import { Icon } from "../../Icons"
import { useContext } from "react"
import { Context } from "../../context/ModalContext"

function CategoryFilter() {

    const { setActiveModal } = useContext(Context)

    return (
        <div className="flex shrink  space-x-2 font-semibold">
            <button onClick={() => setActiveModal("category")} className="text-[#222222] flex px-4 border rounded-xl py-4">
                <span className="flex items-center justify-center space-x-2 text-xs">
                    <Icon name="filter" size={16} />
                    <span>Filtreler</span>
                </span>
            </button>
            <button className="text-[#222222] flex px-4 border rounded-xl py-4">
                <span className="flex items-center justify-center space-x-2 text-xs min-w-max">Vergiler hariç toplamı göster</span>
            </button>
        </div>
    )
}

export default CategoryFilter