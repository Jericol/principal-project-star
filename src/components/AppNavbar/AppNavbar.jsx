/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';
import {
    RiHome3Line, RiStore2Line, RiShoppingBag3Line, RiTeamLine,
    RiShoppingCart2Line, RiAccountPinCircleLine, RiMoonClearFill,
    RiSunLine, RiMenu2Line, RiCloseFill, RiUserLine, RiArrowDropDownFill, RiArrowDropUpFill, RiArrowDownCircleLine, RiCheckboxCircleLine
} from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
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
    // estado de home desplegable
    const [home, setHome] = useState(true);
    // estado de producto desplegable
    const [allProduct, setAllProduct] = useState(true);
    // desplegable kits
    const [kits, setKits] = useState(true);
    // estado de catalogo
    const [files, setFiles] = useState(false);
    // estado para logo de catalogo
    const [check, setCheck] = useState(true);

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
        <div className=''>
            {/* menu para pc */}
            <header className='lg:flex hidden items-center justify-between h-auto w-full py-3'>
                {/* lista menu pc*/}
                <div className='flex items-center gap-4 pl-8 font-semibold text-xl'>
                    {/* logo para pc */}
                    <section className='flex items-center gap-4 '>
                        <Link to='/' className='flex items-center gap-4'>
                            {
                                theme === 'light' ?
                                    <img
                                        src="https://i.ibb.co/4gLsH8F/LOGO-STAR-NEGRO.png"
                                        alt="logo-star-negro"
                                        className={`cursor-pointer duration-500 w-[80px] lg:flex transition hover:!scale-125`}
                                    />
                                    :
                                    <img
                                        src="https://i.ibb.co/8bvh219/LOGO-STAR-BLANCO.png"
                                        alt="logo-star-blanco"
                                        className={`cursor-pointer duration-500 w-[80px] transition hover:!scale-125`}
                                    />
                            }
                            <h2 className='transition hover:!scale-105'>Star Professional</h2>
                        </Link>
                    </section>
                    {/* home para pc */}
                    <button className='pl-8 relative left-[8rem]'>
                        <Link to='/'>
                            <h2 className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>
                                Inicio
                            </h2>
                        </Link>
                    </button>
                    {/* productos para pc */}
                    <button className='pl-8 relative left-[9rem] flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:lg:p-4 rounded-md '>
                        <Link to='/newProduct'>
                            <h2 className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>
                                Productos
                            </h2>
                        </Link>
                        {/* boton de despliegue pc */}
                        <div className='relative top-1 rounded-lg border border-slate-400 ring ring-pink-500 '
                            onClick={() => setAllProduct(!allProduct)}
                        >
                            {
                                allProduct ?
                                    <RiArrowDropDownFill className='text-lg' />
                                    :
                                    <RiArrowDropUpFill className='text-lg' />
                            }
                        </div>
                        {/* barra de categorias pc */}
                        <div className={`${!allProduct ? '' : 'hidden'} absolute z-50 top-[5.4rem] -left-[9rem] bg-slate-300 dark:bg-[#1f1d2b]  w-[72rem] h-[9rem] 
                              transition-all transform duration-[.8s] rounded-lg `}
                        >
                            <div className='flex items-center justify-between'>
                                <ul className='flex justify-between gap-6 p-3 relative left-[5rem]'>
                                    {/* capilar */}
                                    <li className='flex flex-col '>
                                        {
                                            theme === 'light' ?
                                                <img
                                                    src="https://i.ibb.co/1fJb6rD/CAPILAR-NEGATIVO.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                                :
                                                <img
                                                    src="https://i.ibb.co/VTx22RV/CAPILAR.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                        }
                                        <h3 className='text-xl  font-semibold pr-4'>Capilar</h3>
                                    </li>
                                    {/* barberia */}
                                    <li className='flex flex-col'>
                                        {
                                            theme === 'light' ?
                                                <img
                                                    src="https://i.ibb.co/yp5Dvz8/ICONO-BARBERIA-NEGATIVO.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                                :
                                                <img
                                                    src="https://i.ibb.co/pRVwgdH/ICONO-BARBERIA.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                        }
                                        <h3 className='text-xl  font-semibold pr-4'>Barberia</h3>
                                    </li>
                                    {/* uñas */}
                                    <li className='flex flex-col'>
                                        {
                                            theme === 'light' ?
                                                <img
                                                    src="https://i.ibb.co/XLQYpyC/U-AS-NEGATIVO.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                                :
                                                <img
                                                    src="https://i.ibb.co/FbZYjtx/U-AS.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                        }
                                        <h3 className='text-xl  font-semibold pr-4'>Uñas</h3>
                                    </li>
                                    {/* pestañas */}
                                    <li className='flex flex-col'>
                                        {
                                            theme === 'light' ?
                                                <img
                                                    src="https://i.ibb.co/F4dMB2r/MAQUILLAJE-Y-PESTA-AS-NEGATIVO.png"
                                                    alt=""
                                                    className='w-[80px] relative '
                                                />
                                                :
                                                <img
                                                    src="https://i.ibb.co/mcTKPT3/MAQUILLAJE-Y-PESTA-AS.png"
                                                    alt=""
                                                    className='w-[80px] relative '
                                                />
                                        }
                                        <h3 className='text-xl font-semibold pr-4 font-monserrat'>Pestañas</h3>
                                    </li>
                                    {/* cuidado corporal */}
                                    <li className='flex flex-col'>
                                        {
                                            theme === 'light' ?
                                                <img
                                                    src="https://i.ibb.co/J2JV9j0/CUIDADO-CORPORAL-NEGATIVO.png"
                                                    alt=""
                                                    className='w-[80px] relative left-[4rem]'
                                                />

                                                :
                                                <img
                                                    src="https://i.ibb.co/PwwMjG0/CUIDADO-CORPORAL.png"
                                                    alt=""
                                                    className='w-[80px] relative left-[4rem]'
                                                />
                                        }
                                        <h3 className='text-xl font-semibold pr-4 font-monserrat'>Cuidado corporal</h3>
                                    </li>
                                    {/* cuidado facil */}
                                    <li className='flex flex-col'>
                                        {
                                            theme === 'light' ?
                                                <img
                                                    src="https://i.ibb.co/jLWD2Th/CUIDADO-FACIAL-NEGATIVO.png"
                                                    alt=""
                                                    className='w-[80px] relative left-8'
                                                />
                                                :
                                                <img
                                                    src="https://i.ibb.co/kx8x09X/CUIDADO-FACIAL.png"
                                                    alt=""
                                                    className='w-[80px] relative left-6'
                                                />
                                        }
                                        <h3 className='text-xl font-semibold pr-4 font-monserrat'>Cuidado facial</h3>
                                    </li>
                                    {/* accesorios */}
                                    <li className='flex flex-col'>
                                        {
                                            theme === 'light' ?
                                                <img
                                                    src="https://i.ibb.co/RCpMvSX/ACCESORIOS-NEGATIVO.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                                :
                                                <img
                                                    src="https://i.ibb.co/QJTFhbd/ACCESORIOS.png"
                                                    alt=""
                                                    className='w-[80px]'
                                                />
                                        }
                                        <h3 className='text-xl  font-semibold relative right-2'>Accesorios</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </button>
                    {/* nosotros para pc */}
                    <button className='pl-8 relative left-[8rem] flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:lg:p-4 rounded-md'>
                        <Link to='/Faq'>
                            <h2 className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>
                                Nosotros
                            </h2>
                        </Link>
                        {/* boton de despliegue para pc */}
                        <div className='relative top-1 rounded-lg border border-slate-400 ring ring-pink-500 '
                            onClick={() => setKits(!kits)}
                        >
                            {
                                kits ?
                                    <RiArrowDropDownFill className='text-lg' />
                                    :
                                    <RiArrowDropUpFill className='text-lg' />
                            }
                        </div>
                        {/* barra de sobre nosotros */}
                        <div className={`${!kits ? '' : 'hidden'} absolute z-50 top-[5.4rem] -left-[16rem] bg-slate-300 dark:bg-[#1f1d2b] w-[52rem] h-[8rem] transition duration-[.8s] rounded-lg`}>
                            <div className='flex items-center justify-between'>
                                <ul className='flex items-center justify-evenly gap-8 relative top-[2rem] left-[2rem]'>
                                    <li>
                                        <Link>
                                            <p className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>Quienes somos</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <p className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>Políticas de privacidad</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <p className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>Tratamiento de datos</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <p className='uppercase transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>
                                                pqrs
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </button>
                    {/* CATALOGO */}
                    <button className='pl-8 relative left-[7rem] flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:lg:p-4 rounded-md'>
                        <Link to=''>
                            <h2 className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>Catalogo</h2>
                        </Link>
                        {/* boton de catalogo */}
                        <div className='relative top-1 rounded-lg border border-slate-400 ring ring-pink-500 cursor-pointer' onClick={() => setFiles(!files)}>
                            {
                                files ?
                                    <RiArrowDropDownFill className='text-lg' />
                                    :
                                    <RiArrowDropUpFill className='text-lg' />
                            }
                        </div>
                        {/* barra de catalogo */}
                        <div className={`${!files ? '' : 'hidden'} absolute z-50 top-[5.4rem] -left-[6rem] bg-slate-300 dark:bg-[#1f1d2b] w-[20rem] h-[6rem] transition duration-[.8s] rounded-lg
                             border border-red-500`}
                        >
                            <div className='flex items-center  gap-1 '>
                                <section onClick={() => setCheck(!check)} className='relative left-[2rem] top-[1.5rem] transition-all transform duration-[.8s]'>
                                    <a href='../../files/CATALOGO CLIENTES 23 SEPTIEMBRE.pdf' download='Catalogo.pdf' target='_blank'>
                                        {
                                            check ?
                                                <RiArrowDownCircleLine className='text-4xl text-green-700 hover:!scale-125' />
                                                :
                                                <BsPatchCheck className='text-4xl bg-blue-600 rounded-full text-white hover:!scale-125' />
                                        }

                                    </a>
                                </section>
                                <section className='relative left-[5rem] top-[1.5rem]'>
                                    <h2 className='transition hover:!scale-105 hover:border-b-2 hover:border-black hover:shadow-md hover:shadow-blue-300 pt-2'>
                                        Catalogo
                                    </h2>
                                </section>
                            </div>
                        </div>
                    </button>
                </div>
                {/* user menu pc */}
                <ul className='flex items-center gap-4 pr-8'>
                    {/* barra de busqueda */}
                    <li className='relative right-9'>
                        <SearchBar />
                    </li>
                    {/* login */}
                    <li>
                        <Link to='/login'>
                            <RiAccountPinCircleLine className='text-3xl hover:!scale-125 transition duration-[.8s] dark:hover:text-blue-300 hover:text-blue-600 text-black dark:text-white' />
                        </Link>
                    </li>
                    {/* CARRITO */}
                    <li className={`dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md `}
                        onClick={() => setActive(!active)}
                    >
                        {/* carrito icono  */}
                        <div className='lg:p-4 flex justify-center rounded-xl '>
                            <RiShoppingCart2Line className='text-3xl text-black dark:text-white hover:!scale-125 transition duration-[.8s] dark:hover:text-green-400 hover:text-green-600' />
                        </div>
                        {/* boton contador carrito */}
                        <div className='absolute top-1/2 right-[1rem] bg-[#000] dark:bg-white text-white 
                                    lg:w-[25px] lg:h-[25px]  flex justify-center items-center shadow-lg rounded-full'
                        >
                            <span className='text-lg'>{countProducts}</span>
                        </div>
                        {/* contenedor del  carrito*/}
                        <div className={`${active ? '' : 'hidden'} absolute top-[10.8rem] right-[1rem] bg-slate-300 dark:bg-[#1f1d2b] w-[29rem] h-[46rem] z-[1] 
                                border-2 border-green-600  shadow-lg shadow-black rounded-lg overflow-auto` }
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
                                    <p className='p-[20px] text-center text-2xl'>carrito vacio</p>
                                )
                            }
                        </div>
                    </li>
                    {/* DARK MODE */}
                    <li onClick={handleClick} className='dark:text-gray-300 lg:flex items-center cursor-pointer  
                               rounded-md  px-1 py-1 '
                    >
                        <Link className='flex justify-center h-[2.5rem] w-[2.5rem] rounded-xl bg-yellow-500 dark:bg-[#2C3976] rounded-bl-xl rounded-tl-xl 
                                     hover:!scale-125 transition duration-[.8s] dark:border dark:border-slate-300 border border-black'
                        >
                            {hide ?
                                <RiMoonClearFill className='text-white text-lg relative top-[11px]' />
                                :
                                <RiSunLine className='text-white text-lg relative top-[11px]' />}
                        </Link>
                    </li>
                </ul>
            </header>
            {/* MENU PARA TABLET */}
            <header className='md:flex items-center justify-between h-auto w-full py-3 hidden lg:hidden '>
                {/* lista de menu tablet */}
                <div className='flex items-center justify-between'>
                    {/* boton hamburguesa */}
                    <button onClick={() => setLogo(!logo)} className='pl-4'>
                        <RiMenu2Line className='w-6 h-6 md:w-8 md:h-8 transition-all ease-in duration-300' />
                    </button>

                    {/* logo para tablet */}
                    <div className='relative left-[15rem]'>
                        <Link to="/">
                            {theme === 'light' ?
                                <img
                                    src={LogoStarB}
                                    alt="logo-star-negro"
                                    className={`cursor-pointer duration-500  md:w-[180px] w-[120px] object-fill`}
                                />
                                :
                                <img
                                    src="https://i.ibb.co/z5yFkFh/ICONO-STAR-PRO-02.png"
                                    alt="logo-star-blanco"
                                    className={`cursor-pointer duration-500 md:w-[180px] w-[120px]`}
                                />
                            }
                        </Link>
                    </div>
                    {/* CARRITO */}
                    <button className={`dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md `}
                        onClick={() => setActive(!active)}
                    >
                        {/* carrito icono  */}
                        <div className='lg:p-4 flex justify-center rounded-xl relative left-[29rem]'>
                            <RiShoppingCart2Line className='text-3xl text-black dark:text-white scale-125 transition duration-[.8s] dark:hover:text-green-400 ' />
                        </div>
                        {/* boton contador carrito */}
                        <div className='absolute top-1/2 right-[1rem] bg-[#000] dark:bg-white text-white 
                                    lg:w-[25px] lg:h-[25px]  flex justify-center items-center shadow-lg rounded-full'
                        >
                            <span className='text-lg'>{countProducts}</span>
                        </div>
                        {/* contenedor del  carrito*/}
                        <div className={`${active ? '' : 'hidden'} absolute top-[10.8rem] right-[1rem] bg-slate-300 dark:bg-[#1f1d2b] w-[21rem] h-[28rem] z-[1] 
                                border-2 border-green-600  shadow-lg shadow-black rounded-lg overflow-auto` }
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
                                    <p className='p-[20px] text-center text-2xl'>carrito vacio</p>
                                )
                            }
                        </div>
                    </button>
                    {/* sidebar menu tablet y lista de paginas*/}
                    <div className={`absolute top-[5rem] z-50 bg-slate-300  dark:bg-[#1f1d2b] dark:text-white  md:w-[29rem] md:h-[38rem] rounded-lg border-2 border-black transition-all duration-[.8s]
                      ${logo ? 'left-0' : '-left-full'} md:scroll-smooth`}
                    >
                        {/* boton de cierre */}
                        <button className='relative left-[25rem] top-3 border border-slate-400 rounded-full'>
                            <RiCloseFill className='w-6 h-6 md:w-8 md:h-8 transition-all ease-in duration-300' onClick={() => setLogo(!logo)}/>
                        </button>
                        {/* logo para sidebar para tablet */}
                        <section className='relative left-[8rem]'>
                            <Link to="/">
                                {theme === 'light' ?
                                    <img
                                        src={LogoStarB}
                                        alt="logo-star-negro"
                                        className={`cursor-pointer duration-500  md:w-[180px] w-[120px] object-fill`}
                                    />
                                    :
                                    <img
                                        src="https://i.ibb.co/z5yFkFh/ICONO-STAR-PRO-02.png"
                                        alt="logo-star-blanco"
                                        className={`cursor-pointer duration-500 md:w-[180px] w-[120px]`}
                                    />
                                }
                            </Link>
                        </section>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default AppNavbar;
