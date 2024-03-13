import { Outlet } from 'react-router-dom'
import Header from '../../components/header'

function HomeLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default HomeLayout