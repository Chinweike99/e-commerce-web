import React from 'react'
import css from './footer.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupIcon from '@mui/icons-material/Group';
import StyleIcon from '@mui/icons-material/Style';

export const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.footerDiv}>
                <div className={css.logo}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <h4> <em>glow</em> </h4>
                </div>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationOnIcon className={css.icon}/>
                        <span>No 12 Onnyeka road Aba..</span>
                    </span>
                    <span className={css.pngLine}>
                        <LocalPhoneIcon className={css.icon}/>
                        <span>+234 9123 45</span>
                    </span>
                    <span className={css.pngLine}>
                        <AlternateEmailIcon className={css.icon}/>
                        <span>skin@glow.com</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <ExitToAppIcon className={css.icon}/>
                        <span>Sign in..</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <GroupIcon className={css.icon}/>
                        <span>About us</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <StyleIcon />
                        <span>Sign up for week letters</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
