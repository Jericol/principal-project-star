import React from 'react'
import { FcCustomerSupport, FcAddressBook, FcCallback, FcShipped } from "react-icons/fc";
import { Link } from 'react-router-dom';

function ContactBar() {


    return (
        <div className='container-static'>
            <section className='section-primary'>
                <FcAddressBook className='icono-bar-one'/>
                <p className=' email-info '>
                    <Link to='mailto:servicioalcliente@importadorastar.com'>
                        ventas@importadorastar.com
                    </Link>
                </p>
            </section>
            <section className='section-primary'>
                <FcCustomerSupport className='icono-bar-one'/>
                <p className='email-info'>
                    <Link to='https://wa.link/ha60z4'>
                        3123924999
                    </Link>
                </p>
            </section>
            <section className='section-primary'>
                <FcCallback className='icono-bar-one'/>
                <p className='pbx-info'>
                    pbx:6014927230
                </p>
            </section>
            <section className='section-primary'>
                <FcShipped className='text-2xl md:hidden lg:flex' />
                <p className='send-free'>
                    Envío grátis por pedidos superiores a $150.000
                </p>
                <p>

                </p>
            </section>
        </div>
    )
}

export default ContactBar;
