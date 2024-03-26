import { Link } from "react-router-dom"

function Logo() {
  return (
    <div className='min-w-28 pr-56 flex items-center'>
      <Link to='/' className="flex items-center space-x-1 justify-center py-2">
        <img src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png" alt="airbnb" className="w-[30px]" />
        <span className="text-[#ff385c] text-2xl font-bold tracking-tighter">airbnb</span>
      </Link>
    </div>
  )
}

export default Logo