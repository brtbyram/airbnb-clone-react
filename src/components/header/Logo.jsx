import { Link } from "react-router-dom"

function Logo() {
  return (
    <div className='w-28 flex items-center'>
      <Link to='/'>
        <img src="https://links.papareact.com/qd3" alt="airbnb" />
      </Link>
    </div>
  )
}

export default Logo