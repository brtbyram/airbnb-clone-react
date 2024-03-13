
import Logo from './Logo'
import Navbar from './Navbar'
import NavbarRight from './NavbarRight'

function Header() {
    return (
        <div className='flex items-start justify-between px-10 border-b border-gray-300 p-4'>
            <Logo />
            <Navbar />
            <NavbarRight />
        </div>
    )
}

export default Header