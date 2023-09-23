/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';
import {
    RiHome3Line, RiStore2Line, RiShoppingBag3Line, RiTeamLine,
    RiShoppingCart2Line, RiAccountPinCircleLine, RiMoonClearFill,
    RiSunLine, RiMenu2Line, RiCloseFill, RiUserLine, RiArrowDropDownFill, RiArrowDropUpFill
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
    // estado de home desplegable
    const [home, setHome] = useState(true);
    // estado de producto desplegable
    const [allProduct, setAllProduct] = useState(true);
    // desplegable kits
    const [ kits, setKits ] = useState(true);

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
        <div>
            {/* menu para pc */}
            <div>
                <header className='container text-black p-4 flex items-center justify-between'>
                    {/* lista de menu para pc */}
                    <ul>
                        {/* logo para pc */}
                        <li>
                            <img src="https://i.ibb.co/4gLsH8F/LOGO-STAR-NEGRO.png" alt="" className='w-[120px]'/>
                            <h2>Star Professional</h2>
                        </li>
                        <li>
                            <Link to='/'>
                                <h2>Inicio</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to='/newProduct'> 
                                <h2>Productos</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <h2>Kits</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to='/Faq'>
                                <h2>Quienes somos</h2>
                            </Link>
                        </li>
                    </ul>
                    {/* user menu */}
                    <ul>
                        <h2>user menu</h2>
                    </ul>
                </header>

            </div>

        </div>
    )
}

export default AppNavbar;
