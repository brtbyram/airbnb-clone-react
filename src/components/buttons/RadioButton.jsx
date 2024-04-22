import clsx from "clsx"
import { Icon } from "../../Icons"


export default function RadioButton({ onClick, active, name }) {
    return (
        <div className={clsx("bg-[#b0b0b0] rounded-[32px] relative cursor-pointer transition-all hover:bg-[#000000] group", {
            "w-8 h-6": name === "categoryFilter",
            "w-12 h-8": name === "categoryModal",
            "!bg-[#000000]": active
        })}>
            <button
                onClick={onClick}
                className={clsx("flex items-center justify-center bg-white border-2 border-[#b0b0b0] left-0 rounded-full absolute transition-all group-hover:border-[#000000] ", {
                    "w-6 h-6": name === "categoryFilter",
                    "w-8 h-8": name === "categoryModal",
                    "text-black !border-black left-4": active && name === "categoryModal",
                    "text-black !border-black left-3": active && name === "categoryFilter",
                })}
            >
                {active && <Icon name='check' size={16} />}
            </button>
        </div>
    )
}