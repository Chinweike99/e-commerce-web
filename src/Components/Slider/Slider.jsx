import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
// Import swipper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { sliderProducts } from '../../Data/products';

export const Slider = () => {
  return (
    <div className='s-container'>
        <Swiper
        modules={[Pagination, Navigation]}
        className='mySwipper'
        navigation={true}
        breakpoints={{
            640: { slidesPerView: 2},
            0: {slidesPerView: 1}
        }}
        // loopFillGroupWithBlank={true}
        slidesPerView={3} spaceBetween={40} slidesPerGroup={1} loop={true}>
            {sliderProducts.map((item, index) => {
                return (
                 <SwiperSlide key={index} className="slider">
                    <div className="left-s">
                        <div className="name">
                            <span>{item.name}</span>
                            <span>{item.detail}</span>
                        </div>
                        <span>${item.price}</span>
                        <div><i>Shop now</i></div>
                    </div>
                    <img src={item.img} alt="product" className='img-p'/>
                 </SwiperSlide>
                 )
            })}
           
        </Swiper>
    </div>
  )
}
