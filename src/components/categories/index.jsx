import CategorySlider from './CategorySlider'
import CategoryFilter from './CategoryFilter'

function Categories() {
  return (
    <div className='flex fixed z-10 bg-white items-center justify-center space-x-2 mx-auto w-11/12'>
        <CategorySlider />
        <CategoryFilter />
    </div>
  )
}

export default Categories