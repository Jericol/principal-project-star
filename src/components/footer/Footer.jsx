import React, { useEffect, useState } from 'react';
import BankCard from '../../../assets/TARJETA.svg';
import ShopItems from "../../../assets/CAJABLANCO.svg";
import Envio from "../../../assets/ENTREGAS ICONOBLANCO.svg";
import Pse from "../../../public/medios de pagos/Banner-PSE-removebg-preview.png";
import Master from "../../../public/medios de pagos/mastercard-removebg-preview.png";
import MercadoPago from "../../../public/medios de pagos/mercadopago-removebg-preview.png";
import Wompie from "../../../public/medios de pagos/Wompi_LogoPrincipal.png";
import Pbxblack from '../../../public/Logo/ICONO-PBX.png';
import Marcas from '../../../public/Logo/BANNER-LOGOS.jpg'
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { Slide } from '@mui/material';


function Footer() {

    // array de credenciales de footer
    const Slides = [
        {
            url: '../../../assets/TARJETA.svg',
            title: 'Con nuestros medios de pago puedes aglizar y comprar con solo un click Pse, MasterCard, woopie, mercadopago'
        },
        {
            url: "../../../assets/CAJABLANCO.svg",
            title: 'Envios gratis Despues de compras de $150.000 el envio sera gratis para cualquier parte del pais'
        },
        {
            url: "../../../assets/ENTREGAS ICONOBLANCO.svg",
            title: ' Las entregas seran  de 1 a 3 dias a nivel bogotá y a nivel nacional de 5 a 7 dias habiles ten en cuenta que sabados y domingos no son dias habiles'
        },
    ]

    // array de mas informacion y soporte
    const ContactInfo = [
        {
            id: 1,
            title: 'Productos y servicios',
            itemFirst: 'Trabaja con nosotros',
            itemSecond: 'Ventas corporativas',
            itemThird: 'Ferias y eventos',
            itemFourth: 'Clientes',
        },
        {
            id: 2,
            title: 'Soporte',
            itemFirst: 'Contactenos',
            itemSecond: 'Chat en vivo',
            itemThird: 'Correo electronico',
            itemFourth: 'Linea de atencion',
        },
        {
            id: 3,
            title: 'Acerca de nosotros',
            itemFirst: 'Quienes somos',
            itemSecond: 'Politica de privacidad',
            itemThird: 'Tratamiento de datos',
            itemFourth: 'Pqrs',
        },

    ]

    const [isOpen, setIsOpen] = useState(false);
    const [showOpen, setShowOpen] = useState(false);


    const [currentIndex, setCurrentIndex] = useState(0);
    // boton para las credenciales left
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    // boton para las credenciales right
    const nextSlide = () => {
        const isLastSlide = currentIndex === Slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    


    return (
        <div className='border-4 border-blue-500 bg-slate-400 lg:h-[65rem]  overflow-hidden'>
            {/* TRES CREDENCIALES PARA PC*/}
            <div className='w-full h-[22rem] lg:flex items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b] md:hidden hidden'>
                {/* TARJETAS Y METODOS DE PAGOS */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className='flex flex-col lg:relative lg:left-[2rem] lg:top-10 '>
                        <img src={BankCard} alt="" className='mb-5 h-[5rem]' />
                        <h2 className='mb-2 text-xl text-center font-monserrat font-bold '>
                            Medios de pago
                        </h2>
                    </div>
                    <div className='flex lg:relative lg:top-[3rem] dark:bg-white dark:rounded-lg'>
                        <img src={Wompie} alt="" className='w-[8rem] h-[4rem] ' />
                        <img src={Pse} alt="" className='w-[7rem] h-[4rem]  ' />
                        <img src={Master} alt="" className='w-[7rem] h-[4rem]' />
                        <img src={MercadoPago} alt="logo-mercadoPago" className='w-[7rem] h-[4rem] dark:bg-white dark:rounded-lg' />
                    </div>
                </div>
                <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                {/* ENVIOS */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className='flex flex-col lg:relative lg:left-[2rem] lg:top-10 '>
                        <img src={ShopItems} alt="" className='mb-5 h-[5rem] ' />
                        <h2 className='mb-2 text-xl text-center font-monserrat font-bold '>
                            Envios Gratis
                        </h2>
                        <p className='w-[20rem] text-center font-monserrat font-semibold'>
                            Despues de compras de $150.000 el envio sera gratis para
                            cualquier parte del pais
                        </p>
                    </div>
                </div>
                <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                {/* TIEMPOS DE ENTREGA */}
                <div className='w-[22rem] h-[18rem] '>
                    <div className='flex flex-col lg:relative lg:bottom-8 lg:left-[2rem]  '>
                        <img src={Envio} alt="" className='mb-5 h-[8rem] lg:relative lg:top-6 lg:right-5' />
                        <h2 className='mb-2 text-xl text-center font-monserrat font-bold '>
                            Tiempos de entrega
                        </h2>
                        <p className='w-[22rem] text-center font-monserrat font-semibold'>
                            Las entregas seran  de 1 a 3 dias a nivel bogotá
                            y a nivel nacional de 5 a 7 dias habiles ten en cuenta
                            que sabados y domingos no son dias habiles
                        </p>
                    </div>
                </div>
            </div>
            {/* TRES CREDENCIALES PARA IPAD Y TABLET */}
            <div className='lg:hidden'>
                <div className='max-w-[1400px] md:h-[320px] h-[230px] w-full m-auto py-1 px-4 relative group'>
                    <div
                        className='w-auto h-full bg-no-repeat  rounded-2xl duration-500 bg-slate-200 '
                    >
                        <img src={Slides[currentIndex].url} alt=""
                            className='md:w-[150px] md:relative md:left-[18rem] md:top-4 w-[100px] relative left-[8rem] top-[1.5rem]'
                        />
                        <h2 className='rounded-lg md:w-[25rem] md:text-lg font-semibold font-monserrat text-center 
                           md:relative md:left-[11rem] md:top-[2rem] text-[14px] relative top-10'
                        >
                            {Slides[currentIndex].title}
                        </h2>
                    </div>

                    {/* Left arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} className='text-sm md:text-3xl' />
                    </div>
                    {/* Right arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} className='text-sm md:text-3xl' />
                    </div>
                </div>
            </div>
            {/* BANNER DE MARCAS */}
            <div className='pl-22'>
                <img src={Marcas} alt="" className='md:h-[4rem] lg:h-[8rem] md:w-full lg:w-screen' />
            </div>
            {/* items de footer pc*/}
            <div className='mb-6 w-full h-[22rem] lg:flex items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b] md:hidden hidden '>
                {/* productos y servicios */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className='pl-20 flex flex-col lg:relative lg:left-[2rem] lg:top-10 '>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Productos y servicios</h2>
                        <ul className='font-monserrat font-semibold flex flex-col gap-4'>
                            <li>
                                <Link to='/WorkingUs'>Trabaja con nosotros </Link>

                            </li>
                            <li>
                                <Link to='/distribuidores'>
                                    ventas corporativas
                                </Link>
                            </li>
                            <li>Ferias y eventos</li>
                            <li>Clientes</li>
                        </ul>
                    </div>
                </div>
                <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                {/* soporte */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className='flex flex-col lg:relative lg:left-[2rem] lg:top-10 '>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Soporte</h2>
                        <ul className='font-monserrat font-semibold flex flex-col gap-4'>
                            <li>
                                <Link to='/customerService'>
                                    Contáctenos
                                </Link>
                            </li>
                            <li>
                                <Link to='/customerService'>
                                    Chat en vivo
                                </Link>
                            </li>
                            <li>
                                <Link to='/customerService'>
                                    Correo electrónico
                                </Link>
                            </li>
                            <li>
                                <Link to='/customerService'>
                                    Línea de atención
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                {/* Acerca de nosotros  */}
                <div className='w-[22rem] h-[18rem] '>
                    <div className='flex flex-col lg:relative lg:top-6 lg:left-[2rem]  '>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Acerca de nosotros</h2>
                        <ul className='font-monserrat font-semibold flex flex-col gap-4'>
                            <li>
                                <Link to='/Faq'>
                                    Quienes somos
                                </Link>
                            </li>
                            <li>
                                <Link to='/PrivacyPolicy'>
                                    Políticas de privacidad
                                </Link>
                            </li>
                            <li>
                                <Link to='/dataProcessing'>
                                    Tratamiento de datos
                                </Link>
                            </li>
                            <li className='uppercase'>
                                <Link to='/formPqrs'>
                                    pqrs
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                {/* redes */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className='flex flex-col lg:relative lg:left-[2rem] lg:top-10 '>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Redes sociales</h2>
                        {/* redes sociales */}
                        <ul className='flex items-center font-monserrat font-semibold  gap-2 lg:relative lg:bottom-8 lg:border-b pb-5  lg:border-gray-700'>

                        </ul>
                        {/* pbx */}
                        <div className='lg:relative lg:bottom-[9rem] lg:right-4 ' >
                            <img src={Pbxblack} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* items de footer tablet */}
            <div className={`md:${isOpen ? '' : 'h-[22.4rem]'} transition-all duration-[.8s] bg-slate-300 
               border-b-2 border-gray-400   lg:hidden`}
            >
                <div className='md:relative lg:hidden relative'>
                    <h2 className='text-center font-monserrat font-semibold text-xl rounded-t-lg'>
                        Mas informacion
                    </h2>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor" className={`${isOpen && "rotate-[-360deg]"}  w-6 h-6 md:relative md:left-[30rem] md:bottom-7
                            relative left-[18rem] bottom-6`}

                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </button>
                </div>
                <div className={`${!isOpen ? '' : 'hidden'} flex items-center justify-between lg:hidden transition-all 
                   duration-[.8s] `}>
                    {/* productos y servicios */}
                    <div className='w-[22rem] h-[20rem] hidden md:flex lg:hidden'>
                        <div className='pl-20 flex flex-col relative right-[3rem] '>
                            <h2 className='mb-6 text-xl font-bold font-monserrat w-[20rem]'>Productos y servicios</h2>
                            <ul className='font-monserrat font-semibold flex flex-col gap-4'>
                                <li>
                                    <Link to='/WorkingUs'>Trabaja con nosotros </Link>
                                </li>
                                <li>
                                    <Link to='/distribuidores'>
                                        ventas corporativas
                                    </Link>
                                </li>
                                <li>Ferias y eventos</li>
                                <li>Clientes</li>
                            </ul>
                        </div>
                    </div>

                    {/* soporte */}
                    <div className='w-[22rem] h-[20rem] hidden md:flex lg:hidden'>
                        <div className='flex flex-col relative right-[2rem] '>
                            <h2 className='mb-6 text-xl font-bold font-monserrat relative left-6'>Soporte</h2>
                            <ul className='font-monserrat font-semibold flex flex-col gap-4'>
                                <li>
                                    <Link to='/customerService'>
                                        Contáctenos
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/customerService'>
                                        Chat en vivo
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/customerService'>
                                        Correo electrónico
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/customerService'>
                                        Línea de atención
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Acerca de nosotros  */}
                    <div className='w-[22rem] h-[18rem] hidden md:flex lg:hidden'>
                        <div className='flex flex-col relative bottom-4 right-6'>
                            <h2 className='mb-6 text-xl font-bold font-monserrat'>Acerca de nosotros</h2>
                            <ul className='font-monserrat font-semibold flex flex-col gap-4'>
                                <li>
                                    <Link to='/Faq'>
                                        Quienes somos
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/PrivacyPolicy'>
                                        Políticas de privacidad
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dataProcessing'>
                                        Tratamiento de datos
                                    </Link>
                                </li>
                                <li className='uppercase'>
                                    <Link to='/formPqrs'>
                                        pqrs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* para celular */}
                    <div className='relative group md:hidden' >
                        <div className='relative left-[5.5rem] text-center bottom-3'>
                            <h2 className='font-bold text-xl'>{ContactInfo[currentIndex].title}</h2>
                            <ul className='font-semibold text-lg text-center text-clip'>
                                <li>{ContactInfo[currentIndex].itemFirst}</li>
                                <li>{ContactInfo[currentIndex].itemSecond}</li>
                                <li>{ContactInfo[currentIndex].itemThird}</li>
                                <li>{ContactInfo[currentIndex].itemFourth}</li>
                            </ul>
                        </div>
                        {/* left bottom */}
                        <div className='md:hidden text-white group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2'>
                            <BsChevronCompactLeft  className='text-sm md:text-3xl bg-red-500' />
                        </div>
                        {/* right bottom */}
                        {/* <div className='md:hidden text-white group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 '>
                            <BsChevronCompactRight onClick={nextSlide} className='text-sm md:text-3xl bg-red-500' />
                        </div> */}
                    </div>
                </div>


            </div>
            {/* Copyright */}
            <div className='w-full h-[9rem] flex flex-col items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b]'>
                <h2 className='text-xl font-monserrat font-semibold text-center'>
                    Copyright © 2023 star professional Todos los derechos reservados
                </h2>
            </div>
        </div>
    )
}

export default Footer;
