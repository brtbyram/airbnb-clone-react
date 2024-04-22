import clsx from "clsx"
import FooterCategories from "./FooterCategories"
import { useMediaQuery } from 'react-responsive'
import FooterSection from "./FooterSection"

function Footer() {

    const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1640px)' })


    return (
        <div className={clsx('pt-12 px-10 bg-gray-100', {
            'px-20': isDesktop,
            'px-96': isBigScreen

        })}>
            <h2 className='text-[22px] mb-2'>Gelecek kaçamaklarınız için fırsatlar</h2>
            <FooterCategories />
            <FooterSection />

        </div>
    )
}

export default Footer
