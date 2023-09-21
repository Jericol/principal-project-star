import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingCart2Line, RiWhatsappLine, } from "react-icons/ri";
import { filterProductCategoriesThunk, getProductsThunk } from '../../store/slice/product.slice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Category from '../../components/Categorias/Category'
import Cart from '../../components/cart/Cart';
import ContactBar from '../../components/ContacBar/ContactBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Group from '../../components/Categorias/Grupos/Group';
import Pagination from '../../components/Pagination/Pagination';
import AlertAdd from '../../components/alertas-add/AlertAdd';
import { data } from 'autoprefixer';
import { addCartThunk } from '../../store/slice/cart.slice';

function ProductNews({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {

    const dispatch = useDispatch();
    // traer articulos de redux
    const productList = useSelector(state => state.product);
    // total de productos de paginacion
    const totalProduct = productList.length;
    // paginacion paginas y numero de productos
    const [productsPage, setProductsPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    // los multiplos que se van a recorrer en en la paginacion
    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage
    // navigar haci otras rutas
    const navigate = useNavigate();
    // estado de categorias movil
    const [itemPage, setItemPage] = useState(4);
    const [nextPage, setNextPage] = useState(1)
    const [showMenu, setShowMenu] = useState(false)





    const addProductCart = (data) => {
        console.log(data)
        axios.post("http://190.60.237.163/encabezadoped", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('id', res.data.ID)

            })
            .catch(error => {
                if (error.response) {
                    console.log('respuesta de la peticion', error.response.data)
                } else if (error.request) {
                    console.log('respuesta de requisito', error.request)
                } else {
                    console.log('error hacer la solicitud', error.message)
                }
            })

        dispatch(addCartThunk(data))
    }

    console.log(data)

    useEffect(() => {
        dispatch(getProductsThunk())

    }, [dispatch])


    return (
        <div className='lg:pl-5  overflow-hidden'>
            <div className='lg:col-span-full '>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
                    <div>
                        {/* titulo y buscador */}
                        <div className='flex items-center justify-between'>
                            {/* categorias */}
                            <div className=' '>
                                <Category />
                            </div>
                        </div>
                        {/* categorias movil */}
                        <div className='mb-8 md:flex md:items-center md:flex-col md:justify-between md:relative md:right-5'>
                            <Group
                                showMenu={showMenu}
                                setShowMenu={setShowMenu}
                                itemPage={itemPage}
                                setItemPage={setItemPage}
                                nextPage={nextPage}
                                setNextPage={setNextPage}
                            />
                            {/* buscador */}
                            <div className='relative left-4 hidden md:relative md:top-1 '>
                                <SearchBar />
                            </div>
                        </div>
                        {/* banner PRODUCTOS*/}
                        <span>
                            <img src="https://i.ibb.co/Y0YrmCD/BANNER-PRODUCTOS.jpg" alt="banner-productos" className='rounded-lg' />
                        </span>
                    </div>
                </div>
                {/* Articulos */}
                <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-28'>
                    {
                        productList.map(product => (
                            <div
                                className='bg-white
                              dark:bg-[#2a1f1f] p-8 rounded-xl lg:w-[23rem] 
                                flex flex-col items-center gap-2 dark:text-gray-300 text-center shadow shadow-black'
                                key={product?.Codigo}

                            >
                                <img src={product.Foto} alt=""
                                    className='object-cover w-60 cursor-pointer'
                                    onClick={() => navigate(`/productsDetail/${product?.Codigo}`)}
                                />
                                <p>{product?.Descripcion}</p>
                                <p>$: {product?.Precio}</p>
                                <span>REF: {product?.Codigo}</span>
                                <div className='flex items-center justify-around gap-4 text-white bg-slate-400 px-2 py-1'>
                                    <p>2 und</p>
                                    <p>6 und</p>
                                    <p>12 und</p>
                                </div>
                                <div className='flex items-center justify-around gap-4'>
                                    <span className='font-semibold text-lg'>$:{product.Precio3}</span>
                                    <span className='font-semibold text-lg'>$:{product.Precio4}</span>
                                    <span className='font-semibold text-lg'>$:{product.Precio5}</span>
                                </div>
                                <div className='flex flex-col items-center justify-around gap-4'>
                                    <button className='px-4 py-2 bg-blue-700 w-[12rem] rounded-lg text-white hover:bg-blue-200 hover:text-blue-600'>
                                        <Link to='/payment'>Comprar ahora</Link>
                                    </button>
                                    <button
                                        className='px-4 py-2 bg-blue-200 rounded-lg w-[12rem]  text-blue-700 hover:bg-blue-700 hover:text-white'
                                        type="button"
                                        // onClick={() => onAddProduct(product)}
                                        onClick={() => addProductCart(data)}
                                    >
                                        {/* <RiShoppingCart2Line className='text-2xl text-white ' /> */}
                                        Añadir al carrito
                                    </button>
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
    )
}

export default ProductNews;
