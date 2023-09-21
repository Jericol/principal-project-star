import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { useSelector } from 'react-redux';


function CardNew({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {

    // estado de productos nuevos
    const navigate = useNavigate();
    const [productsPage, setProductsPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    // los multiplos que se van a recorrer en en la paginacion
    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage
    const productList = useSelector(state => state.product);
    // total de productos de paginacion
    const totalProduct = productList.length;

    const addProducts = (product) => {
        setAllProducts([...allProducts, product])
    }


    return (
        <div className='lg:pl-5 grid grid-cols-1 lg:grid-cols-4'>
            <div className='lg:col-span-full'>
                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-7 overflow-x-hidden overflow-y-auto h-[60rem]'>
                    {
                        productList.map((product, i) => (

                            <div key={i} className=" w-[11.8rem] md:w-[15.7rem] lg:w-[23rem] h-auto bg-white border border-gray-200 rounded-lg shadow 
                               dark:bg-gray-800 dark:border-gray-700 lg:relative lg:left-[6rem]"
                            >
                                <Link to={`/productsDetail/${product?.Codigo}`}>
                                    <img className="p-8 rounded-t-lg cursor-pointer" src={product.Foto} alt={product.Descripcion}

                                    />
                                </Link>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xs lg:text-2xl font-semibold sm:lowercase md:uppercase tracking-tight text-gray-900 text-center dark:text-white">
                                            {product.Descripcion}
                                        </h5>
                                    </a>
                                    <div className="flex flex-col items-center gap-2 justify-around mb-4">
                                        {/* precio */}
                                        <span className="text-xs md:text-sm lg:text-xl font-bold text-gray-900  dark:text-white">
                                            ${product.Precio}
                                        </span>
                                        <span className='text-xs lg:text-2xl font-semibold'>
                                            Ref: {product.Codigo}
                                        </span>
                                        <div className='flex items-center justify-around gap-4 text-black dark:text-white border border-slate-400 px-2 py-1 rounded-lg'>
                                            <p className='text-xs md:text-sm lg:text-xl'>2und</p>
                                            <p className='text-xs md:text-sm lg:text-xl'>6und</p>
                                            <p className='text-xs md:text-sm lg:text-xl'>12und</p>
                                        </div>
                                        <div className='flex items-center justify-around gap-4'>
                                            <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{product.Precio3}</span>
                                            <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{product.Precio4}</span>
                                            <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{product.Precio5}</span>
                                        </div>
                                    </div>
                                    {/* boton */}
                                    <button
                                        className="text-white bg-blue-700  font-medium 
                                        rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 mb-4 w-full"
                                    >
                                        <Link to='/payment'>Comprar ahora</Link>
                                    </button>
                                    <button onClick={() => addProducts(product)}
                                        className=" bg-blue-200 text-blue-800 focus:outline-none font-medium 
                                         rounded-lg text-sm px-2 py-2.5 text-center  w-full mb-4"
                                    >
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>

                        ))
                        // .slice(firsIndex, lastIndex)
                    }
                    {/* <Pagination
                        productsPage={productsPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalProduct={totalProduct}
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default CardNew;
