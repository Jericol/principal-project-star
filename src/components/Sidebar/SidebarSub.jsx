import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LogoBlack from '../../../public/Logo/LOGO-STAR-BLANCO.png';
import { RiStackLine } from "react-icons/ri";
import './sidebar.css'



function SidebarSub() {

    const [showMenu, setShowMenu] = useState(false);
    const [open, setOpen] = useState(true)


    return (
        <div>
            <div className=''>
                <div className={`bg-slate-300 fixed lg:left-0 top-[12rem] h-full  flex flex-col justify-between  border-2 border-black
                   rounded-tr-xl rounded-br-xl transition-all dark:bg-[#1f1d2b] dark:text-white shadow-lg dark:shadow-white shadow-black
                    duration-300 overflow-y-scroll`}
                >
                    {/* icono de desplazamiento */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className={`absolute cursor-pointer -right-3 top-9 w-9 border-2 bg-white border-gray-300 rounded-full ${!open && 'rotate-180'}`}
                        onClick={() => setOpen(!open)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {/* todas las subcategorias */}
                    <div>
                        <ul className='pt-6'>
                            {/* LOGO */}
                            <li className='flex gap-x-3 items-center pl-1'>
                                <img src={LogoBlack}
                                    alt="foto-logo"
                                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[70px]`}
                                />
                                <h2 className={`dark:text-white origin-left font-medium font-advent text-xl duration-300 ${!open && 'scale-0'}`}>
                                    Star professional
                                </h2>
                            </li>
                            {/*sub accesorios */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:lg:p-4 rounded-md '>
                                <Link to="" className='lg:p-4 flex justify-center rounded-xl group  w-[11rem] px-4 py-3 
                                     transform duration-100 relative '>
                                    <RiStackLine className='text-4xl lg:text-2xl md:text-3xl text-black  dark:text-white' />
                                    <p className={` origin-left duration-500 pl-11 font-medium font-advent text-xl`} >Accesorios</p>
                                    <span className='row relative left-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                            stroke="currentColor" className={`w-6 h-6 `}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                    <div className='absolute top-full hidden group-focus:block w-full h-auto shadow-md mt-1   rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                                        <ul className='text-black'>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Gorros
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Peines
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Bowls
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Cepillos
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Brochas y mezcladores
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Accesorios para extensiónes
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Envases y atomizadores
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Extensión de cabello
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Frascos de desinfeccion
                                            </li>
                                            <li className='px-4 py-1 font-semibold hover:bg-slate-400'>
                                                Kanekalon
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Lupas
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Mandiles
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Papel aluminio
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Protectores
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Accesorios para peinados
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Rulos y chumis
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Simuladores de peluqueria
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                NN
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Tijeras-Grafiladoras-Portatijeras
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Balacas
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Caimanes y pinzas para el cabello
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Protectores
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Accesorios para peinados
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Rulos y chumis
                                            </li>
                                            <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>
                                                Simuladores de peluqueria
                                            </li>
                                        </ul>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarSub
