import React from 'react'
import css from './Hero.module.css'
import { assets } from '../../assets/assets'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';

export const Hero = () => {
const transiton = {duration: 3, type: "spring"} //Specifeis the Animation for the motion library

  return (
    <div className={css.container}>

        {/* LEFT SIDE */}
        <div className={css.h_sides}>
            <span className={css.text1}>SKIN GLOW PRODUCT</span>

            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Give your skin the best care it deserves</span>
            </div>
        </div>

        {/* Middle Section */}
        <div className={css.wrapper}>

            {/* BLUE CIRCLE */}
            <motion.div
            initial={{bottom: "4rem"}} 
            whileInView={{bottom: "0rem"}}
            className={css.blueCircle}
            transition={transiton}
            ></motion.div>
            {/* // BLUE CIRCLE */}



            <img
            initial={{bottom: "4rem"}} 
            whileInView={{bottom: "0rem"}}
            transition={transiton}
            src={assets.image6} alt="" width={600}/>



            <motion.div
            initial={{right: "4%"}} 
            whileInView={{right: "2%"}}
            transition={transiton} 
            className={css.cart2}>
                <BusinessCenterIcon />
                <div className={css.signup}>
                    <span>Signup Offers</span>

                    <div className={css.arrow}>
                        <ArrowForwardIcon />
                    </div>
                </div>
            </motion.div>
        </div>

        <div className={css.h_sides}>

            <div className={css.traffic}>
                <span>15,000</span>
                <span>Daily traffic</span>
            </div>

            <div className={css.customers}>
                <span>300k</span>
                <span>Happy Customers</span>
            </div>
        </div>

    </div>
  )
}
