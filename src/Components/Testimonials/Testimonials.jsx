import React from 'react'
import css from './testimonials.module.css'
import { assets } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonyDetails } from '../../Data/testimonialsData'

export const Testimonials = () => {
  return (
    <div>
        <div className={css.test}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top rated</span>
                    <span>
                    Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero. The text is titled "de Finibus Bonorum et Malorum" which means "The Extremes of Good and Evil". The most common form of Lorem ipsum is the following:
                    </span>
                </div>

                <img src={assets.image2} alt="" />

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>


            <div className={css.reviews}>
                Reviews
            </div>

            <div className={css.carousel}>
            <Swiper
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            breakpoints={{
                850: { slidesPerView: 3 },
                600: { slidesPerView: 2},
                0: {slidesPerView: 1}
            }}
            >
                    {
                        testimonyDetails.map((testimonies, index) => {
                            return(
                            <SwiperSlide key={index}>
                                <div className={css.testimonial}>
                                    <img src={testimonies.img} alt="" />
                                    <span>{testimonies.comment}</span>
                                    <hr />
                                    <span><em>{testimonies.name}</em></span>
                                </div>
                            </SwiperSlide>
                            )
                        })
                    }
            </Swiper>
            </div>
                    {/* jiopkl;''lm,,l; */}
        </div>
    </div>
  )
}
