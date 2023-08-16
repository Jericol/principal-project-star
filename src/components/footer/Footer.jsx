import React, { useEffect, useState } from 'react';
// import { IconName } from "react-icons/ri";
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

function Footer() {





    return (
        <div className='border-4 border-blue-500 bg-slate-400 h-[65rem] scroll-auto'>
            {/* TRES CREDENCIALES */}
            <div className='w-full h-[22rem] flex items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b]'>
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
            {/* BANNER DE MARCAS */}
            <div className='pl-22'>
                <img src={Marcas} alt="" />
            </div>
            {/* items de footer */}
            <div className='mb-6 w-full h-[22rem] flex items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b]'>
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
                            {/* <li>
                                <img
                                    src={Facebook}
                                    alt=""
                                    style={{ width: '60px' }}
                                />
                            </li>
                            <li>
                                <img
                                    src={Instagram}
                                    alt=""
                                    style={{ width: '100px' }}
                                />
                            </li>
                            <li>
                                <img
                                    src={Tiktok}
                                    alt=""
                                    style={{ width: '30px' }}
                                />
                            </li> */}
                        </ul>
                        {/* pbx */}
                        <div className='lg:relative lg:bottom-[9rem] lg:right-4 ' >
                            <img src={Pbxblack} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <div className='w-full h-[9rem] flex items-center justify-evenly  bg-slate-300 dark:bg-[#1f1d2b]'>
                <h2 className='text-xl font-monserrat font-semibold text-center'>
                    Copyright © 2023 star professional Todos los derechos reservados
                </h2>
            </div>
        </div>
    )
}

export default Footer;
