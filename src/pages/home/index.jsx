import accommodations from "../../data/accommodations"
import AccommodationCard from "../../components/cards/AccommodationCard"
import { useMediaQuery } from 'react-responsive'
import clsx from "clsx"

function Home() {

  const isMobile = useMediaQuery({ query: '(min-width: 200px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 550px)' })
  const isLaptop = useMediaQuery({ query: '(min-width: 950px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1130px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1640px)' })



  return (
    <div>
      <div className={clsx("grid gap-x-6 gap-y-10", {
        "grid-cols-1": isMobile,
        "grid-cols-2": isTablet,
        "grid-cols-3": isLaptop,
        "grid-cols-4": isDesktop,
        "grid-cols-6": isBigScreen
      })}>
        {accommodations.map((accommodation, index) => (
          <AccommodationCard key={index} accommodation={accommodation} />
        ))}
      </div>
    </div>
  )
}

export default Home
