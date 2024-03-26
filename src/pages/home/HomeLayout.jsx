import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import Categories from '../../components/categories'

function HomeLayout() {
  return (
    <div className='relative mx-6 md:mx-10 2xl:mx-20'>
      <Header />
      <Categories/>
      <Outlet />
    </div>
  )
}

export default HomeLayout