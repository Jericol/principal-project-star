import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { filterProductCategoriesThunk, groupFilterThunk } from '../../store/slice/product.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Categories() {

    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rotate, setRotate] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        axios.get('http://190.60.237.163/traegrupos')
            .then(res => setCategories(res.data.RESP))
    }, [])

    console.log(categories)

    const handleGrupo = () => {
        navigate()
    }

    return (
        <div className=' items-center justify-around gap-2 text-black dark:text-white dark:bg-[#1f1d2b] md:hidden hidden lg:flex'>
            {/* CAPILAR */}
            <button className='relative items-center justify-center group bg-black w-[15rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>capilar</p>
                <span className='row relative left-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black ho'>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                             onClick={() => navigate(`/Capilar`)}
                        >
                           
                                Accesorios
                         
                        </li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                            onClick={() => navigate(`/Capilar`)}
                        >
                            Electricos
                        </li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                            onClick={() => navigate(`/Capilar`)}
                        >
                            Cuidado capilar
                        </li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                            onClick={() => navigate(`/Capilar`)}
                        >
                            Coloracion y/O quimicos
                        </li>
                        <li className='px-4 py-1 font-semibold hover:bg-slate-400' onClick={() => navigate(`/Capilar`)}>
                            Finalizado
                        </li>
                    </ul>
                </div>
            </button>
            {/* HOMBRE */}
            <button className='relative items-center justify-center group bg-black w-[15rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>hombre</p>
                <span className='row relative left-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black ho'>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                            onClick={() => navigate(`/Capilar`)}
                        >
                            Accesorios
                        </li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                            onClick={() => navigate(`/Capilar`)}
                        >
                            Electricos
                        </li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                            onClick={() => navigate(`/Capilar`)}
                        >
                            Cuidado capilar
                        </li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'
                            onClick={() => navigate(`/Capilar`)}
                        >
                            Coloracion y/O quimicos
                        </li>
                        <li className='px-4 py-1 font-semibold hover:bg-slate-400' onClick={() => navigate(`/Capilar`)}>
                            Finalizado
                        </li>
                    </ul>
                </div>
            </button>
            {/* CUIDADO FACIAL */}
            <button className='relative items-center justify-center group bg-black w-[15rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>cuidado facial</p>
                <span className='row relative left-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black ho'>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Accesorios</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Electricos</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>productos</li>
                    </ul>
                </div>
            </button>
            {/* MAQUILLAJE */}
            <button className='relative items-center justify-center group bg-black w-[11rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>maquillaje</p>
                <span className='row relative left-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black ho'>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Accesorios</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Electricos</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Rostro</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Ojos</li>
                        <li className='px-4 py-1 border-b border-black  font-semibold hover:bg-slate-400'>Labios</li>
                        <li className='px-4 py-1 border-b border-black  font-semibold hover:bg-slate-400'>Maquillaje permanente</li>
                    </ul>
                </div>
            </button>
            {/* CUIDADO CORPORAL */}
            <button className='relative items-center justify-center group bg-black w-[15rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>cuidado corporal</p>
                <span className='row relative left-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black ho'>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Accesorios</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Electricos</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>productos</li>
                    </ul>
                </div>
            </button>
            {/* UÑAS */}
            <button className='relative items-center justify-center group bg-black w-[10rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>uñas</p>
                <span className='row relative left-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black '>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Accesorios</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Electricos</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Cuidado de uñas</li>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Decoracion</li>
                        <li className='px-4 py-1 font-semibold hover:bg-slate-400'>Systemas y practica</li>
                    </ul>
                </div>
            </button>
            {/* LIMPIEZA Y DESINFECCION */}
            <button className='relative items-center justify-center group bg-black w-[19rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>limpieza y desinfeccion</p>
                <span className='row relative left-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black '>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Productos</li>

                    </ul>
                </div>
            </button>
            {/* ACCESORIOS */}
            <button className='relative items-center justify-center group bg-black w-[12rem] px-4 py-3 text-white 
                   flex transform duration-100 rounded-lg'
            >
                <p className='font-monserrat font-semibold uppercase'>accesorios</p>
                <span className='row relative left-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </span>
                <div className='absolute top-full hidden group-focus:block w-full shadow-md mt-1 rounded-lg bg-slate-300 border border-slate-400 transform duration-100'>
                    <ul className='text-black '>
                        <li className='px-4 py-1 border-b border-black font-semibold hover:bg-slate-400'>Accesorios</li>

                    </ul>
                </div>
            </button>
        </div>
    )
}

export default Categories;
