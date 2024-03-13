import HeaderFilter from "./header-property-filter"



function Navbar() {
    return (
        <nav className="flex flex-col items-center">
            <ul className="flex items-center text-[#717171] px-6 py-4">
                <li><a href="/" className="px-4 py-2.5 hover:bg-[#ebebeb] rounded-full">Konaklama yerleri</a></li>
                <li><a href="/about" className="px-4 py-2.5 hover:bg-[#ebebeb] rounded-full">Deneyimler</a></li>
                <li><a href="/contact" className="px-4 py-2.5 hover:bg-[#ebebeb] rounded-full">Çevrim içi deneyimler</a></li>
            </ul>
            <HeaderFilter/>
        </nav>
    )
}

export default Navbar