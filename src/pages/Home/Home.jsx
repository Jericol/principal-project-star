import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NameFiltredThunk, filterProductCategoriesThunk, getProductsThunk } from '../../store/slice/product.slice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiSearchLine, RiCloseFill, RiShoppingCart2Line, RiWhatsappLine, RiBilibiliFill, RiApps2Fill, RiFullscreenExitLine, RiExternalLinkFill } from "react-icons/ri";
import ContactBar from '../../components/ContacBar/ContactBar';
import Cart from '../../components/cart/Cart';
import SearchBar from '../../components/SearchBar/SearchBar'
import BannerDistri from '../../../public/img/BANNER-DISTRIBUIDORES.jpg'
import Category from '../../components/Categorias/Category';
import CardNew from '../Home/card/CardNew'
import SliderItems from '../../components/carrusel/SliderItems';
import BannerSend from '../../../public/img/BANNER-CONTRAENTREGA.jpg';
import BannerDescuentos from "../../../public/img/BANNER-INFO-DTOS.jpg"
import CateItems from '../../components/carrusel/CateItems';
import { useForm } from 'react-hook-form';
import MovalNv from '../../components/modalNv/MovalNv';



function Home() {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.product);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [closeCart, setCloseCart] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [ open, setOpen ] = useState(false)

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
        <div className='pl-6 grid grid-cols-1 lg:grid-cols-8 overflow-y-auto dark:bg-[#1f1d2b] dark:text-white w-auto'>
            <div className='lg:col-span-full '>
                {/* header */}
                <header className='p-4'>
                    {/* titulo y busqueda */}
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
                        <div>
                            
                            {/* titulo y buscador */}
                            <div className='flex items-center justify-between'>
                                {/* modal */}
                                 <div>
                                    <MovalNv 
                                      showModal={showModal}
                                      setShowModal={setShowModal}
                                      open={open}
                                      setOpen={setOpen}
                                    />
                                 </div>
                                {/* Barra de busqueda */}
                                <form>
                                    <section className='w-full flex items-center'>
                                        <SearchBar />
                                    </section>
                                </form>
                            </div>
                            {/* Banner */}
                            <span className='text-white mt-3-3'>
                                <Link to="/distribuidores">
                                    <p className='text-2xl'>
                                        <img src={BannerDistri} alt="" className='rounded-lg' />
                                    </p>
                                </Link>
                            </span>
                        </div>
                    </div>
                    {/* menu movil  categorias */}
                    <div>
                        <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden text-2xl'>
                            <RiApps2Fill className="text-white" />
                        </button>
                        <div className={`mb-2 fixed left-0 bg-[#181a20] w-full h-full z-50 transition-all ${showMenu ? "top-0" : "-top-full"}`}>
                            <button onClick={() => setShowMenu(!showMenu)} className='text-2xl p-4 text-white'>
                                <RiFullscreenExitLine />
                            </button>
                            <ul className='flex flex-col items-center text-gray-300'>
                                {
                                    categories.map(category => (
                                        <div key={category?.Codigo} onClick={() => dispatch(filterProductCategoriesThunk(category?.Codigo))} className=''>
                                            <button className='border-b-4 border-indigo-500 py-2 pr-4' onClick={() => setShowMenu(!showMenu)}>{category?.Nombre}</button>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* categorias */}
                    <div className='mb-6 '>
                        <Category />
                    </div>
                    {/* slider de productos */}
                    <div>
                        <SliderItems />
                    </div>
                </header>
                {/* titulo de los productos */}
                <div className='flex items-center justify-between p-4'>
                    <h2 className='text-xl text-gray-300 '>productos destacados</h2>
                </div>
                <div className='mb-8'>
                    <img src={BannerSend} alt="" />
                </div>
                <div className='mb-8'>
                    <CardNew />
                </div>
                <div>
                    <img src={BannerDescuentos} alt="" className='w-full' />
                </div>
                <div className='mb-6'>
                    <CateItems />
                </div>
            </div>
            {/* <div className='lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1f1d2b] w-full h-full'>
                <Cart />
            </div> */}
        </div>
    )
}

export default Home;