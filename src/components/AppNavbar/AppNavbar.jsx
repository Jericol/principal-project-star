/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';
import {
    RiHome3Line, RiStore2Line, RiShoppingBag3Line, RiTeamLine,
    RiShoppingCart2Line, RiAccountPinCircleLine, RiMoonClearFill, RiSunLine,
} from "react-icons/ri";
import Logo from "../../../public/Logo/LOGO-STAR-BLANCO.png";
import LogoBlack from "../../../public/Logo/LOGO-STAR-NEGRO.png"
import { useEffect, useState } from 'react';
import MovalNv from '../modalNv/MovalNv';
import SearchBar from '../../components/SearchBar/SearchBar';

// eslint-disable-next-line react/prop-types
function AppNavbar({ showMenu, allProducts, setAllProducts, total, countProducts }) {

    // eslint-disable-next-line react/prop-types

    const [hide, setHide] = useState(false);
    const [theme, setTheme] = useState('light');
    const [logo, setLogo] = useState(false);
    const [slow, setSlow] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(1)

    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("usuario", "")
        navigate("/login")
    }



    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        setHide(!hide)
    }

    const onDeleteProduct = (product) => {
        const result = allProducts.filter(item => item.Codigo !== product.Codigo)
        console.log(result)
    }


    return (
        <div className='flex'>
            <div className={`w-screen h-auto bg-slate-300 flex items-center justify-around border-b border-black pl-6 mb-6
               rounded-tr-xl rounded-br-xl z-50 transition-all dark:bg-[#1f1d2b] dark:text-white shadow-lg dark:shadow-white shadow-black
               ${showMenu ? "left-0" : "-left-full"}  duration-300`}
            >
                {/* menu para tablet */}
                <div className='lg:relative lg:bottom-3 '>
                    {/* boton hamburguesa */}
                    <button onClick={() => setLogo(!logo)} className='relative right-6 md:relative md:right-[7rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" className="md:w-8 md:h-8 w-6 h-6 lg:hidden"
                        >
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* logo para pantallas lg */}
                    <div className='md:hidden hidden lg:flex lg:relative lg:right-[2rem]'>
                        {theme === 'light' ?
                            <img
                                src={LogoBlack}
                                alt="logo-star-negro"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[80px] lg:flex`}
                            />
                            :
                            <img
                                src={Logo}
                                alt="logo-star-blanco"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[80px] `}
                            />
                        }
                        {/* nombre empresa */}
                        <h2 className={`dark:text-white font-medium font-advent text-2xl duration-300 
                           lg:relative lg:top-[1.5rem] lg:left-4  hover:rounded-lg`}
                        >
                            Star professional
                        </h2>
                    </div>
                </div>
                {/* sidebar menu movil y lista de paginas*/}
                <div className={`fixed top-0 bg-slate-300  dark:bg-[#1f1d2b] dark:text-white md:w-[17rem] md:h-[29rem] rounded-lg border-2 border-black z-50 transition-all duration-[.8s]
                   ${logo ? 'left-0' : '-left-full'}`}
                >
                    {/* boton de cierre */}
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" className="w-6 h-6"
                            onClick={() => setLogo(!logo)}
                        >
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* lista de movil */}
                    <ul>
                        {/* HOME BOTON */}
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                            <Link to="/" className=' lg:p-4 flex justify-center rounded-xl md:hover:bg-emerald-200 bg-emerald-400 dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <RiHome3Line className='text-4xl lg:text-2xl md:text-3xl dark:text-white ' />
                                <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-xl dark:text-white`} onClick={() => setLogo(!logo)}>
                                    Home
                                </h2>
                            </Link>
                        </li>
                        {/* TODOS LOS PRODUCTOS */}
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:lg:p-4 rounded-md '>
                            <Link to="/newProduct" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <RiStore2Line className='text-4xl lg:text-2xl md:text-3xl text-black dark:text-white ' />
                                <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-xl`} onClick={() => setLogo(!logo)}>
                                    Productos
                                </h2>
                            </Link>
                        </li>
                        {/* LISTA DE COMPRAS */}
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                            <Link to="/purchases" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <RiShoppingBag3Line className='text-4xl lg:text-2xl md:text-3xl text-black dark:text-white ' />
                                <h2 className={` origin-left pl-2 duration-500  font-medium font-advent text-xl `} onClick={() => setLogo(!logo)}>
                                    Lista de Compras
                                </h2>
                            </Link>
                        </li>
                        {/* ACERCA DE NOSOTROS */}
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                            <Link to="/Faq" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <RiTeamLine className='text-4xl lg:text-2xl text-black dark:text-white hover:dark:text-black' />
                                <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-xl `} onClick={() => setLogo(!logo)}>
                                    Acerca de nosotros
                                </h2>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* menu para pc */}
                <div className='flex'>
                    <div className='lg:hidden md:relative md:right-[2rem]  relative top-2'>
                        {theme === 'light' ?
                            <img
                                src={LogoBlack}
                                alt="logo-star-negro"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} md:w-[100px] w-[50px]`}

                            />
                            :
                            <img
                                src={Logo}
                                alt="logo-star-blanco"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} md:w-[100px] w-[50px]`}
                            />
                        }
                    </div>
                    <ul className='md:hidden hidden lg:flex items-center justify-around'>
                        {/* LOGO */}
                        {/* <li className='flex items-center gap-x-3 pl-2 lg:relative lg:right-[14rem] '>
                            {theme === 'light' ?
                                <img
                                    src={LogoBlack}
                                    alt="logo-star-negro"
                                    className={`cursor-pointer duration-500 hover:${open && "rotate-[360deg]"} w-[80px] `}

                                />
                                :
                                <img
                                    src={Logo}
                                    alt="logo-star-blanco"
                                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[70px] `}
                                />
                            }
                            {/* nombre empresa */}
                        {/* <h2 className={`dark:text-white font-medium font-advent text-xl duration-300  hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:py-3 hover:px-3 hover:rounded-lg`}>
                                Star professional
                            </h2>
                        </li> */}
                        {/* lista de paginas  */}
                        <div className='flex items-center justify-around lg:relative lg:right-[6rem]'>
                            {/* HOME BOTON */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/" className=' lg:p-4 flex justify-center rounded-xl md:hover:bg-emerald-200 bg-emerald-400 dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiHome3Line className='text-4xl lg:text-2xl md:text-3xl dark:text-white ' />
                                    <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-xl dark:text-white`}>
                                        Home
                                    </h2>
                                </Link>
                            </li>
                            {/* TODOS LOS PRODUCTOS */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:lg:p-4 rounded-md '>
                                <Link to="/newProduct" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiStore2Line className='text-4xl lg:text-2xl md:text-3xl text-black dark:text-white ' />
                                    <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-xl`}>
                                        Productos
                                    </h2>
                                </Link>
                            </li>
                            {/* LISTA DE COMPRAS */}
                            {/* <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/purchases" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiShoppingBag3Line className='text-4xl lg:text-2xl md:text-3xl text-black dark:text-white ' />
                                    <h2 className={` origin-left pl-2 duration-500  font-medium font-advent text-xl `}>
                                        Lista de Compras
                                    </h2>
                                </Link>
                            </li> */}
                            {/* ACERCA DE NOSOTROS */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/Faq" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiTeamLine className='text-4xl lg:text-2xl text-black dark:text-white hover:dark:text-black' />
                                    <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-xl `}>
                                        Acerca de nosotros
                                    </h2>
                                </Link>
                            </li>
                        </div>
                    </ul>
                    {/* user mode  */}
                    <ul className='flex items-center justify-between relative right-[5rem]'>
                        <div className='flex items-center justify-around relative left-[7rem] box-border'>
                            {/* buscador */}
                            <li className='dark:text-gray-300 text-sm  items-center gap-x-4 cursor-pointer p-5 md:p-3 hidden md:hidden lg:flex'>
                                <SearchBar />
                            </li>
                            {/* login */}
                            <li className='dark:text-gray-300 text-sm flex items-center cursor-pointer md:p-3 lg:p-4 rounded-md md:relative md:left-[4.7rem] '>
                                <Link to="/login" className=' flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiAccountPinCircleLine className='text-2xl lg:text-4xl md:text-4xl text-black dark:text-white' />
                                </Link>
                            </li>
                            {/* CARRITO*/}
                            <li className={`dark:text-gray-300 text-sm md:relative md:left-[4rem] flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md `}
                                onClick={() => setActive(!active)}
                            >
                                {/* carrito icono  */}
                                <div className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiShoppingCart2Line className='text-2xl lg:text-4xl md:text-4xl text-black dark:text-white lg:relative 
                                      lg:left-[.2rem]' />
                                </div>
                                {/* boton contador carrito */}
                                <div className='absolute top-1/2 right-[1rem] bg-[#000] dark:bg-white text-white 
                                    lg:w-[25px] lg:h-[25px] md:w-[22px] md:h-[22px]  flex justify-center items-center shadow-lg rounded-full'
                                >
                                    <span className='text-lg'>{countProducts}</span>
                                </div>
                                {/* contenedor del  carrito*/}
                                <div className={`${active ? '' : 'hidden'} absolute top-[5rem] right-[1rem] bg-slate-300 dark:bg-[#1f1d2b] w-[35rem] h-[46rem] z-[1] 
                                    shadow-lg shadow-black rounded-lg overflow-auto` }
                                >
                                    {

                                        allProducts.length ? (
                                            <>
                                                <div className=' p-[30px] border border-black'>
                                                    {allProducts.map((product, index) => (
                                                        <div key={index}>
                                                            {/* info-cart-product */}
                                                            <div className='flex justify-between h-auto flex-1 overflow-y-auto'>
                                                                {/* foto del producto */}
                                                                <img src={product.Foto} alt="" style={{ width: '90px' }} />
                                                                {/* titulo-producto-carrito */}
                                                                <p className='text-base'>{product.Descripcion}</p>
                                                                {/* precio-producto-carrito */}
                                                                <span className='font-bold text-lg ml-3'>${product.Precio}</span>
                                                                {/* cantidad-producto-carrito */}
                                                                <span className='font-normal text-sm'>{product.Cantidad}</span>
                                                            </div>

                                                            <svg
                                                                xmlns='http://www.w3.org/2000/svg'
                                                                fill='none'
                                                                viewBox='0 0 24 24'
                                                                strokeWidth='1.5'
                                                                stroke='currentColor'
                                                                className='w-[25px] h-[25px] hover:cursor-pointer'
                                                                onClick={() => onDeleteProduct(product)}
                                                            >
                                                                <path
                                                                    strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    d='M6 18L18 6M6 6l12 12'
                                                                />
                                                            </svg>
                                                        </div>

                                                    ))}

                                                </div>
                                                <div className='flex items-center  p-4 gap-5'>
                                                    <h3 className='text-lg font-bold'>total</h3>
                                                    {/* total-pagar */}
                                                    <span className='font-extrabold text-lg'>${total}</span>
                                                </div>
                                                <button className='bg-black text-white p-2 block w-[100%] mt-2 cursor-pointer text-normal transition ease-out duration-[.3s]'>
                                                    Vaciar carrito
                                                </button>
                                            </>
                                        ) : (
                                            <p className='p-[20px] text-center text-2xl font-shadows'>carrito vacio</p>
                                        )
                                    }
                                </div>
                            </li>
                            {/* DARK MODE */}
                            <li onClick={handleClick} className='dark:text-gray-300 text-sm flex items-center md:gap-x-4 cursor-pointer  
                               rounded-md p-3 md:p-4 md:relative md:left-[3rem] relative right-[1rem] px-1 py-1'
                            >
                                <Link className='p-5 flex justify-center sm:h-2 sm:w-4 md:w-[4rem] md:h-[4rem] h-[1rem] w-[1rem] rounded-xl bg-yellow-500 dark:bg-[#2C3976] rounded-bl-xl rounded-tl-xl 
                                     hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '
                                >
                                    {hide ?
                                        <RiMoonClearFill className='text-white text-sm md:text-xl relative bottom-[19rem] md:relative md:top-1' />
                                        :
                                        <RiSunLine className='text-white md:text-2xl text-lg relative  md:relative md:top-0' />}
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default AppNavbar;
