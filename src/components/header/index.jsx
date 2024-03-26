
import Logo from './Logo'
import Navbar from './Navbar'
import NavbarRight from './NavbarRight'


function Header() {
    return (
        <>
            <div className='flex justify-between top-0 sticky z-30 items-start bg-white border-b py-4 border-gray-300'>
                <Logo />
                <Navbar />
                <NavbarRight />
            </div>
        </>
    )
}

export default Header