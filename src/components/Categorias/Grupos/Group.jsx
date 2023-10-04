import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductCategoriesThunk } from '../../../store/slice/product.slice';
import { RiFullscreenExitLine, RiApps2Fill, RiCloseCircleFill, RiApps2Line, RiLayoutGridFill } from "react-icons/ri";
import Categories from '../Category';
import { Link, useNavigate } from 'react-router-dom';
import { TECollapse } from "tw-elements-react";
import './group.css';




function Group({ itemPage, setItemPage, nextPage, setNextPage, showMenu, setShowMenu, logo, setLogo }) {

    const dispatch = useDispatch();
    // estado para categorias
    const [categories, setCategories] = useState([]);

    // const [num, setNum] = useState(1);
    // estado para llamar la api de categorias
    const [categoryNum, setCategoryNum] = useState(4)
    const navigate = useNavigate();
    const [activeElement, setActiveElement] = useState("");
    const [showSide, setShowSide] = useState(false);



    useEffect(() => {
        axios.get("http://190.60.237.163/traegrupos")
            .then(res => setCategories(res.data.RESP))

    }, [])



    return (
        <div>
            {/* para pc */}
            <div className='mx-auto p-5 container'>
                <div className='lg:flex hidden flex-wrap items-center justify-center gap-12'>
                    {/* pestañas */}
                    <div>
                        <Link to='/Pestañas'>
                            <img
                                src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* facial */}
                    <div>
                        <Link to='/CuidadoFacial'>
                            <img
                                src="https://i.ibb.co/Xj8qb4C/BANNER-CATEGORIAS-PRINCIPALES-FACIAL.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* uñas */}
                    <div>
                        <Link to='/Uñas'>
                            <img
                                src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* capilar */}
                    <div>
                        <Link to='/Capilar'>
                            <img
                                src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* barberia */}
                    <div>
                        <Link to='/Barberia'>
                            <img
                                src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* corporal */}
                    <div>
                        <Link TO='/CuidadoCorporal'>
                            <img
                                src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* limpieza */}
                    <div>
                        <Link to='/'>
                            <img
                                src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* accesorios */}
                    <div>
                        <Link to='/'>
                            <img
                                src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                                alt=""
                                className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            {/* para tablet */}
            <div className="container mx-auto px-5 py-2  ">
                <div className='md:flex  hidden lg:hidden md:flex-wrap columns-3 items-center justify-center gap-6'>
                    {/* pestañas */}
                    <div>
                        <Link to='/Pestañas'>
                            <img
                                src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* facial */}
                    <div>
                        <Link to='/CuidadoFacial'>
                            <img
                                src="https://i.ibb.co/Xj8qb4C/BANNER-CATEGORIAS-PRINCIPALES-FACIAL.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* uñas */}
                    <div>
                        <Link to='/Uñas'>
                            <img
                                src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* capilar */}
                    <div>
                        <Link to='/Capilar'>
                            <img
                                src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* barberia */}
                    <div>
                        <Link to='/Barberia'>
                            <img
                                src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* corporal */}
                    <div>
                        <Link TO='/CuidadoCorporal'>
                            <img
                                src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* limpieza */}
                    <div>
                        <Link to='/'>
                            <img
                                src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* accesorios */}
                    <div>
                        <Link to='/'>
                            <img
                                src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                                alt=""
                                className='w-[14rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            {/* para celular */}
            <div className="container mx-auto px-5 py-2  ">
                <div className='flex md:hidden flex-wrap columns-2 items-center justify-center gap-6'>
                    {/* pestañas */}
                    <div>
                        <Link to='/Pestañas'>
                            <img
                                src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* facial */}
                    <div>
                        <Link to='/CuidadoFacial'>
                            <img
                                src="https://i.ibb.co/Xj8qb4C/BANNER-CATEGORIAS-PRINCIPALES-FACIAL.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* uñas */}
                    <div>
                        <Link to='/Uñas'>
                            <img
                                src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* capilar */}
                    <div>
                        <Link to='/Capilar'>
                            <img
                                src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* barberia */}
                    <div>
                        <Link to='/Barberia'>
                            <img
                                src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* corporal */}
                    <div>
                        <Link TO='/CuidadoCorporal'>
                            <img
                                src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* limpieza */}
                    <div>
                        <Link to='/'>
                            <img
                                src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                    {/* accesorios */}
                    <div>
                        <Link to='/'>
                            <img
                                src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                                alt=""
                                className='w-[10rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Group;
