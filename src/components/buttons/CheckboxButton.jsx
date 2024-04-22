import { Icon } from '../../Icons'
import clsx from 'clsx'

function CheckboxButton({ onClick, active }) {
    return (
        <button
            onClick={onClick}
            className={clsx("text-white border border-[#dddddd] rounded-md p-1 transition-all hover:border-black", {
                "bg-[#f7f7f7] border-black": active,
                "bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black": active
            })}
        >
            <Icon name='check' size={16} />
        </button>
    )
}

export default CheckboxButton