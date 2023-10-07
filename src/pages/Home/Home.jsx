import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NameFiltredThunk, filterProductCategoriesThunk, getProductsThunk } from '../../store/slice/product.slice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiSearchLine, RiCloseFill, RiShoppingCart2Line, RiWhatsappLine, RiBilibiliFill, RiApps2Fill, RiFullscreenExitLine, 
    RiExternalLinkFill, RiInstagramLine, RiFacebookCircleFill  } 
        from "react-icons/ri";
import Cart from '../../components/cart/Cart';
import SearchBar from '../../components/SearchBar/SearchBar'
import Category from '../../components/Categorias/Category';
import CardNew from '../Home/card/CardNew'
import SliderItems from '../../components/carrusel/SliderItems';
import CateItems from '../../components/carrusel/CateItems';
import { useForm } from 'react-hook-form';
import Group from '../../components/Categorias/Grupos/Group';
import ProductNews from '../../pages/productNews/ProductNews';
import DistribuidoresF from '../../../public/img/BANNER-DISTRIBUIDORES.webp'




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
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-12 '>
                        <div>
                            {/* categorias */}
                            <div className=' '>
                                <Category />
                            </div>
                            {/* menu movil  categorias */}
                            <div className=' md:flex md:items-center md:justify-between '>
                                {/* buscador */}
                                <div className='relative md:hidden hidden lg:hidden'>
                                    <SearchBar />
                                </div>
                            </div>
                            {/* Banner distribuidores*/}
                            <span className='text-white  '>
                                <Link to="/distribuidores" className=''>
                                    <p className='text-2xl'>
                                        <img src={DistribuidoresF} alt="" className='lg:rounded-lg ' />
                                    </p>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className=' '>
                        <Group />
                    </div>
                </header>    
                {/* productos */}
                <div className=' '>
                    <CardNew />
                </div>
                {/* contra-entrega */}
                <div className='relative bottom-[4rem]'>
                    <img src="https://i.ibb.co/PGQrJmk/BANNER-PAGOS-CONTRAENTREGA.jpg" alt="contra-entrega" />
                </div>
                {/* redes sociales  */}
                <ul className='md:flex flex-col items-center justify-center gap-6 relative bottom-[3.3rem] lg:hidden '>
                        <div className='flex items-center justify-around md:justify-between gap-8'>
                            {/* facebook */}
                            <li className='flex items-center justify-center md:w-[60px] md:h-[60px] w-[50px] h-[50px] text-white text-2xl bg-blue-500 rounded-lg -skew-y-6 shadow-lg 
                               shadow-blue-600 transition duration-[0.3s] border-blue-900 dark:shadow-blue-400'
                            >
                                <a href="" className=''>
                                    <RiFacebookCircleFill className='text-4xl' />
                                </a>
                            </li>
                            {/* instagram */}
                            <li className='flex items-center justify-center md:w-[60px] md:h-[60px] w-[50px] h-[50px] text-white text-2xl bg-pink-500 rounded-lg -skew-y-6 shadow-lg shadow-pink-600
                               transition duration-[0.3s] border border-pink-700 dark:shadow-purple-400'
                            >
                                <a href="" className=''>
                                    <RiInstagramLine className='text-4xl' />
                                </a>
                            </li>
                            {/* whatsapp */}
                            <li className='flex items-center justify-center md:w-[60px] md:h-[60px] w-[50px] h-[50px] text-white bg-green-500 rounded-lg -skew-y-6 shadow-lg 
                              shadow-green-600 transition duration-[0.3s]'
                            >
                                <a href="" className=''>
                                    <RiWhatsappLine className='text-4xl' />
                                </a>
                            </li>
                        </div>
                    </ul>
                {/* banner de descuentos */}
                <div className='relative bottom-9'>
                    {/* para pc */}
                    <img 
                      src="https://i.ibb.co/R0j791t/BANNER-INFO-DTOS.jpg" 
                      alt="banner-descuentos" 
                      className='h-[18rem] w-full object-cover lg:flex hidden'
                    />
                    {/* para md / sm */}
                    <img 
                      src="https://i.ibb.co/R0j791t/BANNER-INFO-DTOS.jpg" 
                      alt="banner-descuentos" 
                      className='object-cover flex lg:hidden'
                    />
                </div>
            </div>
            {/* <div className='lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1f1d2b] w-full h-full'>
                <Cart />
            </div> */}
        </div>
    )
}

export default Home;