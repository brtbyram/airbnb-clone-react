import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { useContext } from 'react'
import { Context } from '../../context/ModalContext'


const languages = [
    { name: 'English', code: 'en', country: 'us', currency: 'usd', language: 'en', countryName: 'United States' },
    { name: 'Deutsch', code: 'de', country: 'de', currency: 'eur', language: 'de', countryName: 'Deutschland' },
    { name: 'Français', code: 'fr', country: 'fr', currency: 'eur', language: 'fr', countryName: 'France' },
    { name: 'Italiano', code: 'it', country: 'it', currency: 'eur', language: 'it', countryName: 'Italia' },
    { name: 'Español', code: 'es', country: 'es', currency: 'eur', language: 'es', countryName: 'España' },
    { name: '中文 (简体)', code: 'zh', country: 'cn', currency: 'cny', language: 'zh', countryName: '中国' },
    { name: '日本語', code: 'ja', country: 'jp', currency: 'jpy', language: 'ja', countryName: '日本' },
    { name: '한국어', code: 'ko', country: 'kr', currency: 'krw', language: 'ko', countryName: '대한민국' },
    { name: 'Português', code: 'pt', country: 'pt', currency: 'eur', language: 'pt', countryName: 'Portugal' },
    { name: 'Русский', code: 'ru', country: 'ru', currency: 'rub', language: 'ru', countryName: 'Россия' },
    { name: 'Türkçe', code: 'tr', country: 'tr', currency: 'try', language: 'tr', countryName: 'Türkiye', active: true },
    { name: 'Dansk', code: 'da', country: 'dk', currency: 'dkk', language: 'da', countryName: 'Danmark' },
    { name: 'Nederlands', code: 'nl', country: 'nl', currency: 'eur', language: 'nl', countryName: 'Nederland' },
    { name: 'Svenska', code: 'sv', country: 'se', currency: 'sek', language: 'sv', countryName: 'Sverige' },
    { name: 'Ελληνικά', code: 'el', country: 'gr', currency: 'eur', language: 'el', countryName: 'Ελλάδα' },
    { name: 'Norsk', code: 'no', country: 'no', currency: 'nok', language: 'no', countryName: 'Norge' },
    { name: 'Suomi', code: 'fi', country: 'fi', currency: 'eur', language: 'fi', countryName: 'Suomi' },
    { name: 'Polski', code: 'pl', country: 'pl', currency: 'pln', language: 'pl', countryName: 'Polska' },
    { name: 'Magyar', code: 'hu', country: 'hu', currency: 'huf', language: 'hu', countryName: 'Magyarország' },
    { name: 'Čeština', code: 'cs', country: 'cz', currency: 'czk', language: 'cs', countryName: 'Česká republika' },
    { name: 'Slovenčina', code: 'sk', country: 'sk', currency: 'eur', language: 'sk', countryName: 'Slovensko' },
    { name: 'Hrvatski', code: 'hr', country: 'hr', currency: 'hrk', language: 'hr', countryName: 'Hrvatska' },
    { name: 'Български', code: 'bg', country: 'bg', currency: 'bgn', language: 'bg', countryName: 'България' },
    { name: 'Română', code: 'ro', country: 'ro', currency: 'ron', language: 'ro', countryName: 'România' },
    { name: 'Українська', code: 'uk', country: 'ua', currency: 'uah', language: 'uk', countryName: 'Україна' },
    { name: 'العربية', code: 'ar', country: 'ae', currency: 'aed', language: 'ar', countryName: 'الإمارات العربية المتحدة' },
    { name: 'עברית', code: 'he', country: 'il', currency: 'ils', language: 'he', countryName: 'ישראל' },
    { name: 'हिन्दी', code: 'hi', country: 'in', currency: 'inr', language: 'hi', countryName: 'भारत' },
    { name: 'ไทย', code: 'th', country: 'th', currency: 'thb', language: 'th', countryName: 'ประเทศไทย' },
    { name: 'Bahasa Indonesia', code: 'id', country: 'id', currency: 'idr', language: 'id', countryName: 'Indonesia' },
    { name: 'Filipino', code: 'fil', country: 'ph', currency: 'php', language: 'fil', countryName: 'Pilipinas' },
    { name: 'Tiếng Việt', code: 'vi', country: 'vn', currency: 'vnd', language: 'vi', countryName: 'Việt Nam' },
    { name: 'Malay', code: 'ms', country: 'my', currency: 'myr', language: 'ms', countryName: 'Malaysia' },
    { name: '中文 (香港)', code: 'zh', country: 'hk', currency: 'hkd', language: 'zh', countryName: '香港' },
    { name: '中文 (台灣)', code: 'zh', country: 'tw', currency: 'twd', language: 'zh', countryName: '台灣' },
    { name: 'ქართული', code: 'ka', country: 'ge', currency: 'gel', language: 'ka', countryName: 'საქართველო' },
    { name: 'Հայերեն', code: 'hy', country: 'am', currency: 'amd', language: 'hy', countryName: 'Հայաստան' },
    { name: 'Azərbaycanca', code: 'az', country: 'az', currency: 'azn', language: 'az', countryName: 'Azərbaycan' },
    { name: 'Afrikaans', code: 'af', country: 'za', currency: 'zar', language: 'af', countryName: 'Suid-Afrika' },
    { name: 'Bahasa Melayu', code: 'ms', country: 'my', currency: 'myr', language: 'ms', countryName: 'Malaysia' },
    { name: 'Català', code: 'ca', country: 'es', currency: 'eur', language: 'ca', countryName: 'Espanya' },
    { name: 'Čeština', code: 'cs', country: 'cz', currency: 'czk', language: 'cs', countryName: 'Česká republika' },
    { name: 'Dansk', code: 'da', country: 'dk', currency: 'dkk', language: 'da', countryName: 'Danmark' },
    { name: 'Deutsch', code: 'de', country: 'de', currency: 'eur', language: 'de', countryName: 'Deutschland' },
    { name: 'Eesti', code: 'et', country: 'ee', currency: 'eur', language: 'et', countryName: 'Eesti' },
    { name: 'English', code: 'en', country: 'us', currency: 'usd', language: 'en', countryName: 'United States' },
    { name: 'Español', code: 'es', country: 'es', currency: 'eur', language: 'es', countryName: 'España' },
    { name: 'Filipino', code: 'fil', country: 'ph', currency: 'php', language: 'fil', countryName: 'Pilipinas' },
    { name: 'Français', code: 'fr', country: 'fr', currency: 'eur', language: 'fr', countryName: 'France' },
    { name: 'Gaeilge', code: 'ga', country: 'ie', currency: 'eur', language: 'ga', countryName: 'Éire' },
    { name: 'Hrvatski', code: 'hr', country: 'hr', currency: 'hrk', language: 'hr', countryName: 'Hrvatska' }
]

const currency = [
    { name: 'USD', code: 'usd', symbol: '$', currencyName: 'United States Dollar' },
    { name: 'EUR', code: 'eur', symbol: '€', currencyName: 'Euro' },
    { name: 'CNY', code: 'cny', symbol: '¥', currencyName: 'Chinese Yuan' },
    { name: 'JPY', code: 'jpy', symbol: '¥', currencyName: 'Japanese Yen' },
    { name: 'KRW', code: 'krw', symbol: '₩', currencyName: 'South Korean Won' },
    { name: 'RUB', code: 'rub', symbol: '₽', currencyName: 'Russian Ruble' },
    { name: 'TRY', code: 'try', symbol: '₺', currencyName: 'Turkish Lira', active: true },
    { name: 'DKK', code: 'dkk', symbol: 'kr', currencyName: 'Danish Krone' },
    { name: 'SEK', code: 'sek', symbol: 'kr', currencyName: 'Swedish Krona' },
    { name: 'NOK', code: 'nok', symbol: 'kr', currencyName: 'Norwegian Krone' },
    { name: 'PLN', code: 'pln', symbol: 'zł', currencyName: 'Polish Złoty' },
    { name: 'HUF', code: 'huf', symbol: 'Ft', currencyName: 'Hungarian Forint' },
    { name: 'CZK', code: 'czk', symbol: 'Kč', currencyName: 'Czech Koruna' },
    { name: 'HRK', code: 'hrk', symbol: 'kn', currencyName: 'Croatian Kuna' },
    { name: 'BGN', code: 'bgn', symbol: 'лв', currencyName: 'Bulgarian Lev' },
    { name: 'RON', code: 'ron', symbol: 'lei', currencyName: 'Romanian Leu' },
    { name: 'AUD', code: 'aud', symbol: '$', currencyName: 'Australian Dollar' },
    { name: 'CAD', code: 'cad', symbol: '$', currencyName: 'Canadian Dollar' },
    { name: 'GBP', code: 'gbp', symbol: '£', currencyName: 'British Pound Sterling' },
    { name: 'INR', code: 'inr', symbol: '₹', currencyName: 'Indian Rupee' },
    { name: 'IDR', code: 'idr', symbol: 'Rp', currencyName: 'Indonesian Rupiah' },
    { name: 'ILS', code: 'ils', symbol: '₪', currencyName: 'Israeli New Sheqel' },
    { name: 'MYR', code: 'myr', symbol: 'RM', currencyName: 'Malaysian Ringgit' },
    { name: 'NZD', code: 'nzd', symbol: '$', currencyName: 'New Zealand Dollar' },
    { name: 'PHP', code: 'php', symbol: '₱', currencyName: 'Philippine Peso' },
    { name: 'SGD', code: 'sgd', symbol: '$', currencyName: 'Singapore Dollar' },
    { name: 'THB', code: 'thb', symbol: '฿', currencyName: 'Thai Baht' },
    { name: 'ZAR', code: 'zar', symbol: 'R', currencyName: 'South African Rand' },
    { name: 'AFN', code: 'afn', symbol: '؋', currencyName: 'Afghan Afghani' },
    { name: 'ALL', code: 'all', symbol: 'L', currencyName: 'Albanian Lek' },
    { name: 'AMD', code: 'amd', symbol: '֏', currencyName: 'Armenian Dram' },
    { name: 'AOA', code: 'aoa', symbol: 'Kz', currencyName: 'Angolan Kwanza' },
    { name: 'ARS', code: 'ars', symbol: '$', currencyName: 'Argentine Peso' },
    { name: 'AWG', code: 'awg', symbol: 'ƒ', currencyName: 'Aruban Florin' },
    { name: 'AZN', code: 'azn', symbol: '₼', currencyName: 'Azerbaijani Manat' }
]


function NationalSettings() {

    const { setActiveModal } = useContext(Context)

    return (
        <div className='fixed top-0 left-0 right-0 z-50 h-full w-full bg-[#000000]/50'>
            <div className='bg-white border rounded-2xl m-10 pl-6 pr-0 w-[1032px] mx-auto overflow-hidden'>
                <button onClick={() => setActiveModal("")} className='my-3 text-xl mb-3'>x</button>
                <div className='overflow-y-auto h-[830px]'>
                    <Tab.Group >
                        <Tab.List className="border-b flex gap-x-1 outline-none mr-10 my-3 text-[#717171] text-sm font-semibold">
                            <Tab>
                                {({ selected }) => (
                                    /* Use the `selected` state to conditionally style the selected tab. */
                                    <button className={clsx("p-2.5 mb-2  rounded-md hover:bg-[#f7f7f7] relative", {
                                        "text-[#222222] after:content-[']' after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:mx-2.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out": selected,
                                    })}>
                                        Dil ve bölge
                                    </button>
                                )}
                            </Tab>
                            <Tab>
                                {({ selected }) => (
                                    /* Use the `selected` state to conditionally style the selected tab. */
                                    <button className={clsx("p-2.5 mb-2 rounded-md hover:bg-[#f7f7f7] relative", {
                                        "text-[#222222] after:content-[']' after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-0.5 after:mx-2.5 after:bg-black after:transition-all after:duration-300 after:ease-in-out": selected,
                                    })}>
                                        Para birimi
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel className="grid gap-y-10 text-[#222222]">
                                <div className="bg-[#f7f7f7] p-4 mt-8 rounded-lg max-w-max">
                                    <div className="flex items-center gap-2">
                                        <h3>Çeviri</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill='currentColor' viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false"><path d="M9 0a1 1 0 0 1 1 .88V6h5a1 1 0 0 1 1 .88V15a1 1 0 0 1-.88 1H7a1 1 0 0 1-1-.88V10H1a1 1 0 0 1-1-.88V1a1 1 0 0 1 .88-1H9zm1.73 7-1.4.5.24.21.13.13c.12.13.23.25.3.36l.08.1.05.07.04.08H7.31v1.3h1.2l.17.53.1.26.1.3A6.3 6.3 0 0 0 10 12.61c-.5.32-1.12.61-1.87.87l-.33.11-.35.11-.44.14.72 1.15.4-.13.4-.12c1-.35 1.83-.76 2.48-1.22.57.4 1.28.77 2.12 1.08l.37.14.38.12.41.13.72-1.15-.45-.14-.26-.08-.34-.11a9.23 9.23 0 0 1-1.94-.9 6.3 6.3 0 0 0 1.07-1.7l.13-.31.11-.33.17-.52h1.2V8.45h-3.05l-.1-.23A3.7 3.7 0 0 0 11 7.3l-.12-.15-.14-.15zm1.35 2.76-.04.13-.08.22-.1.27a4.99 4.99 0 0 1-.86 1.38 4.95 4.95 0 0 1-.74-1.13l-.12-.25-.1-.27-.08-.22-.04-.13h2.16zM9 1H1v8h5V7l.01-.17H3.83L3.43 8H2l2.26-6h1.48l1.5 4H9V1zM5 3.41 4.25 5.6h1.5L5 3.41z"></path>
                                        </svg>
                                    </div>
                                    <p className='text-sm text-[#717171] pt-1'>Açıklama ve değerlendirmelerin otomatik olarak çevrileceği dil: Türkçe.</p>
                                </div>
                                <div>
                                    <h2 className='text-[22px] mb-3 '>Önerilen dil ve bölge</h2>
                                    <div className="grid grid-cols-5 text-sm gap-2">
                                        <button className="flex flex-col py-2.5 px-3 hover:bg-[#ebebeb] rounded-md">
                                            <p>English</p>
                                            <p className='text-[#717171]'>United States</p>
                                        </button>
                                        <button className="flex flex-col py-2.5 px-3 hover:bg-[#ebebeb] rounded-md">
                                            <p>English</p>
                                            <p className='text-[#717171]'>United Kingdom</p>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-[22px]'>Bir dil ve bölge seçin</h2>
                                    <div className="grid grid-cols-5 gap-2 gap-y-4">
                                        {languages.map((lang, i) => (
                                            <button key={i} className={clsx("flex flex-col py-2.5 px-3 hover:bg-[#ebebeb] rounded-lg text-sm", {
                                                "border border-black ": lang.active
                                            })}>
                                                <p>{lang.name}</p>
                                                <p className='text-[#717171]'>{lang.countryName}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className=''>
                                    <h2 className='text-[22px] my-6'>Bir para birimi seçin</h2>
                                    <div className="grid grid-cols-5 gap-2 gap-y-4">
                                        {currency.map((curr, i) => (
                                            <button key={i} className={clsx("flex flex-col py-2.5 px-3 hover:bg-[#ebebeb] rounded-lg text-sm", {
                                                "border border-black ": curr.active
                                            })}>
                                                <p>{curr.currencyName}</p>
                                                <p className='text-[#717171]'>{curr.name} - {curr.symbol}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    )
}

export default NationalSettings