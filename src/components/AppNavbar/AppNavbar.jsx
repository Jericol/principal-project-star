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
            <div className='h-auto w-full border border-red-600 py-3'>
                <header className='flex items-center justify-between'>
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
                                            className={`cursor-pointer duration-500 w-[80px] `}
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
                            <div className={`${!allProduct ? '' : 'hidden'} absolute z-50 top-[5.4rem] -left-[9rem] bg-slate-300 w-[72rem] h-[9rem] 
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
                            <div className={`${!kits ? '' : 'hidden'} absolute z-50 top-[5.4rem] -left-[16rem] bg-slate-300 w-[52rem] h-[8rem] transition duration-[.8s] rounded-lg`}>
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
                            <div className={`${!files ? '' : 'hidden'} absolute z-50 top-[5.4rem] -left-[6rem] bg-slate-300 w-[20rem] h-[6rem] transition duration-[.8s] rounded-lg
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
                        <li>busqueda</li>
                        <li>login</li>
                        <li>carrito</li>
                        <li>dark mode</li>
                    </ul>
                </header>
            </div>
        </div>
    )
}

export default AppNavbar;
