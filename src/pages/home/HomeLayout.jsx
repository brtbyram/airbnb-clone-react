import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import Categories from '../../components/categories'
import Footer from '../../components/footer'
import { useMediaQuery } from 'react-responsive'
import clsx from 'clsx'

function HomeLayout() {

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })


  return (
    <div >
      <div className={clsx('relative mx-10', {
        'mx-20': isDesktop
      })}>
        <Header />
        <Categories />
        <Outlet />
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  )
}

export default HomeLayout