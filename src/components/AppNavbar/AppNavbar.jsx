/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';
import {
    RiHome3Line, RiStore2Line, RiShoppingBag3Line,  RiTeamLine,
     RiShoppingCart2Line, RiAccountPinCircleLine,  RiMoonClearFill, RiSunLine,
} from "react-icons/ri";
import Logo from "../../../public/Logo/LOGO-STAR-BLANCO.png";
import LogoBlack from "../../../public/Logo/LOGO-STAR-NEGRO.png"
import { useEffect, useState } from 'react';
import MovalNv from '../modalNv/MovalNv';

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
            <div className={`w-full h-[8rem] bg-slate-300 flex items-center justify-around border-b border-black pl-6 mb-6
               rounded-tr-xl rounded-br-xl z-50 transition-all dark:bg-[#1f1d2b] dark:text-white shadow-lg dark:shadow-white shadow-black
               ${showMenu ? "left-0" : "-left-full"}  duration-300`}
            >
                {/* menu para tablet */}
                <div>
                    <button onClick={() => setLogo(!logo)} className='md:relative md:right-[7rem]'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" className="w-8 h-8 lg:hidden"
                        >
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* logo para pantallas lg */}
                    <div className='md:hidden  lg:flex'>
                        {theme === 'light' ?
                            <img
                                src={LogoBlack}
                                alt="logo-star-negro"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[70px] `}
                            />
                            :
                            <img
                                src={Logo}
                                alt="logo-star-blanco"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[70px] `}
                            />
                        }
                        {/* nombre empresa */}
                        <h2 className={`dark:text-white font-medium font-advent lg:hidden text-xl duration-300  hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:py-3 hover:px-3 hover:rounded-lg`}>
                            Star professional
                        </h2>
                    </div>
                </div>
                {/* sidebar menu movil */}
                <div className={`fixed top-0 bg-slate-300  dark:bg-[#1f1d2b] dark:text-white w-[17rem] h-full z-50 transition-all duration-[.8s]
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
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/purchases" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiShoppingBag3Line className='text-4xl lg:text-2xl md:text-3xl text-black dark:text-white ' />
                                    <h2 className={` origin-left pl-2 duration-500  font-medium font-advent text-xl `}>
                                        Lista de Compras
                                    </h2>
                                </Link>
                            </li>
                            {/* ACERCA DE NOSOTROS */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/Faq" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiTeamLine className='text-4xl lg:text-2xl text-black dark:text-white hover:dark:text-black' />
                                    <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-xl `}>
                                        Acerca de nosotros
                                    </h2>
                                </Link>
                            </li>
                    </ul>
                </div>
                {/* menu para pc */}
                <div className='flex'>
                    <div className='lg:hidden md:relative md:right-[4rem]'>
                        {theme === 'light' ?
                            <img
                                src={LogoBlack}
                                alt="logo-star-negro"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[100px] `}

                            />
                            :
                            <img
                                src={Logo}
                                alt="logo-star-blanco"
                                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[100px] `}
                            />
                        }
                    </div>
                    <ul className='md:hidden  lg:flex items-center justify-around'>
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
                        <div className='flex items-center justify-around relative right-[10rem]'>
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
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/purchases" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiShoppingBag3Line className='text-4xl lg:text-2xl md:text-3xl text-black dark:text-white ' />
                                    <h2 className={` origin-left pl-2 duration-500  font-medium font-advent text-xl `}>
                                        Lista de Compras
                                    </h2>
                                </Link>
                            </li>
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
                        <div className='flex items-center justify-around relative left-[10rem]'>
                            {/* login */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-3 lg:p-4 rounded-md'>
                                <Link to="/login" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiAccountPinCircleLine className='text-4xl lg:text-3xl md:text-4xl text-black dark:text-white' />
                                </Link>
                            </li>
                            {/* CARRITO*/}
                            <li className={`dark:text-gray-300 text-sm  flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md `}
                                onClick={() => setActive(!active)}
                            >
                                <div className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiShoppingCart2Line className='text-4xl lg:text-4xl md:text-4xl text-black dark:text-white relative right-3' />
                                </div>
                                <div className='absolute top-1/2 right-[7.6rem] bg-[#000] dark:bg-white text-white 
                                    lg:w-[25px] lg:h-[25px] md:w-[22px] md:h-[22px] flex justify-center items-center shadow-lg rounded-full'
                                >
                                    <span className='text-lg'>{countProducts}</span>
                                </div>
                                {/* desplegable  carrito*/}
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
                            <li onClick={handleClick} className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer lg:p-4 
                               rounded-md p-3 md:p-4 md:relative md:right-[1.5rem]'
                            >
                                <Link className='p-5 flex justify-center rounded-xl bg-yellow-500 dark:bg-[#2C3976] rounded-bl-xl rounded-tl-xl hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    {hide ?
                                        <RiMoonClearFill className='text-white ' />
                                        :
                                        <RiSunLine className='text-white ' />}
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
