import CategorySlider from './CategorySlider'
import CategoryFilter from './CategoryFilter'

function Categories() {
  return (
    <div className='flex sticky top-20 px-20 z-20 bg-white items-center justify-center border-b border-gray-300 shadow-md'>
        <CategorySlider />
        <CategoryFilter />
    </div>
  )
}

export default Categories