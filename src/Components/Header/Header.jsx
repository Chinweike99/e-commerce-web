import React, { useEffect, useState } from 'react'
import css from './Header.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  // const [showMenu, setMenu] = useState(true);
  // const toggleMenu =()=>{
  //   setMenu(!showMenu)
  // }

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        window.location.reload(); // Reload page to reset state when screen gets wider
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className={css.container}>
        <div className={css.mainlogo}>
          <div className={css.logo} >
                <div className={css.logoDivs}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <h4> <em>glow</em> </h4>
          </div>
         </div>

         <div className={css.listSearch2} style={{display: showMenu? "block" : "none"}}>
            <ul className={css.menu2} style={{display: showMenu? "block" : "none"}}>
                <li onClick={()=>setShowMenu(false)}>Collections</li>
                <li onClick={()=>setShowMenu(false)}>Brands</li>
                <li onClick={()=>setShowMenu(false)}>New</li>
                <li onClick={()=>setShowMenu(false)}>Sales</li>
                <li onClick={()=>setShowMenu(false)}>ENG</li>
            </ul>
            
            <input type="text" className={css.search} placeholder='Search product'/>
          </div>

         <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu}>
                  <MenuIcon />
                </div>
                <div className={css.listSearch} >
                    <ul className={css.menu} >
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                    
                    <input type="text" className={css.search} placeholder='Search product'/>
                </div>
                
                <ShoppingCartIcon className={css.cart}/>
                
         </div>
        

    </div>
  )
}
