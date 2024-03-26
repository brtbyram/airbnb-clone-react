import { Icon } from "../../Icons"

function CategoryFilter() {
    return (
        <div className="flex space-x-2 font-semibold">
            <button className="text-[#222222] flex px-4 border rounded-xl py-4">
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