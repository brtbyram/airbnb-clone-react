import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import categoriesData from '../../data/categories';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from 'clsx';

function CategorySlider() {

    const [activeCategory, setActiveCategory] = useState('')

    return (
        <div className='overflow-hidden'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView= 'auto'
                navigation
                className='w-full category-slider'
            >
                {categoriesData.map((category, index) => (
                    <SwiperSlide onClick={() => setActiveCategory(category.name)} key={index} className={clsx("opacity-70 grid place-content-center place-items-center gap-y-2 h-[78px] hover:border-b cursor-pointer max-w-max mx-6 hover:opacity-100", {
                        'border-b border-[#000000] !opacity-100': category.name === activeCategory

                    })}>
                        <img src={category.imageURL} alt={category.name} className='w-6 h-6'/>
                        <span className='text-xs'>{category.name}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategorySlider