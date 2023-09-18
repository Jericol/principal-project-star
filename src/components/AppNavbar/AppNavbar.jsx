/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';
import {
    RiHome3Line, RiStore2Line, RiShoppingBag3Line, RiTeamLine,
    RiShoppingCart2Line, RiAccountPinCircleLine, RiMoonClearFill, RiSunLine, RiMenu2Line, RiCloseFill, RiUserLine
} from "react-icons/ri";
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import LogoStarB from '../../../assets/LOGO STAR SVG.svg'
import Group from '../Categorias/Grupos/Group';



// eslint-disable-next-line react/prop-types
function AppNavbar({ showMenu, allProducts, setAllProducts, total, countProducts }) {

    // eslint-disable-next-line react/prop-types

    const [hide, setHide] = useState(false);
    const [theme, setTheme] = useState('light');
    const [logo, setLogo] = useState(false);
    const [slow, setSlow] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);

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
    // className="md:w-8 md:h-8 w-6 h-6 lg:hidden"

    return (
        <div className='flex'>
            <div className={`w-screen h-[5rem] md:h-[7rem] bg-slate-300 flex items-center justify-around border-b border-black pl-6 mb-6
               rounded-tr-xl rounded-br-xl z-50  transition-all dark:bg-[#1f1d2b] dark:text-white 
               ${showMenu ? "left-0" : "-left-full"}  duration-300 `}
            >
                {/* menu para tablet */}
                <div className='lg:relative  '>
                    {/* boton hamburguesa */}
                    <button onClick={() => setLogo(!logo)} className='relative right-[2rem] md:relative md:right-[6rem] lg:hidden'>
                        {
                            logo ?
                                <RiCloseFill className='w-6 h-6 md:w-8 md:h-8 transition-all ease-in duration-300' />
                                :
                                <RiMenu2Line className='w-6 h-6 md:w-8 md:h-8 transition-all ease-in duration-300' />
                        }

                    </button>
                    {/* logo para pantallas lg */}
                    <div className='md:hidden hidden lg:flex lg:relative lg:right-[2rem]'>
                        <Link to='/'>
                            {theme === 'light' ?
                                <img
                                    src="https://i.ibb.co/4gLsH8F/LOGO-STAR-NEGRO.png"
                                    alt="logo-star-negro"
                                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[80px] lg:flex`}
                                />
                                :
                                <img
                                    src="https://i.ibb.co/8bvh219/LOGO-STAR-BLANCO.png"
                                    alt="logo-star-blanco"
                                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} w-[80px] `}
                                />
                            }                    
                        </Link>
                        {/* nombre empresa */}
                        <h2 className={`dark:text-white font-medium font-advent text-2xl duration-300 
                           lg:relative lg:top-[1.5rem] lg:left-4  hover:rounded-lg`}
                        >
                            <Link to='/'>
                                Star professional
                            </Link>
                        </h2>
                    </div>
                </div>
                {/* sidebar menu movil y lista de paginas*/}
                <div className={`absolute top-[10rem] md:top-[12rem]  bg-slate-300  dark:bg-[#1f1d2b] dark:text-white w-full h-auto md:w-[26rem] md:h-[38rem] rounded-lg border-2 border-black transition-all duration-[.8s]
                   ${logo ? 'left-0' : '-left-full'} md:scroll-smooth`}
                >
                    {/* login */}
                    <div className='flex flex-col gap-4  border-b border-slate-600 pb-3 lg:hidden'>
                        <div className='flex items-center gap-2 md:relative md:left-[1rem] md:top-6 relative left-2 top-3 mb-6'>
                            <section className='border-2 border-gray-500 rounded-full px-2 py-2'>
                                <RiUserLine className='md:text-4xl text-3xl' />
                            </section>
                            <section className='flex flex-col gap-2'>
                                <h2 className='text-lg md:text-2xl font-semibold relative top-3'>Bienvenidos a Star Professional</h2>
                                <p className='text-base md:text-xl'>Ingresa a tu cuenta para ver tus compras</p>
                            </section>
                        </div>
                        <div>
                            <div className='flex items-center justify-around gap-1'>
                                <button className='rounded-lg bg-blue-500 text-white px-3 py-3 w-[11rem]' onClick={() => setLogo(!logo)}>
                                    <Link to='/register'>Crear cuenta</Link>
                                </button>
                                <button className='rounded-lg border border-blue-800 bg-blue-200 text-blue-500 px-3 py-3 w-[11rem]' onClick={() => setLogo(!logo)}>
                                    Iniciar sesion
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* lista de movil / sm - md */}
                    <ul className='relative lg:hidden'>
                        {/* HOME BOTON */}
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md relative '>
                            <Link to="/" className=' lg:p-4 flex justify-center rounded-xl md:hover:bg-emerald-200  dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <RiHome3Line className='text-2xl lg:text-2xl md:text-3xl dark:text-white ' />
                                <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-lg md:text-xl dark:text-white`} onClick={() => setLogo(!logo)}>
                                    Home
                                </h2>
                            </Link>
                        </li>
                        {/* TODOS LOS PRODUCTOS */}
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:lg:p-4 rounded-md  relative bottom-5'>
                            <Link to="/newProduct" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <RiStore2Line className='text-2xl lg:text-2xl md:text-3xl text-black dark:text-white ' />
                                <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-lg md:text-xl`} onClick={() => setLogo(!logo)}>
                                    Productos
                                </h2>
                            </Link>
                        </li>
                        {/* ACERCA DE NOSOTROS */}
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md relative bottom-12'>
                            <Link to="/Faq" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                <RiTeamLine className='text-2xl lg:text-2xl text-black dark:text-white hover:dark:text-black' />
                                <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-lg md:text-xl `} onClick={() => setLogo(!logo)}>
                                    Acerca de nosotros
                                </h2>
                            </Link>
                        </li>
                        {/* darkmode */}
                        <li onClick={handleClick} className='dark:text-gray-300 text-sm flex items-center md:gap-x-4 cursor-pointer  
                               rounded-md p-3 md:p-4 md:relative md:left-0 relative  bottom-[4rem] px-1 py-1  '
                        >
                            <Link className='p-5 flex justify-center sm:h-2 sm:w-4 md:w-[4rem] md:h-[4rem] h-[1rem] w-[1rem] rounded-xl bg-yellow-500 dark:bg-[#2C3976] rounded-bl-xl rounded-tl-xl 
                                     hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '
                            >
                                {hide ?
                                    <RiMoonClearFill className='text-white bg-red-500 text-lg relative  md:text-lg' />
                                    :
                                    <RiSunLine className='text-white md:text-2xl text-lg relative right-[20rem] md:relative md:top-0' />}
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* menu para pc */}
                <div className='flex'>
                    {/* logo para tablet */}
                    <div className='lg:hidden md:relative md:right-[3rem]  relative -right-[1rem] top-2'>
                        <Link to="/">
                            {theme === 'light' ?
                                <img
                                    src={LogoStarB}
                                    alt="logo-star-negro"
                                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} md:w-[180px] w-[120px] object-fill`}

                                />
                                :
                                <img
                                    src="https://i.ibb.co/z5yFkFh/ICONO-STAR-PRO-02.png"
                                    alt="logo-star-blanco"
                                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"} md:w-[180px] w-[120px]`}
                                />
                            }
                        
                        </Link>
                    </div>
                    {/* lista de paginas pc */}
                    <ul className='md:hidden hidden lg:flex items-center justify-around'>
                        {/* lista de paginas  */}
                        <div className='flex items-center justify-around lg:relative lg:right-[6rem]'>
                            {/* HOME BOTON */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/" className=' lg:p-4 flex justify-center rounded-xl md:hover:bg-emerald-200 bg-emerald-400 dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiHome3Line className='text-lg lg:text-2xl md:text-3xl dark:text-white ' />
                                    <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-lg md:text-xl dark:text-white`}>
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
                            {/* ACERCA DE NOSOTROS */}
                            <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md'>
                                <Link to="/Faq" className='lg:p-4 flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiTeamLine className='text-xl md:text-4xl lg:text-2xl text-black dark:text-white hover:dark:text-black' />
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
                            <li className='dark:text-gray-300 text-sm  items-center gap-x-4 cursor-pointer p-5 md:p-3  lg:flex'>
                                <SearchBar />
                            </li>
                            {/* login */}
                            <li className='dark:text-gray-300 text-sm lg:flex items-center cursor-pointer md:p-3 lg:p-4 rounded-md md:hidden hidden'>
                                <Link to="/login" className=' flex justify-center rounded-xl hover:bg-emerald-200 hover:dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                    <RiAccountPinCircleLine className='text-2xl lg:text-4xl md:text-4xl text-black dark:text-white' />
                                </Link>
                            </li>
                            {/* CARRITO*/}
                            <li className={`dark:text-gray-300 text-sm md:relative md:left-[3rem] flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md `}
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
                            <li onClick={handleClick} className='dark:text-gray-300 text-sm lg:flex items-center md:gap-x-4 cursor-pointer  
                               rounded-md p-3 md:p-4 md:relative md:left-[3rem] relative right-[1rem] px-1 py-1 md:hidden hidden'
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
