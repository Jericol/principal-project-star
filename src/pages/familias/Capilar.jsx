import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import LogoBlack from '../../../public/Logo/LOGO-STAR-NEGRO.png';
import { RiStackLine } from "react-icons/ri";
import { TECollapse } from "tw-elements-react";
import './style.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { filterProductCategoriesThunk, groupFilterThunk } from '../../store/slice/product.slice';
import CardNew from '../Home/card/CardNew';
import Pagination from '../../components/Pagination/Pagination';
import { alert, button } from '@material-tailwind/react';


function Capilar() {

    const { Codigo } = useParams();

    const [activeElement, setActiveElement] = useState("");
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [productsPage, setProductsPage] = useState(16);
    const [currentPage, setCurrentPage] = useState(1);
    // los multiplos que se van a recorrer en en la paginacion
    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage
    const totalProduct = items.length;
    const [ currentList, setCurrentList ] = useState(1);


    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };

    useEffect(() => {
        axios.get('http://190.60.237.163/traegrupos')
            .then((res) => setCategories(res.data.RESP))
    }, [])

    useEffect(() => {
        axios.get("http://190.60.237.163/articulos/?familia=A&size=200")
            .then(res => setItems(res.data.RESP))

    }, []);

    const arrayDos = () => {
        const isLastSlide = currentList === categories.length - 1;
        const newIndex = isLastSlide ? 0 : currentList + 1;
        setCurrentList(newIndex)
    }

    console.log(items)

    console.log(categories)

    return (
        <div className='h-[90vh] flex'>
            {/* sidebar */}
            <div className='bg-slate-300 border-2 border-black w-auto h-full  rounded-tr-xl rounded-br-xl transition-all dark:bg-[#1f1d2b] dark:text-white 
                overflow-y-scroll duration-300 lg:flex flex-col justify-between hidden'
            >
                {/* para pc */}
                <div >
                    <ul className=''>
                        <li className='flex gap-x-3 items-center pl-1 mb-6'>
                            <img src={LogoBlack} alt="" className='cursor-pointer w-[70px]' />
                            <h2 className='dark:text-white origin-left font-medium font-advent text-xl'>
                                Star professional
                            </h2>
                        </li>
                        {/* ACCESORIOS */}
                        <section className='flex flex-col items-center justify-center container'>
                            <div id="accordionExample">
                                <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="mb-0" id="headingOne">
                                        <button
                                            className={`${activeElement === "element1" &&
                                                `text-black dark:text-blue-400`
                                                } uppercase group relative flex w-[13rem] items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-black 
                                            transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white font-semibold
                                            border-b-2 pl-8 border-gray-400`}
                                            type="button"
                                            onClick={() => handleClick("element1")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Accesorios
                                            <span
                                                className={`${activeElement === "element1"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <TECollapse
                                        show={activeElement === "element1"}
                                        className="!mt-0 !rounded-b-none !shadow-none"
                                    >
                                        <div className="px-5 py-4">
                                            <ul className='mb-6 '>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Accesorios para extenciones
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Envases y automizadores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Extensiones de cabello
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Frascos de desinfeccion
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Gorros
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Kanekalon
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Lupas
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Mandiles
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Papel aluminio
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Peines
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Protectores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Accesorios para peinados
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Rulos y chumis
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Simuladores de peluqueria
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    NN
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Tijeras-Grafiladoras-Portatijeras
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Balacas
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Bowls
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Brochas y mezcladores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Caimanes y pinzas para el cabello
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Capas y camisas antiflujo
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Cepillos
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Desechables de peluqueria
                                                </li>
                                            </ul>
                                        </div>
                                    </TECollapse>
                                </div>
                            </div>
                        </section>
                        {/* ELECTRIOCS */}
                        <section className='flex flex-col items-center justify-center container lg:relative lg:top-[2rem]'>
                            <div id="accordionExample">
                                <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="mb-0" id="headingOne">
                                        <button
                                            className={`${activeElement === "element2" &&
                                                `text-black dark:text-black`
                                                } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                            type="button"
                                            onClick={() => handleClick("element2")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Electricos
                                            <span
                                                className={`${activeElement === "element2"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <TECollapse
                                        show={activeElement === "element2"}
                                        className="!mt-0 !rounded-b-none !shadow-none"
                                    >
                                        <div className="px-5 py-4">
                                            <ul className='mb-6 '>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Cepillo secador
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Sterilizadores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Pinzas electronica para keratina
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Pinzas y risadores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Gorros
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Kanekalon
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Lupas
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Mandiles
                                                </li>
                                            </ul>
                                        </div>
                                    </TECollapse>
                                </div>
                            </div>
                        </section>
                        {/* CUIDADO CAPILAR */}
                        <section className='flex flex-col items-center justify-center gap-8 container lg:relative lg:top-[4rem]'>
                            <div id="accordionExample">
                                <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="mb-0" id="headingOne">
                                        <button
                                            className={`${activeElement === "element3" &&
                                                `text-black dark:text-black`
                                                } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                            type="button"
                                            onClick={() => handleClick("element3")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Cuidado capilar
                                            <span
                                                className={`${activeElement === "element3"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <TECollapse
                                        show={activeElement === "element3"}
                                        className="!mt-0 !rounded-b-none !shadow-none"
                                    >
                                        <div className="px-5 py-4">
                                            <ul className='mb-8 '>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Ampólletas
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Tonicos
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Tratamientos
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Fluido de rizos
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Macarillas
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Mascarillas de color
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Pre shampoo
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Shampoo color
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Shampoo en seco
                                                </li>
                                            </ul>
                                        </div>
                                    </TECollapse>
                                </div>
                            </div>
                        </section>
                        {/* COLORACION Y/O QUIMICOS  */}
                        <section className='flex flex-col items-center justify-center container lg:relative lg:top-[6rem]'>
                            <div id="accordionExample">
                                <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="mb-0" id="headingOne">
                                        <button
                                            className={`${activeElement === "element4" &&
                                                `text-black dark:text-black`
                                                } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                            type="button"
                                            onClick={() => handleClick("element4")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Coloracion y/o quimicos
                                            <span
                                                className={`${activeElement === "element4"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <TECollapse
                                        show={activeElement === "element4"}
                                        className="!mt-0 !rounded-b-none !shadow-none"
                                    >
                                        <div className="px-5 py-4">
                                            <ul className='mb-6 '>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Aclarantes
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Matizantes
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Neutralizadores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Ondulados
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Pegante de extenciones
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Tinte tono sobre tono
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Tintes permanentes
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Tintes semipermanentes
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Removedor de pegante
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Activadores de color
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Agua oxigenada
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Alizadores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Ampolletas cubre canas
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Descolorantes
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Emulsiones reveladoras
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Henna
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Keratinas
                                                </li>
                                            </ul>
                                        </div>
                                    </TECollapse>
                                </div>
                            </div>
                        </section>
                        {/* FINALIZADO */}
                        <section className='flex flex-col items-center justify-center container lg:relative lg:top-[9rem]'>
                            <div id="accordionExample">
                                <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                                    <h2 className="mb-0" id="headingOne">
                                        <button
                                            className={`${activeElement === "element5" &&
                                                `text-black dark:text-black`
                                                } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                            type="button"
                                            onClick={() => handleClick("element5")}
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Finalizado
                                            <span
                                                className={`${activeElement === "element5"
                                                    ? `rotate-[-180deg] -mr-1`
                                                    : `rotate-0 fill-[#212529]  dark:fill-white`
                                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <TECollapse
                                        show={activeElement === "element5"}
                                        className="!mt-0 !rounded-b-none !shadow-none"
                                    >
                                        <div className="px-5 py-4">
                                            <ul className='mb-6 '>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Aceites u oleos
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Termo protectores
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Crema para peinar
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Espuma
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Fluido para cabello
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Geles
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Lacas
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Lacas fantasia
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Perfumes para cabello
                                                </li>
                                                <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                                    Siliconas
                                                </li>
                                            </ul>
                                        </div>
                                    </TECollapse>
                                </div>
                            </div>
                        </section>
                    </ul>
                </div>
            </div>
            {/* contenido */}
            <div className='pl-27  flex-1 h-full overflow-y-scroll'>
                {/* nombre de los grupos */}
                <div className='relative flex items-center justify-around'>
                   {
                     categories.map((category) => (
                        <button key={category.Codigo} className='bg-black px-3 py-4 text-white' 
                          
                        >
                            {category?.Grupos?.Nombre}
                        </button>
                     ))
                   }
                </div>
                <div>
                    <div className='lg:pl-5 grid grid-cols-1 lg:grid-cols-4'>
                        <div className='lg:col-span-full'>
                            <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28'>
                                {
                                    items.map((product, i) => (

                                        <div key={i} className=" w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <Link to={`/productsDetail/${product?.Codigo}`}>
                                                <img className="p-8 rounded-t-lg" src={product.Foto} alt="product image"

                                                />
                                            </Link>
                                            <div className="px-5 pb-5">
                                                <a href="#">
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        {product.Descripcion}
                                                    </h5>
                                                </a>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.Precio}</span>
                                                    <span>{product.Codigo}</span>
                                                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    )).slice(firsIndex, lastIndex)
                                }
                                <Pagination
                                    productsPage={productsPage}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    totalProduct={totalProduct}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Capilar

