import CategorySlider from './CategorySlider'
import CategoryFilter from './CategoryFilter'

function Categories() {
  return (
    <div className='flex sticky top-20 mx-auto z-10 bg-white items-center justify-center space-x-2'>
        <CategorySlider />
        <CategoryFilter />
    </div>
  )
}

export default Categories