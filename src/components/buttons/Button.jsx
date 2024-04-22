import clsx from 'clsx'

function Button({ children, onClick, active, name }) {
    return (
        <button
            onClick={onClick}
            className={clsx(" border  text-sm hover:border-black transition-all", {
                "rounded-[30px] py-2.5 px-6": name === "roomsAndBeds",
                "rounded-xl !p-4 flex justify-start items-center": name === "locationType",
                "flex flex-col space-y-1 items-start text-start py-5 px-6 border border-[#dddddd] rounded-[12px] transition-colors hover:border-black": name === "topRated",
                "bg-[#f7f7f7] border-2 border-black": name === "locationType" && active || name === "topRated" && active,
                "text-white bg-gradient-to-b from-neutral-800 from-33% via-zinc-800 via-66% to-neutral-800 to-90% border border-black": name === "roomsAndBeds" && active

            })}
        >
            <span>{children}</span>
        </button>
    )
}

export default Button