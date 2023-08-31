import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductCategoriesThunk } from '../../../store/slice/product.slice';
import { RiFullscreenExitLine, RiApps2Fill, RiCloseCircleFill } from "react-icons/ri";
import Categories from '../Category';
import { useNavigate } from 'react-router-dom';
import { TECollapse } from "tw-elements-react";



function Group({ itemPage, setItemPage, nextPage, setNextPage, showMenu, setShowMenu }) {

    const dispatch = useDispatch();
    // estado para categorias
    const [categories, setCategories] = useState([]);

    const [num, setNum] = useState(1);
    const [categoryNum, setCategoryNum] = useState(4)
    const navigate = useNavigate();
    const [activeElement, setActiveElement] = useState("");

    const sumar = () => {
        setCategoryNum(categories)
    }

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    useEffect(() => {
        axios.get("http://190.60.237.163/traegrupos")
            .then(res => setCategories(res.data.RESP))

    }, [])

    const next = () => {
        setNum(num + 1)
    }

    const prev = () => {
        setNum(num - 1)
    }



    return (
        <div className='flex items-center justify-between relative left-[6rem] top-4  rounded-lg  '>
            <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden text-xl md:text-2xl md:relative md:right-16'>
                <RiApps2Fill className="dark:text-white" />
                <p className='md:relative relative left-8 md:bottom-7 bottom-6  font-monserrat font-bold uppercase '>Categorias</p>
            </button>
            <div className={`mb-2 fixed left-0 bg-slate-300 dark:bg-[#181a20] w-full h-full z-50 transition-all ${showMenu ? "top-0" : "-top-full"}`}>
                <button onClick={() => setShowMenu(!showMenu)} className='text-3xl md:text-4xl p-4 text-white relative left-[20rem] md:left-[42rem]'>
                    <RiCloseCircleFill className='dark:text-white text-red-600' />
                </button>
                {/* CAPILAR */}
                <section className='flex flex-col items-center justify-center gap-8 container lg:relative lg:top-[4rem]'>
                    <div id="accordionExample">
                        <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="mb-0" id="headingOne">
                                <button
                                    className={`${activeElement === "element1" &&
                                        `text-black dark:text-black`
                                        } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                    type="button"
                                    onClick={() => handleClick("element1")}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Capilar
                                    
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
                                    <ul className='mb-8 '>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400' onClick={() => navigate('/capilar')}>
                                            Accesorios
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400' onClick={() => navigate('/capilar')}>
                                            Electricos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400' onClick={() => navigate('/capilar')}>
                                            Cuidado capilar
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400' onClick={() => navigate('/capilar')}>
                                          Coloracion y/o quimicos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400' onClick={() => navigate('/capilar')}>
                                            Finalizado
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
                {/* HOMBRE */}
                <section className='flex flex-col items-center justify-center gap-8 container relative top-[2rem]'>
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
                                    hombre
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
                                    <ul className='mb-8 '>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Accesorios
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Electricos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Cuidado capilar
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                          Coloracion y/o quimicos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Finalizado
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
                {/* CUIDADO FACIL */}
                <section className='flex flex-col items-center justify-center gap-8 container relative top-[3.5rem]'>
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
                                    cuidado facial
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
                                            Accesorios
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Electricos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Productos
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
                {/* MAQUILLAJE */}
                <section className='flex flex-col items-center justify-center gap-8 container relative top-[5rem]'>
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
                                    Maquillaje
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
                                    <ul className='mb-8 '>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Accesorios
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Electricos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Rostro
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                          Ojos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Labios
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Maquillaje permanente
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
                {/* CUIDADO CORPORAL */}
                <section className='flex flex-col items-center justify-center gap-8 container relative top-[6.3rem]'>
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
                                    cuidado corporal
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
                                    <ul className='mb-8 '>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Accesorios
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Electricos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Productos
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
                {/* UÑAS */}
                <section className='flex flex-col items-center justify-center gap-8 container relative top-[7.6rem]'>
                    <div id="accordionExample">
                        <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="mb-0" id="headingOne">
                                <button
                                    className={`${activeElement === "element6" &&
                                        `text-black dark:text-black`
                                        } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                    type="button"
                                    onClick={() => handleClick("element6")}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    uñas
                                    <span
                                        className={`${activeElement === "element6"
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
                                show={activeElement === "element6"}
                                className="!mt-0 !rounded-b-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <ul className='mb-8 '>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Accesorios
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Electricos
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Cuidado de uñas
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Decoracion
                                        </li>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Sistemas y practicas
                                        </li>
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
                {/* LIMPIEZA Y DESINFECCION */}
                <section className='flex flex-col items-center justify-center gap-8 container relative top-[9rem]'>
                    <div id="accordionExample">
                        <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="mb-0" id="headingOne">
                                <button
                                    className={`${activeElement === "element7" &&
                                        `text-black dark:text-black`
                                        } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                    type="button"
                                    onClick={() => handleClick("element7")}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    limpieza y desinfección
                                    <span
                                        className={`${activeElement === "element7"
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
                                show={activeElement === "element7"}
                                className="!mt-0 !rounded-b-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <ul className='mb-8 '>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Productos
                                        </li>    
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
                {/* ACCESORIOS */}
                <section className='flex flex-col items-center justify-center gap-8 container relative top-[10.5rem]'>
                    <div id="accordionExample">
                        <div className="rounded-t-lg border border-neutral-200 bg-white  dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="mb-0" id="headingOne">
                                <button
                                    className={`${activeElement === "element8" &&
                                        `text-black dark:text-black`
                                        } uppercase group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 
                                              transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white
                                              font-semibold`}
                                    type="button"
                                    onClick={() => handleClick("element8")}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    accesorios
                                    <span
                                        className={`${activeElement === "element8"
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
                                show={activeElement === "element8"}
                                className="!mt-0 !rounded-b-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <ul className='mb-8 '>
                                        <li className='mb-4 px-2 py-3 font-semibold text-base cursor-pointer pl-8 border-b-2 border-gray-400'>
                                            Accesorios
                                        </li>    
                                    </ul>
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Group;
