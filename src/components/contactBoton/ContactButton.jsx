import React from 'react';
import { RiWhatsappLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function ContactButton() {
    return (
        <div>
            <Link 
              to='https://wa.link/ha60z4' 
              className='fixed top-[55rem] left-[114rem] z-50 rounded-full '
              target='_blank'
            >
                <img
                    src="https://i.ibb.co/12RyfMB/whatsapp.png"
                    alt=""
                    className='w-[70px] rounded-full px-2 py-2 cursor-pointer hover:!scale-125 transition  '
                />
            </Link>
        </div>
    )
}

export default ContactButton;
