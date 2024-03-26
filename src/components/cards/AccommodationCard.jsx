import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';

function AccommodationCard({ accommodation }) {
    return (
        <div className=" text-[#717171]">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
            >
                {accommodation.imageURL.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={accommodation.title} className='min-h-96 md:min-h-64 object-cover rounded-lg' />
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className='flex text-[15px] items-start my-3'>
                <div className='flex flex-col flex-1 space-y-1'>
                    <h2 className='font-semibold'>{accommodation.title}</h2>
                    <p><span>{accommodation.nightToStay} gece</span> <span>{accommodation.startDate}- {accommodation.endDate}</span></p>
                    <p className='pt-1.5 underline'><span className='font-bold'>{accommodation.pricePerNight * accommodation.nightToStay} ₺</span> vergi hariç toplam </p>
                </div>
                <div>
                    <p className='leading-5 text-[#222222]'>{accommodation.rating}</p>
                </div>
            </div>
        </div>
    )
}

export default AccommodationCard

AccommodationCard.propTypes = {
    accommodation: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        imageURL: PropTypes.arrayOf(PropTypes.string),
        nightToStay: PropTypes.number,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        pricePerNight: PropTypes.number,
        rating: PropTypes.number,
    }).isRequired,
};
