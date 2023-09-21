import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductCategoriesThunk } from '../../../store/slice/product.slice';
import { RiFullscreenExitLine, RiApps2Fill, RiCloseCircleFill, RiApps2Line, RiLayoutGridFill } from "react-icons/ri";
import Categories from '../Category';
import { Link, useNavigate } from 'react-router-dom';
import { TECollapse } from "tw-elements-react";
import './group.css'



function Group({ itemPage, setItemPage, nextPage, setNextPage, showMenu, setShowMenu, logo, setLogo }) {

    const dispatch = useDispatch();
    // estado para categorias
    const [categories, setCategories] = useState([]);

    const [num, setNum] = useState(1);
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
            <div className='md:flex items-center justify-between top-1 rounded-lg lg:hidden hidden bg-black p-2'>
                <div className=" rounded-lg">
                    {/* tablet */}
                    <ul className='md:flex items-center justify-around gap-4 hidden '>
                        {/* capilar */}
                        <li>
                            <img
                                src="https://i.ibb.co/VTx22RV/CAPILAR.png"
                                alt=""
                                className='md:h-[5rem]  w-auto '
                            />
                            <h2 className='text-white text-center'>Capilar</h2>
                        </li>
                        {/* barberia */}
                        <li>
                            <img
                                src="https://i.ibb.co/pRVwgdH/ICONO-BARBERIA.png"
                                alt=""
                                className='md:h-[5rem]  w-auto '
                            />
                            <h2 className='text-white text-center'>Barberia</h2>
                        </li>
                        {/* uñas */}
                        <li>
                            <img src="https://i.ibb.co/FbZYjtx/U-AS.png"
                                alt=""
                                className='h-[5rem] w-auto'
                            />
                            <h2 className='text-white text-center'>Uñas</h2>
                        </li>
                        {/* cuidado facil */}
                        <li>
                            <img src="https://i.ibb.co/kx8x09X/CUIDADO-FACIAL.png"
                                alt=""
                                className='md:h-[5rem]  w-auto '
                            />
                            <h2 className='text-white text-center w-9'>cuidado facial</h2>
                        </li>
                        {/* maquillaje */}
                        <li>
                            <img
                                src="https://i.ibb.co/7GWXfsL/MAQUILLAJE-Y-PESTA-AS.png"
                                alt=""
                                className='md:h-[5rem]  w-auto'
                            />
                            <h2 className='text-white text-center'>maquillaje</h2>
                        </li>
                        {/* hombre */}
                        <li>
                            <img
                                src="https://i.ibb.co/mNcQnyV/HOMBRE.png"
                                alt=""
                                className='md:h-[5rem]  w-auto'
                            />
                            <h2 className='text-white text-center'>hombre</h2>
                        </li>
                        {/* cuidado corporal */}
                        <li>
                            <img
                                src="https://i.ibb.co/PwwMjG0/CUIDADO-CORPORAL.png"
                                alt=""
                                className='md:h-[5rem]  w-auto'
                            />
                            <h2 className='text-white text-center w-9'>cuidado corporal</h2>
                        </li>
                        {/* accesorios */}
                        <li>
                            <img
                                src="https://i.ibb.co/DgbfdFY/ACCESORIOS.png"
                                alt=""
                                className='md:h-[5rem]  w-auto'
                            />
                            <h2 className='text-white text-center w-9'>accesorios</h2>
                        </li>
                    </ul>
                </div>
            </div>
            {/* celular */}
            <div className='rounded-lg '>
                <ul className='flex items-center justify-around gap-4'>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                    <li><img src="" alt="" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Group;
