

function LocationFilter({ filters, setFilters}) {

    const regions = [
        {
            name: 'Esnek arama',
            cities: ['Tüm şehirler'],
            image: 'https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg'
        },
        {
            name: 'Avrupa',
            cities: ['Tüm şehirler', 'Amsterdam', 'Barselona', 'Berlin', 'Budapeşte', 'Dublin', 'Lizbon', 'Londra', 'Milan', 'Paris', 'Prag', 'Roma', 'Viyana', 'Zürih'],
            image: 'https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320'
        },
        {
            name: 'İtalya',
            cities: ['Tüm şehirler', 'Milan', 'Roma'],
            image: 'https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320'
        },
        {
            name: 'ABD',
            cities: ['Tüm şehirler', 'Los Angeles', 'New York', 'San Francisco'],
            image: 'https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320'
        },
        {
            name: 'İspanya',
            cities: ['Tüm şehirler', 'Barselona'],
            image: 'https://a0.muscache.com/im/pictures/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.jpg?im_w=320'
        },
        {
            name: 'Güneydoğu Asya',
            cities: ['Tüm şehirler', 'Bangkok', 'Ho Chi Minh City', 'Singapur'],
            image: 'https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320'
        }
    ]


    return (
        <div className='absolute z-10 top-20 left-0 p-6 pt-8 bg-white border rounded-3xl shadow-xl'>
            <h2 className="mb-4 ml-2 font-bold text-[0.875rem]">Bölgeye göre arayın</h2>
            <div className="grid grid-cols-3 gap-y-2">
                {regions.map((region, index) => (
                    <button key={index} onClick={() => setFilters({...filters, location: region.name})} className='flex flex-col text-sm p-2 leading-[1.125rem] hover:bg-[#ebebeb] rounded-lg'>
                        <img src={region.image} alt={region.name} className='w-[108px] h-[108px] rounded-lg border' />
                        <h3 className="mt-2 mx-0.5">{region.name}</h3>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default LocationFilter