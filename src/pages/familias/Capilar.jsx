import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { RiStackLine } from "react-icons/ri";
import { TECollapse } from "tw-elements-react";
import './style.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductCategoriesThunk, groupFilterThunk } from '../../store/slice/product.slice';
import CardNew from '../Home/card/CardNew';
import Pagination from '../../components/Pagination/Pagination';
import { alert, button, useSelect } from '@material-tailwind/react';
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import Accesorios from './utils/accesorios';
import Electricos from './utils/electricos';
import CuidadoCapilar from './utils/cuidado-capilar';
import Coloracion from './utils/coloracion';
import Finalizado from './utils/finalizado';


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
    const [currentList, setCurrentList] = useState(1);
    // traer articulos de redux
    const productList = useSelector(state => state.product);
    // accesorios
    const [showDrop, setShowDrop] = useState(true);
    // electricos
    const [isOpen, setIsOpen] = useState(true);
    // cuidado capilar
    const [capillaryCare, setCapillarvCare] = useState(true);
    // COLORACION Y/O QUIMICOS
    const [coloration, setColoration] = useState(true);
    // finalizado
    const [finalized, setFinalized] = useState(true);


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

    const nameCategories = [
        {
            id: 1,
            name: 'Accesorios',
        },
        {
            id: 2,
            name: 'Electricos',
        },
        {
            id: 3,
            name: 'Cuidado capilar',
        },
        {
            id: 4,
            name: 'Coloracion y/o quimicos',
        },
        {
            id: 5,
            name: 'Finalizado'
        }
    ]

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
                            <img src="https://i.ibb.co/4gLsH8F/LOGO-STAR-NEGRO.png" alt="" className='cursor-pointer w-[70px]' />
                            <h2 className='dark:text-white origin-left font-medium font-advent text-xl'>
                                Star professional
                            </h2>
                        </li>


                    </ul>
                </div>
            </div>
            {/* contenido */}
            <div className='pl-27  flex-1 h-full overflow-y-scroll'>
                <div>
                    <img src="https://i.ibb.co/TH07CLN/Capilar.jpg" alt="" className='p-8 w-full h-[22rem] object-cover bg-top' />
                </div>
                {/* nombre de los grupos */}
                <div className='relative flex items-center justify-around mb-[9rem]'>
                    {/* accesorios items 1# */}
                    <div className='bg-white dark:bg-[#1f1d2b] dark:text-white px-2 py-3 w-[9.6rem] h-[3rem] rounded-lg'>
                        <button onClick={() => setShowDrop(!showDrop)}>
                            <h2 className='relative  text-xl font-semibold'>Accesorios</h2>
                            <div className='relative left-[7rem] bottom-6 '>
                                {
                                    showDrop ?
                                        <RiArrowUpSLine className='text-xl' />
                                        :
                                        <RiArrowDownSLine className='text-xl' />
                                }
                            </div>
                        </button>
                        {/* sidebar */}
                        <div className={`border border-slate-400 bg-white dark:bg-[#1f1d2b] dark:text-white w-[22rem] h-[10rem] overflow-y-auto ${!showDrop ? '' : 'hidden'}`}>
                            {/* accesorios items 1# */}
                            {
                                Accesorios.map(accesorios => (
                                    <ul key={accesorios.id} className='px-2 py-2  flex flex-col items-center cursor-pointer'>
                                        <li className='border-b border-gray-600 w-full ' onClick={() => setShowDrop(!showDrop)}>
                                            {accesorios.List}
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    {/* electricos items 2# */}
                    <div className='bg-white px-2 py-3 w-[9.6rem] h-[3rem] rounded-lg dark:bg-[#1f1d2b] dark:text-white'>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <h2 className='relative  text-xl font-semibold'>Electricos</h2>
                            <div className='relative left-[7rem] bottom-6 '>
                                {
                                    isOpen ?
                                        <RiArrowUpSLine className='text-xl' />
                                        :
                                        <RiArrowDownSLine className='text-xl' />
                                }
                            </div>
                        </button>
                        {/* sidebar */}
                        <div className={`border border-slate-400 bg-white w-[22rem] dark:bg-[#1f1d2b] dark:text-white h-[10rem] overflow-y-auto ${!isOpen ? '' : 'hidden'}`}>
                            {/* accesorios items 1# */}
                            {
                                Electricos.map(electricos => (
                                    <ul key={electricos.id} className='px-2 py-2 flex flex-col items-center cursor-pointer '>
                                        <li className='border-b border-gray-600 w-full hover:bg-gradient-to-r hover:from-white hover:to-blue-500 hover:text-black'
                                            onClick={() => setIsOpen(!isOpen)}
                                        >
                                            {electricos.List}
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    {/* cuidado capilar */}
                    <div className='bg-white px-2 py-3 w-[12.5rem] h-[3rem] rounded-lg dark:bg-[#1f1d2b] dark:text-white'>
                        <button onClick={() => setCapillarvCare(!capillaryCare)}>
                            <h2 className='relative  text-xl font-semibold'>Cuidado capilar</h2>
                            <div className='relative left-[10.4rem] bottom-6 '>
                                {
                                    capillaryCare ?
                                        <RiArrowUpSLine className='text-xl' />
                                        :
                                        <RiArrowDownSLine className='text-xl' />
                                }
                            </div>
                        </button>
                        {/* sidebar */}
                        <div className={`border border-slate-400 bg-white w-[22rem] h-[10rem] overflow-y-auto ${!capillaryCare ? '' : 'hidden'}`}>
                            {/* accesorios items 1# */}
                            {
                                CuidadoCapilar.map(cuidarCap => (
                                    <ul key={cuidarCap.id} className='px-2 py-2 flex flex-col items-center cursor-pointer dark:bg-[#1f1d2b] dark:text-white'>
                                        <li className='border-b border-gray-600 w-full' onClick={() => setCapillarvCare(!capillaryCare)}>
                                            {cuidarCap.List}
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    {/* coloraciion y/o quimicos */}
                    <div className='bg-white px-2 py-3 w-[18rem] h-[3rem] rounded-lg dark:bg-[#1f1d2b] dark:text-white'>
                        <button onClick={() => setColoration(!coloration)}>
                            <h2 className='relative  text-xl font-semibold'>Coloracion y/o quimicos</h2>
                            <div className='relative left-[16rem] bottom-6 '>
                                {
                                    coloration ?
                                        <RiArrowUpSLine className='text-xl' />
                                        :
                                        <RiArrowDownSLine className='text-xl' />
                                }
                            </div>
                        </button>
                        {/* sidebar */}
                        <div className={`border border-slate-400 bg-white w-[22rem] h-[10rem] overflow-y-auto dark:bg-[#1f1d2b] dark:text-white ${!coloration ? '' : 'hidden'}`}>
                            {/* accesorios items 1# */}
                            {
                                Coloracion.map(coloracion => (
                                    <ul key={coloracion.id} className='px-2 py-3 flex flex-col items-center cursor-pointer'>
                                        <li className='border-b border-gray-600 w-full py-3' onClick={() => setShowDrop(!coloration)}>
                                            {coloracion.List}
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    {/* finalizado */}
                    <div className='bg-white px-2 py-3 w-[10rem] h-[3rem] rounded-lg dark:bg-[#1f1d2b] dark:text-white'>
                        <button onClick={() => setFinalized(!finalized)}>
                            <h2 className='relative  text-xl font-semibold'>Finalizado</h2>
                            <div className='relative left-[7.4rem] bottom-6 '>
                                {
                                    finalized ?
                                        <RiArrowUpSLine className='text-xl' />
                                        :
                                        <RiArrowDownSLine className='text-xl' />
                                }
                            </div>
                        </button>
                        {/* sidebar */}
                        <div className={`border border-slate-400 bg-white dark:bg-[#1f1d2b] dark:text-white w-[14rem] h-[10rem] overflow-y-auto ${!finalized ? '' : 'hidden'}`}>
                            {/* accesorios items 1# */}
                            {
                                Finalizado.map(finalizado => (
                                    <ul key={finalizado.id} className='px-2 py-3 flex flex-col items-center cursor-pointer'>
                                        <li className='border-b border-gray-600 w-full py-3' onClick={() => setShowDrop(!coloration)}>
                                            {finalizado.List}
                                        </li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* TODOS LOS PRODUCTOS */}
                <div>
                    <div className='lg:pl-5 grid grid-cols-1 lg:grid-cols-4'>
                        <div className='lg:col-span-full'>
                            <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28'>
                                {
                                    productList.map((product, i) => (

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

export default Capilar;

