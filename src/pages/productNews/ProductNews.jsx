import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingCart2Line, RiWhatsappLine, } from "react-icons/ri";
import { filterProductCategoriesThunk, getProductsThunk } from '../../store/slice/product.slice';
import { useNavigate, useParams } from 'react-router-dom';
import Category from '../../components/Categorias/Category'
import Cart from '../../components/cart/Cart';
import BannerProduct from '../../../public/img/BANNER-PRODUCTOS.jpg';
import ContactBar from '../../components/ContacBar/ContactBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Group from '../../components/Categorias/Grupos/Group';
import Pagination from '../../components/Pagination/Pagination';
import AlertAdd from '../../components/alertas-add/AlertAdd';

function ProductNews({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {

    const dispatch = useDispatch();
    // traer articulos de redux
    const productList = useSelector(state => state.product);
    // total de productos
    const totalProduct = productList.length;

    // paginacion paginas y numero de productos
    const [productsPage, setProductsPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    // los multiplos que se van a recorrer en en la paginacion
    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage
    // navigar haci otras rutas
    const navigate = useNavigate();
    // estado de pruebas api
    const [ product, setProduct ] = useState([]);


    const onAddProduct = (product) => {
        // esta funcion es para que no se repita el mismo articulo y lo sume ****//
        // if (allProducts.find(item => item.id === product.id)) {

        //     const products = allProducts.map(item =>
        //         item.id === product.id
        //             ? { ...item, Cantidad: item.quantity + 1 }
        //             : item
        //     );
        //     // setCountProducts(countProducts + product.quantity)
        //     return setAllProducts([...products])
        // }
        // este set es para sumar el contador del icono **
        // setCountProducts(countProducts + product.quantity)
        // {para que multiplique el valor por la cantidad ponemos '* product.quantity' en la funcion de setTotal}
        // setTotal(total + product?.Precio * product.quantity)
        setAllProducts([...allProducts, product])
        console.log(allProducts)
      

    }

    useEffect(() => {
        dispatch(getProductsThunk())

    }, [dispatch])


    return (
        <div className='lg:pl-5 grid grid-cols-1 lg:grid-cols-4 overflow-hidden'>
            <div className='lg:col-span-full '>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
                    <div>
                        {/* informacion de contacto */}
                        <div>

                        </div>
                        {/* titulo y buscador */}
                        <div className='flex items-center justify-between'>
                            <h2 className='mb-6 text-2xl text-gray-300'>Star E-commerce</h2>
                            <form>
                                <section className='w-full flex items-center'>
                                    <SearchBar />
                                </section>
                            </form>
                        </div>
                        {/* banner */}
                        <span>
                            <img src={BannerProduct} alt="" className='rounded-lg' />
                        </span>
                    </div>
                </div>
                {/* categorias */}
                <div className=' '>
                    <Group />
                </div>
                {/* Articulos */}
                <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28'>
                    {
                        productList.map(product => (
                            <div
                                className='bg-white
                              dark:bg-[#2a1f1f] p-8 rounded-xl lg:w-[18rem] 
                                flex flex-col items-center gap-2 dark:text-gray-300 text-center shadow shadow-black'
                                key={product?.Codigo}

                            >
                                <img src={product.Foto} alt=""
                                    className='object-cover w-60 '
                                    onClick={() => navigate(`/productsDetail/${product?.Codigo}`)}
                                />
                                <p>{product?.Descripcion}</p>
                                <span>REF: {product?.Codigo}</span>
                                <p>$: {product?.Precio}</p>
                                <div className='flex items-center justify-around gap-4'>
                                    <button
                                        className='px-4 py-2 bg-indigo-500 rounded-lg'
                                        type="button"
                                        onClick={() => onAddProduct(product)}
                                    >
                                        <RiShoppingCart2Line className='text-2xl text-white ' />
                                    </button>

                                    <button className='px-4 py-2 bg-emerald-400 rounded-lg'>
                                        <RiWhatsappLine className='text-2xl text-white ' />
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
            {/* <div className='lg:col-span-2  fixed lg:static right-0 top-0 bg-[#1f1d2b] w-full h-full'>
                <Cart />
            </div> */}

        </div>
    )
}

export default ProductNews;
