import React from 'react'
import css from './virtual.module.css'
import ReactCompareImage from 'react-compare-image'
import { assets } from '../../assets/assets.js'


export const Virtual = () => {
  return (
    <div className={css.Virtual}>
        <div className={css.left}>
            <span>Virtual Trial</span>
            <span>Never buy the wrong skin product</span>
            <span><i>Try Now!</i></span>
        </div>
        
        <div className={css.right}>
            <div className={css.wrapper}>
                {/* <div> */}
                    <ReactCompareImage className='compareImg' leftImage={assets.compare1} rightImage={assets.compare3} />
                {/* </div> */}
            </div>
            
        </div>

    </div>
  )
}
