import { Link } from 'react-router-dom'
import { Icon } from '../../Icons'

function FooterSection() {

    const menuItems = {
        Destek: ["Yardım Merkezi", "AirCover", "Ayrımcılık yapmama", "Engellilik desteği", "İptal seçenekleri", "Semtinizdeki sorunu bildirin"],
        "Ev Sahipliği": ["Evinizi Airbnb'ye taşıyın", "Ev sahipleri için AirCover", "Ev sahipliği kaynakları", "Topluluk forumu", "Sorumlu ev sahipliği", "Ücretsiz bir ev sahipliği dersine katılın"],
        Airbnb: ["Basın odası", "Yeni özellikler", "Kariyer", "Yatırımcılar", "Airbnb.org acil konaklamaları"]

    }

    return (
        <>
            <div className='border-y py-12 grid grid-cols-3'>
                {Object.keys(menuItems).map((item, index) => (
                    <div key={index}>
                        <h3 className='text-lg font-semibold mb-4'>{item}</h3>
                        <ul className='grid gap-y-3'>
                            {menuItems[item].map((menuItem, index) => (
                                <Link to="/" key={index} className='text-sm text-gray-500 hover:underline '>{menuItem}</Link>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-between py-6'>
                <div className='flex space-x-2'>
                    <p>© 2024 Airbnb, Inc</p>
                    {['· Gizlilik', '· Şartlar', '· Site Haritası'].map((item, index) => (
                        <Link to="/" key={index} className='text-gray-500 text-base hover:underline'>{item}</Link>
                    ))}
                </div>
                <div className='flex space-x-3 text-sm leading-5 font-semibold'>
                    <button className='flex items-center justify-center space-x-1'>
                        <Icon name='sphere' size={16} />
                        <span className='hover:underline'>Türkçe (TR)</span>
                    </button>
                    <button className='hover:underline'>
                        <span >₺</span>
                        <span className=''> TRY</span>
                    </button>
                    <button>
                        <Icon name='facebook' size={16} />
                    </button>
                    <button>
                        <Icon name='twitter' size={16} />
                    </button>
                    <button>
                        <Icon name='instagram' size={16} />
                    </button>
                </div>
            </div >

        </>
    )
}

export default FooterSection