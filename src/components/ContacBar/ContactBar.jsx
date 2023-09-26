import React, { useState } from 'react';
import './contactBar.css'
import { FcCustomerSupport, FcAddressBook, FcCallback, FcShipped } from "react-icons/fc";
import { RiInstagramLine, RiWhatsappFill, RiFacebookCircleFill, RiLayout4Fill, RiLayoutGridFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { button } from '@material-tailwind/react';


function ContactBar() {

    const [slide, setSlide] = useState(false);



    return (
        <div className='box-border hidden md:flex bg-black h-auto text-white py-3 '>
            {/* para pc */}
            <div className='hidden lg:flex items-center justify-between'>
                <ul className='flex items-center justify-items-center gap-12 font-bold relative left-[19rem]'>
                    <li className='flex items-center gap-2'>
                        <Link to='mailto:servicioalcliente@importadorastar.com'>
                            servicioalcliente@importadorastar.com
                        </Link>
                    </li>
                    <li>
                        <Link to='tel:6014927230' className='uppercase hover:!scale-125'>
                            pbx: 6014927230
                        </Link>
                    </li>
                    <li>Envío grátis por pedidos superiores a $150.000</li>
                </ul>
                <ul className='flex items-center gap-8 relative left-[47rem]'>
                    <li>
                        <Link to='' target='_blank'>
                            <RiFacebookCircleFill className='text-3xl hover:!scale-125 hover:text-blue-400 transition' />
                        </Link>
                    </li>
                    <li>
                        <Link to=''
                            target='_blank'
                        >
                            <RiInstagramLine className='text-3xl hover:!scale-125 transition hover:text-pink-500' />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://wa.link/ha60z4' target='_blank'>
                            <RiWhatsappFill className='text-3xl hover:!scale-125 transition hover:text-green-400' />
                        </Link>
                    </li>
                </ul>
            </div>
            {/* para tablet */}
            <div className='md:flex items-center justify-between hidden lg:hidden '>
                <ul className='flex flex-col text-sm text-center font-semibold relative left-[13rem]'>
                    <li>
                        <Link to='mailto:servicioalcliente@importadorastar.com'>
                            servicioalcliente@importadorastar.com
                        </Link>
                    </li>
                    <li>
                        <Link to='tel:6014927230' className='uppercase hover:!scale-125'>
                            pbx: 6014927230
                        </Link>
                    </li>
                    <li>Envío grátis por pedidos superiores a $150.000</li>
                </ul>
                <ul className='flex items-center gap-3 relative left-[18rem]'>
                    {/* facebook */}
                    <li>
                        <Link to='' target='_blank'>
                            <RiFacebookCircleFill className='text-3xl hover:!scale-125 hover:text-blue-400 transition' />
                        </Link>
                    </li>
                    {/* instagram */}
                    <li>
                        <Link to=''
                            target='_blank'
                        >
                            <RiInstagramLine className='text-3xl hover:!scale-125 transition hover:text-pink-500' />
                        </Link>
                    </li>
                    {/* whatsapp */}
                    <li>
                        <Link to='https://wa.link/ha60z4' target='_blank'>
                            <RiWhatsappFill className='text-3xl hover:!scale-125 transition hover:text-green-400' />
                        </Link>
                    </li>
                </ul>
            </div>
           
        </div>
    )
}

export default ContactBar;
