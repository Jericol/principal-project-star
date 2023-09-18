import React, { useState } from 'react';
import './contactBar.css'
import { FcCustomerSupport, FcAddressBook, FcCallback, FcShipped } from "react-icons/fc";
import { RiMailUnreadLine, RiWhatsappFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


function ContactBar() {

    const [slide, setSlide] = useState(false);



    return (
        <div className='box-border bg-black h-20 md:h-20 lg:h-32'>
            {/* slider */}
            <div className='flex items-center justify-around gap-8 lg:relative lg:bottom-11 md:relative md:bottom-10'>
                <img src="https://i.ibb.co/s50y46j/PBX-ICON.png" alt="" className='lg:h-40 md:h-32 h-14 object-cover'/>
                <img src="https://i.ibb.co/p0dWknH/WHATSAPP-ICON.png" alt="" className='lg:h-40 md:h-32 h-14 object-cover'/>
                <img src="https://i.ibb.co/wRhjLS1/ENVIOS-ICON.png" alt="" className='lg:h-40 md:h-32 h-14 object-cover'/>
                <img src="https://i.ibb.co/d5JDSNw/CORREO-ICON.png" alt="" className='lg:h-40 md:h-32 h-14 object-cover'/>
            </div>
        </div>
    )
}

export default ContactBar;
