import React, { useEffect, useState } from 'react';
import BankCard from '../../../assets/TARJETA.svg';
import ShopItems from "../../../assets/CAJABLANCO.svg";
import Envio from "../../../assets/ENTREGAS ICONOBLANCO.svg";
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";


function Footer() {


    const [logo, setLogo] = useState(false)
    // array de credenciales de footer
    const Slides = [
        {
            url: 'https://i.ibb.co/RjTGGmQ/TARJETA.png',
            title: 'Con nuestros medios de pago puedes aglizar y comprar con solo un click Pse, MasterCard, woopie, mercadopago'
        },
        {
            url: "https://i.ibb.co/4pnH0LX/CAJABLANCO.png",
            title: 'Envios gratis Despues de compras de $150.000 el envio sera gratis para cualquier parte del pais'
        },
        {
            url: "https://i.ibb.co/CHWn5N5/ENTREGAS-ICONOBLANCO.png",
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

    const [isOpen, setIsOpen] = useState(true);
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
        <div className='border border-slate-400 bg-slate-400  scroll-smooth'>
            {/* TRES CREDENCIALES PARA PC*/}
            <div className='w-full h-[22rem] lg:flex items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b] md:hidden hidden'>
                {/* TARJETAS Y METODOS DE PAGOS */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className='flex flex-col lg:relative lg:left-[2rem] lg:top-10 '>
                        <img src="https://i.ibb.co/RjTGGmQ/TARJETA.png" alt="" className='mb-5 h-[8rem] w-[8rem] lg:relative left-[7rem]' />
                        <h2 className='mb-2 text-xl text-center font-monserrat font-bold '>
                            Medios de pago
                        </h2>
                    </div>
                    <div className='flex lg:relative lg:top-[3rem] dark:bg-white dark:rounded-lg'>
                        {/* fotos medios de pago */}
                    </div>
                </div>
                <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                {/* ENVIOS */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className='flex flex-col lg:relative lg:left-[2rem] lg:top-10 '>
                        <img src="https://i.ibb.co/4pnH0LX/CAJABLANCO.png" alt="" className='mb-5 h-[7rem] w-[7rem] lg:relative left-[6rem] ' />
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
                <div className='https://i.ibb.co/CHWn5N5/ENTREGAS-ICONOBLANCO.png '>
                    <div className='flex flex-col lg:relative lg:bottom-8 lg:left-[2rem]  '>
                        <img src="https://i.ibb.co/CHWn5N5/ENTREGAS-ICONOBLANCO.png" alt="" className='mb-5 h-[8rem] w-[8rem] lg:relative left-[5rem]' />
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
                <div className='max-w-[1400px] md:h-[320px] h-[230px] w-full m-auto py-1 px-4 relative group dark:bg-[#1f1d2b]'>
                    <div
                        className='w-auto h-full bg-no-repeat  rounded-2xl duration-500 bg-slate-200 dark:bg-[#1f1d2b]'
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
                <img src="https://i.ibb.co/rZqQFGC/BANNER-LOGOS.jpg" alt="banner-logos" className='md:h-[4rem] lg:h-[8rem] md:w-full lg:w-screen object-cover' />
            </div>
            {/* items de footer pc*/}
            <div className='mb-6 w-full h-[22rem] lg:flex items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b] md:hidden hidden '>
                {/* productos y servicios */}
                <div className='w-[22rem] h-[20rem] '>
                    <div className=' flex flex-col lg:relative  lg:top-10 text-center'>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Productos y servicios</h2>
                        <ul className='font-monserrat font-semibold flex flex-col gap-4 '>
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
                    <div className='flex flex-col lg:relative lg:top-10 text-center'>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Soporte</h2>
                        <ul className='font-monserrat font-semibold flex flex-col gap-4 '>
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
                    <div className='flex flex-col lg:relative lg:top-6 text-center'>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Acerca de nosotros</h2>
                        <ul className='font-monserrat font-semibold flex flex-col gap-4 '>
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
                    <div className='flex flex-col lg:relative lg:left-[2rem] lg:top-10 text-center'>
                        <h2 className='mb-6 text-xl font-bold font-monserrat'>Redes sociales</h2>
                        {/* redes sociales */}
                        <ul className='flex items-center font-monserrat font-semibold  gap-2 lg:relative lg:bottom-7  lg:border-b pb-5  lg:border-gray-700'>
                            <RiFacebookCircleFill className='text-4xl lg:relative lg:left-[7rem] top-2 cursor-pointer' />
                            <Link to='https://www.instagram.com/starprofessionaloficial/'>
                                <RiInstagramLine className='text-4xl lg:relative lg:left-[10rem] top-2 cursor-pointer' />
                            </Link>
                        </ul>
                        {/* pbx */}
                        <div className='lg:relative lg:bottom-[9rem] lg:right-4 ' >
                            <img src="https://i.ibb.co/wLyhkZn/ICONO-PBX.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* items de footer tablet */}
            <div className={`md:${isOpen ? '' : 'h-[22.4rem]'} transition-all duration-[.8s] bg-slate-300 dark:bg-[#1f1d2b] 
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
                <div className={`${!isOpen ? '' : 'hidden'} flex  md:flex md:items-center md:justify-center md:relative md:right-5 lg:hidden transition-all 
                   duration-[.8s] `}>
                    {/* productos y servicios */}
                    <div className='w-[22rem] h-[20rem] hidden md:flex lg:hidden'>
                        <div className=' flex flex-col md:relative md:top-4'>
                            <h2 className='mb-6 text-xl font-bold font-monserrat w-[20rem] text-center'>Productos y servicios</h2>
                            <ul className='font-monserrat text-center font-semibold flex flex-col gap-4'>
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
                        <div className='flex flex-col md:relative md:top-4 '>
                            <h2 className='mb-6 text-xl font-bold font-monserrat relative left-9'>Soporte</h2>
                            <ul className='font-monserrat font-semibold text-center flex flex-col gap-4'>
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
                        <div className='flex flex-col '>
                            <h2 className='mb-6 text-xl font-bold font-monserrat'>Acerca de nosotros</h2>
                            <ul className='font-monserrat font-semibold flex flex-col gap-4 md:text-center'>
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
                        <div className='relative left-[5.5rem] text-center bottom-3 justify-items-center'>
                            <h2 className='font-bold text-xl'>{ContactInfo[currentIndex].title}</h2>
                            <ul className='font-semibold text-lg text-center text-clip'>
                                <li>{ContactInfo[currentIndex].itemFirst}</li>
                                <li>{ContactInfo[currentIndex].itemSecond}</li>
                                <li>{ContactInfo[currentIndex].itemThird}</li>
                                <li>{ContactInfo[currentIndex].itemFourth}</li>
                            </ul>
                        </div>
                        {/* left bottom */}
                        {/* <div className='md:hidden text-white group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2'>
                            <BsChevronCompactLeft  className='text-sm md:text-3xl bg-red-500' />
                        </div> */}
                        {/* right bottom */}
                        {/* <div className='md:hidden text-white group-hover:block cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 '>
                            <BsChevronCompactRight onClick={nextSlide} className='text-sm md:text-3xl bg-red-500' />
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className='w-auto h-auto flex flex-col items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b]'>
                <h2 className='md:text-xl font-monserrat font-semibold text-center text-lg'>
                    Copyright © 2023 star professional Todos los derechos reservados
                </h2>
                <div>
                    <button onClick={() => setLogo(!logo)} className='transition-all transform duration-[.8s]'>
                        <p className='font-bold md:text-2xl text-lg font-shadows space-x-40 uppercase '>
                            Diseñada y Desarrollada
                        </p>
                        <div className='md:relative md:left-[17rem] md:bottom-7 relative left-[12.6rem] bottom-[1.5rem]'>
                            {
                                logo ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-white">
                                        <path fillRule="evenodd" d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z" clipRule="evenodd" />
                                    </svg>

                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-white">
                                        <path fillRule="evenodd" d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" clipRule="evenodd" />
                                    </svg>
                            }
                        </div>
                    </button>
                </div>
                <div className={`w-[12rem] h-[10rem] ${logo ? '' : 'hidden'} transition-all transform duration-[.8s]`}>
                    <h1 className='md:text-3xl text-xl font-bold text-center uppercase dark:text-white'>leonardo goméz</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;
