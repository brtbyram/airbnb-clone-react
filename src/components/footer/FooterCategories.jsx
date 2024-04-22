import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { useMediaQuery } from 'react-responsive'



function FooterCategories() {

    const isLaptop = useMediaQuery({ query: '(min-width: 950px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1130px)' })

    const footerCategories = {
        popular: [
            {
                city: "İstanbul",
                description: "Kiralık daireler",
            },
            {
                city: "Ankara",
                description: "Kiralık daireler",
            },
            {
                city: "İzmir",
                description: "Kiralık daireler",
            },
            {
                city: "Antalya",
                description: "Kiralık daireler",
            },
            {
                city: "Trabzon",
                description: "Kiralık bungalovlar",
            },
            {
                city: "Mijas",
                description: "Kiralık villalar",
            },
            {
                city: "Prescot",
                description: "Kiralık kır evleri",
            },
            {
                city: "Davenport",
                description: "Kiralık tatil yerleri",
            },
            {
                city: "Kissimmee",
                description: "Evcil hayvan dostu kiralık yerler",
            },
            {
                city: "Orlando",
                description: "Kiralık malikaneler",
            },
            {
                city: "Wallaroo",
                description: "Denize sıfır kiralık yerler",
            }
        ],
        artAndCulture: [
            {
                city: "Phoenix",
                description: "Kiralık daireler",
            },
            {
                city: "Scottsdale",
                description: "Kiralık daireler",
            },
            {
                city: "Sedona",
                description: "Kiralık kulübeler",
            },
            {
                city: "Tucson",
                description: "Kiralık daireler",
            },
            {
                city: "Flagstaff",
                description: "Denize sıfır kiralık yerler",
            },
            {
                city: "Prescott",
                description: "Kiralık daireler",
            },
            {
                city: "Mesa",
                description: "Havuzlu kiralık daireler",
            },
            {
                city: "Gilbert",
                description: "Kiralık daireler",
            },
            {
                city: "Chandler",
                description: "Kiralık tatşil yerleri",
            },
            {
                city: "Glendale",
                description: "Kiralık site içi konutlar",
            },
            {
                city: "Tempe",
                description: "Kiralık daireler",
            }
        ],
        openAir: [
            {
                city: "San Diego",
                description: "Kiralık daireler",
            },
            {
                city: "Palm Springs",
                description: "Kiralık daireler",
            },
            {
                city: "Big Bear Lake",
                description: "Kiralık daireler",
            },
            {
                city: "Lake Arrowhead",
                description: "Kiralık daireler",
            },
            {
                city: "Joshua Tree",
                description: "Kiralık daireler",
            },
            {
                city: "Idyllwild",
                description: "Kiralık daireler",
            },
            {
                city: "La Quinta",
                description: "Kiralık daireler",
            },
            {
                city: "Palm Desert",
                description: "Kiralık daireler",
            },
            {
                city: "Indio",
                description: "Kiralık daireler",
            },
            {
                city: "Borrego Springs",
                description: "Kiralık daireler",
            },
            {
                city: "Rancho Mirage",
                description: "Kiralık daireler",
            }
        ],
        mountains: [
            {
                city: "Gatlinburg",
                description: "Kiralık daireler",
            },
            {
                city: "Pigeon Forge",
                description: "Kiralık daireler",
            },
            {
                city: "Sevierville",
                description: "Kiralık daireler",
            },
            {
                city: "Maggie Valley",
                description: "Kiralık daireler",
            },
            {
                city: "Boone",
                description: "Kiralık daireler",
            },
            {
                city: "Asheville",
                description: "Kiralık daireler",
            },
            {
                city: "Blue Ridge",
                description: "Kiralık daireler",
            },
            {
                city: "Helen",
                description: "Kiralık daireler",
            },
            {
                city: "Ellijay",
                description: "Kiralık daireler",
            },
            {
                city: "Blowing Rock",
                description: "Kiralık daireler",
            },
            {
                city: "Banner Elk",
                description: "Kiralık daireler",
            }
        ],
        beach: [
            {
                city: "Myrtle Beach",
                description: "Kiralık daireler",
            },
            {
                city: "North Myrtle Beach",
                description: "Kiralık daireler",
            },
            {
                city: "Surfside Beach",
                description: "Kiralık daireler",
            },
            {
                city: "Garden City",
                description: "Kiralık daireler",
            },
            {
                city: "Murrells Inlet",
                description: "Kiralık daireler",
            },
            {
                city: "Pawleys Island",
                description: "Kiralık daireler",
            },
            {
                city: "Cherry Grove Beach",
                description: "Kiralık daireler",
            },
            {
                city: "Litchfield Beach",
                description: "Kiralık daireler",
            },
            {
                city: "Little River",
                description: "Kiralık daireler",
            },
            {
                city: "Georgetown",
                description: "Kiralık daireler",
            },
            {
                city: "Calabash",
                description: "Kiralık daireler",
            }
        ],
        categories: ["Muhteşem havuzlar", "Denize sıfır", "Evcil hayvan dostu", "Kış sporları", "Yürüyüş", "Yıldız gözlemi", "Kamp", "Balık tutma", "Yelken", "Yüzme", "Golf", "Sörf", "Bisiklet", "Kano", "Şnorkel", "Kayak", "Dağ bisikleti", "Kaya tırmanışı", "Yelkenli", "Yamaç paraşütü", "Sıcak hava balonu", "At binme", "Köpek kızakları", "Köpek balıklarıyla yüzme", "Safari"],
        thingsToDo: [
            {
                city: "New York",
                country: "ABD",
            },
            {
                city: "Paris",
                country: "Fransa",
            },
            {
                city: "Londra",
                country: "İngiltere",
            },
            {
                city: "Tokyo",
                country: "Japonya",
            },
            {
                city: "Roma",
                country: "İtalya",
            },
            {
                city: "Barcelona",
                country: "İspanya",
            },
            {
                city: "Los Angeles",
                country: "ABD",
            },
            {
                city: "Lizbon",
                country: "Portekiz",
            },
            {
                city: "Miami",
                country: "ABD",
            },
            {
                city: "Prag",
                country: "Çek Cumhuriyeti",
            },
            {
                city: "Amsterdam",
                country: "Hollanda",
            },
            {
                city: "Venedik",
                country: "İtalya",
            },
            {
                city: "Atina",
                country: "Yunanistan",
            },
            {
                city: "Dubai",
                country: "BAE",
            },
            {
                city: "Budapeşte",
                country: "Macaristan",
            },
            {
                city: "Kopenhag",
                country: "Danimarka",
            },
            {
                city: "Singapur",
                country: "Singapur",
            },
            {
                city: "Edinburgh",
                country: "İskoçya",
            },
            {
                city: "Seul",
                country: "Güney Kore",
            },
            {
                city: "Toronto",
                country: "Kanada",
            },
            {
                city: "Hong Kong",
                country: "Çin",
            },
            {
                city: "Meksiko",
                country: "Meksika",
            },
            {
                city: "Buenos Aires",
                country: "Arjantin",
            },
            {
                city: "Kapstadt",
                country: "Güney Afrika",
            },
            {
                city: "Rio de Janeiro",
                country: "Brezilya",
            },
            {
                city: "Sidney",
                country: "Avustralya",
            },
            {
                city: "Kairo",
                country: "Mısır",
            },
            {
                city: "Marrakeş",
                country: "Fas",
            },
            {
                city: "Bangkok",
                country: "Tayland",
            },
            {
                city: "Hanoi",
                country: "Vietnam",
            },
            {
                city: "Kuala Lumpur",
                country: "Malezya",
            },
            {
                city: "Kapadokya",
                country: "Türkiye",
            },
            {
                city: "Bali",
                country: "Endonezya",
            },
            {
                city: "Maldivler",
                country: "Maldivler",
            },
            {
                city: "Seyşeller",
                country: "Seyşeller",
            },
            {
                city: "Zanzibar",
                country: "Tanzanya",
            },
            {
                city: "Kosta Rika",
                country: "Kosta Rika",
            },
            {
                city: "Hawaii",
                country: "ABD",
            },
            {
                city: "Kuzey Kutbu",
                country: "Kuzey Kutbu",
            },
            {
                city: "Güney Kutbu",
                country: "Güney Kutbu",
            },
        ]
    }

    return (
        <div className='pb-10'>
            <Tab.Group>
                <Tab.List className="border-b space-x-1.5 ">
                    {['Popüler', 'Sanat ve Kültür', 'Açık Hava', 'Dağlar', 'Sahil', 'Kategoriler', 'Yapılacak şeyler'].map((category, index) => (
                        <Tab key={index} className='first:pl-0 px-2.5 text-sm'>
                            {({ selected }) => (
                                <p className={`text-[#717171] py-2.5 ${selected ? 'border-b-2 border-[#222222] font-semibold !text-[#222222]' : ''}`}>{category}</p>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="pt-8">
                    {Object.keys(footerCategories).map((category, index) => (
                        <Tab.Panel key={index}>
                            <div className={clsx("grid grid-cols-2 gap-x-2 gap-y-5", {
                                "grid-cols-3": isLaptop,
                                "grid-cols-6": isDesktop
                            })}>
                                {category === 'categories' ? footerCategories[category].map((category, index) => (
                                    <div key={index} className="text-[#717171] text-sm">{category}</div>
                                )) : (footerCategories[category].map((city, index) => (
                                    <div key={index} className="text-sm cursor-pointer">
                                        <p className="text-[#222222] font-semibold">{city.city}</p>
                                        <p className="text-[#717171]">{category === "thingsToDo" ? city.country : city.description}</p>
                                    </div>
                                )))}
                            </div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>

        </div>
    )
}

export default FooterCategories