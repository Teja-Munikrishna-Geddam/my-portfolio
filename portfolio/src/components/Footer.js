import React from 'react'
import facebook from "../img/facebook.png";
import gmail from "../img/gmail.png";
import insta from "../img/insta.png";
import linkedin from "../img/linkedin.png";
import phone from "../img/phone.png";
import whatsapp from "../img/whatsapp.png";
import youtube from "../img/youtube.png";


function Footer() {
    const name = "Teja Munikrishna Geddam";

    return (
        <div className='Footer-Box' id='Footer-Id'>
            <div className='Social-Media'>
                <div className='Social-Icon'>
                    <img className="Footer-img" src={insta} alt='Instagram' />
                    <li>
                        <a href='#'>Instagram</a>
                    </li>
                </div>
                <div className='Social-Icon'>
                    <img className="Footer-img" src={whatsapp} alt='WhatsApp' />
                    <li>
                        <a href='#'>WhatsApp</a>
                    </li>
                </div>
                <div className='Social-Icon'>
                    <img className="Footer-img" src={facebook} alt='Facebook' />
                    <li>
                        <a href='#'>Facebook</a>
                    </li>
                </div>
                <div className='Social-Icon'>
                    <img className="Footer-img" src={youtube} alt='YouTube' />
                    <li>
                        <a href='#'>YouTube</a>
                    </li>
                </div>
                <div className='Social-Icon'>
                    <img className="Footer-img" src={linkedin} alt='LinkedIn' />
                    <li>
                        <a href='#'>LinkedIn</a>
                    </li>
                </div>
                </div>
                <div className='Contact-Box' >
                    <div className='Contact'>
                        <img className="Contact-img" src={phone} alt='Phone No.' />
                        <li><a href='#' className='Contact-link'>Contact Me</a></li>
                    </div>
                    <div className='Contact'>
                        <img className="Contact-img" src={gmail} alt='GMail' />
                        <li><a href='#' className='Contact-link'>Get in touch via Mail</a></li>
                    </div>
                </div>
            <div className='Footer-Rights'>&copy;{name} | {new Date().getFullYear()}</div>
        </div>
    )
}

export default Footer