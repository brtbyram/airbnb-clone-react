import { useContext } from 'react';
import { Context } from '../../context/ModalContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from '../../Icons';


function AccommodationCard({ accommodation }) {

    const { totalPrice } = useContext(Context);

    return (
        <div className=" text-[#717171] relative cursor-pointer">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination
                spaceBetween={0}
                slidesPerView={1}
                className='accommodation-card-swiper'
            >
                {accommodation.imageURL.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={accommodation.title} className='min-h-96 md:min-h-64 object-cover rounded-lg' />
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className='absolute top-3 right-4 z-10 hover:scale-110 transition-all'>
                <Icon name='heart' size={24} />
            </div>
            <div className='flex text-[15px] items-start my-3'>
                <div className='flex flex-col flex-1 space-y-1'>
                    <h2 className='font-semibold'>{accommodation.location}</h2>
                    <h3 className="font-medium">{accommodation.title}</h3>
                    {totalPrice ? (
                        <>
                            <p><span>{accommodation.nightToStay} gece</span> <span>{moment(accommodation.startDate).format("D MMM")} - {moment(accommodation.endDate).format("D MMM")}</span></p>
                            <p className='pt-1.5 underline'><span className='font-bold'>{accommodation.pricePerNight * accommodation.nightToStay} ₺</span> vergi hariç toplam </p>
                        </>) : (
                        <>
                            <p><span>{moment(accommodation.startDate).format("D MMM")} - {moment(accommodation.endDate).format("D MMM")}</span></p>
                            <p className='pt-1.5'><span className='font-bold'>{accommodation.pricePerNight} ₺</span> gece</p>
                        </>
                    )}
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
        location: PropTypes.string,
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
