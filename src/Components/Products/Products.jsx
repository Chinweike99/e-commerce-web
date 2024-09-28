import React, { useState } from 'react'
import css from './Product.module.css'
import { productsData } from '../../Data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react';



export const Products = () => {
  const [menuProducts, setProducts] = useState(productsData);
  const [parent] = useAutoAnimate()
  // FILTER: Get each product related on click of associated list'
  const getCurrent = (type) => {
    setProducts(productsData.filter((product)=>product.type === type));
  }

  return (
    <div className={css.container}>
        <div className={css.logo}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h1>Our Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={()=>setProducts(productsData)}>All</li>
                <li onClick={()=>getCurrent("skin care")}>Skin Care</li>
                <li onClick={()=>getCurrent("conditioner")}>Conditioners</li>
                <li onClick={()=>getCurrent("foundation")}>Foundations</li>
                <li onClick={()=>getCurrent("hair")}>Hair Care</li>
            </ul>

            <div className={css.list} ref={parent}>
                {menuProducts.map((product, i) => {
                    return(
                        <div key={i} className={css.product}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{product.name}</span>
                                    <span>{product.detail}</span>
                                </div>
                                <span>${product.price}</span>
                                <span>Show Now</span>
                            </div>
                            <img src={product.img} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
