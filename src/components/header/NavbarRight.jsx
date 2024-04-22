import { Menu } from "@headlessui/react"
import { useContext } from "react"
import { Context } from "../../context/ModalContext"
import { Icon } from "../../Icons"


function NavbarRight() {

    const { setActiveModal } = useContext(Context)


    return (
        <nav>
            <ul className="flex items-center text-[#222222] pl-6">
                <li>
                    <a href="/" className="px-4 py-2.5 font-semibold text-[0.875rem] leading-[1.125rem] hover:bg-[#ebebeb] rounded-full">Evinizi Airbnb ye taşıyın</a>
                </li>
                <li className="px-4 py-2.5 hover:bg-[#ebebeb] rounded-full">
                    <button onClick={() => setActiveModal("nationalSettings")} className="flex items-center">
                        <Icon name="sphere" size={16} />
                    </button>
                </li>
                <li className="p-2 pl-3 text-gray-500 border rounded-full relative hover:shadow-md">
                    <Menu>
                        <Menu.Button className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height={32} width={32} fill="currentColor" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                                <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z">
                                </path>
                            </svg>
                        </Menu.Button>
                        <Menu.Items className="absolute top-16 right-0 py-2 flex flex-col w-[250px] border rounded-2xl shadow-xl bg-white">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-[#F7F7F7]'} px-3 py-2 font-bold`}
                                        href="/account-settings"
                                    >
                                        Kaydolun
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-[#F7F7F7]'} px-3 py-2`}
                                        href="/account-settings"
                                    >
                                        Oturum açın
                                    </a>
                                )}
                            </Menu.Item>
                            <hr className="my-2" />
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-[#F7F7F7]'} px-3 py-2`}
                                        href="/account-settings"
                                    >
                                        Evinizi Airbnb ye taşıyın
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-[#F7F7F7]'} px-3 py-2`}
                                        href="/account-settings"
                                    >
                                        Yardım merkezi
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarRight