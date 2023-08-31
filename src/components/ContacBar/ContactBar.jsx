import React from 'react'
import { FcCustomerSupport, FcAddressBook, FcCallback, FcShipped } from "react-icons/fc";
import { RiMailUnreadLine, RiWhatsappFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function ContactBar() {


    return (
        <div className='box-border'>
            {/* pc tamaños lg */}
            <div className='container-static btn-container-static lg-display'>
                <section className='section-primary'>
                    <FcCallback className='icono-bar-one' />
                    <p className='pbx-info'>
                        pbx:6014927230
                    </p>
                </section>
                <section className='section-primary lg:relative lg:top-5'>
                    <p className=' email-info  rounded-md'>
                        <Link to='mailto:servicioalcliente@importadorastar.com' className=''>
                            <RiMailUnreadLine className='text-4xl lg:relative lg:left-[.4rem] text-blue-600' />
                        </Link>
                    </p>
                </section>
                <section className='section-primary lg:relative lg:top-5'>
                    <p className='email-info bg-white h-10 w-12 rounded-md'>
                        <Link to='https://wa.link/ha60z4'>
                            <RiWhatsappFill className='text-emerald-500  text-4xl lg:relative lg:left-[.4rem]' />
                        </Link>
                    </p>
                </section>
                <section className='section-primary'>
                    <FcShipped className='text-2xl' />
                    <p className='send-free'>
                        Envío grátis por pedidos superiores a $150.000
                    </p>
                </section>
            </div>
            {/* movil tablet */}
            <div className='container-static container-static-md md-display btn-container-static'>
                <section className='section-primary'>
                    <p className='pbx-info'>
                        pbx:6014927230
                    </p>
                </section>
                <section className='section-primary md:relative md:right-[3rem]'>
                    <p className=' email-info  h-10 w-12 rounded-md'>
                        <Link to='mailto:servicioalcliente@importadorastar.com' className=''>
                            <RiMailUnreadLine className='text-4xl lg:relative lg:left-[.4rem] text-white' />
                        </Link>
                    </p>
                </section>
                <section className='section-primary md:relative  md:right-[6rem]'>
                    <p className='email-info  h-10 w-12 rounded-md'>
                        <Link to='https://wa.link/ha60z4'>
                            <RiWhatsappFill className='text-emerald-500  text-4xl lg:relative lg:left-[.4rem]' />
                        </Link>
                    </p>
                </section>
                <section className='section-primary md:relative md:right-[12rem] md:w-[12rem]'>
                    <p className='send-free'>
                        Envío grátis por pedidos superiores a $150.000
                    </p>
                </section>
            </div>
            {/* movil celular */}
            <div className='container-static h-[4.2rem] container-static-sm sm-display btn-container-static'>
                <section className='section-primary relative top-5'>
                    <p className='pbx-info'>
                        pbx:6014927230
                    </p>
                </section>
                <section className='section-primary relative right-4 top-7'>
                    <p className=' email-info  h-10 w-12 rounded-md'>
                        <Link to='mailto:servicioalcliente@importadorastar.com' className=''>
                            <RiMailUnreadLine className='text-2xl lg:relative lg:left-[.4rem] text-white' />
                        </Link>
                    </p>
                </section>
                <section className='section-primary relative left-12 top-3'>
                    <p className='email-info  h-10 w-12 rounded-md'>
                        <Link to='https://wa.link/ha60z4'>
                            <RiWhatsappFill className='text-emerald-500  text-2xl relative bottom-4' />
                        </Link>
                    </p>
                </section>
                <section className='section-primary relative bottom-3 left-2'> 
                    <p className='send-free'>
                        Envío grátis por pedidos superiores a $150.000
                    </p>
                </section>
            </div>
        </div>
    )
}

export default ContactBar;
