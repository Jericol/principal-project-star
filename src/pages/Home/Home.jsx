import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NameFiltredThunk, filterProductCategoriesThunk, getProductsThunk } from '../../store/slice/product.slice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiSearchLine, RiCloseFill, RiShoppingCart2Line, RiWhatsappLine, RiBilibiliFill, RiApps2Fill, RiFullscreenExitLine, RiExternalLinkFill } from "react-icons/ri";
import ContactBar from '../../components/ContacBar/ContactBar';
import Cart from '../../components/cart/Cart';
import SearchBar from '../../components/SearchBar/SearchBar'
import Category from '../../components/Categorias/Category';
import CardNew from '../Home/card/CardNew'
import SliderItems from '../../components/carrusel/SliderItems';
import CateItems from '../../components/carrusel/CateItems';
import { useForm } from 'react-hook-form';
import MovalNv from '../../components/modalNv/MovalNv';
import Group from '../../components/Categorias/Grupos/Group';
import ProductNews from '../../pages/productNews/ProductNews'




function Home() {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [closeCart, setCloseCart] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = useState(false)

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(getProductsThunk())

        axios.get('http://190.60.237.163/traegrupos')
            .then(res => setCategories(res.data.RESP))

    }, [dispatch])

    console.log(categories);


    const AutoToken = (data) => {
        console.log(data)
    }

    return (
        <div className=' grid grid-cols-1 lg:grid-cols-8 overflow-hidden dark:bg-[#1f1d2b] dark:text-white w-auto'>
            <div className='lg:col-span-full '>
                {/* header */}
                <header className=''>
                    {/* titulo y busqueda */}
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-12 lg:mb-6'>
                        <div>
                            {/* categorias */}
                            <div className='mb-6 '>
                                <Category />
                            </div>
                            {/* menu movil  categorias */}
                            <div className=' md:flex md:items-center md:justify-between '>
                                {/* <Group
                                    showMenu={showMenu}
                                    setShowMenu={setShowMenu}
                                /> */}
                                {/* buscador */}
                                <div className='relative md:hidden hidden lg:hidden'>
                                    <SearchBar />
                                </div>
                            </div>
                            {/* modal y buscador articulo*/}

                            {/* Banner distribuidores*/}
                            <span className='text-white relative bottom-[3rem]'>
                                <Link to="/distribuidores">
                                    <p className='text-2xl'>
                                        <img src="https://i.ibb.co/J5n3wGB/BANNER-DISTRIBUIDORES.jpg" alt="" className='lg:rounded-lg ' />
                                    </p>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className='relative top-12 md:mb-8'>
                        <Group />
                    </div>
                    {/* banner productos */}
                    <div className=''>
                        <SliderItems />
                    </div>
                </header>
                {/* titulo de los productos */}
                <div className='flex items-center justify-between p-4'>
                    <h2 className='text-xl text-gray-300 '>productos destacados</h2>
                </div>
                {/* productos */}
                <div className='mb-8'>
                    <CardNew />
                </div>
                {/* contra-entrega */}
                <div className='mb-8'>
                    <img src="https://i.ibb.co/PGQrJmk/BANNER-PAGOS-CONTRAENTREGA.jpg" alt="contra-entrega" />
                </div>
                <div className='mb-6'>
                    <CateItems />
                </div>
                {/* banner de descuentos */}
                <div>
                    <img src="https://i.ibb.co/R0j791t/BANNER-INFO-DTOS.jpg" alt="banner-descuentos" className='w-full' />
                </div>
            </div>
            {/* <div className='lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1f1d2b] w-full h-full'>
                <Cart />
            </div> */}
        </div>
    )
}

export default Home;