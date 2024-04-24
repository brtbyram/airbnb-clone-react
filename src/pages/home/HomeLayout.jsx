import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import Categories from '../../components/categories'
import Footer from '../../components/footer'

function HomeLayout() {

  return (
    <div className='relative'>
      <Header />
      <Categories />
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout