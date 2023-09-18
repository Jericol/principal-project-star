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
        <div className='flex items-center justify-between top-1 rounded-lg  lg:hidden bg-black p-2'>
            <div className="slider rounded-lg">
                <ul>
                    {/* capilar */}
                    <li>
                        <img
                            src="https://i.ibb.co/WBdwh8J/BANNER-CATEGORIA-CAPILAR.jpg"
                            alt=""
                        />
                    </li>
                    {/* uñas */}
                    <li>
                        <img src="https://i.ibb.co/CJr0fgn/BANNER-CATEGORIA-U-AS.jpg"
                            alt=""
                        />
                    </li>
                    {/* barberia */}
                    <li>
                        <img src="https://i.ibb.co/Mg74PWq/BANNER-CATEGORIA-BARBERIA.jpgg"
                            alt=""
                        />
                    </li>
                    {/* maquillaje */}
                    <li>
                        <img
                            src="https://i.ibb.co/GpDBt4m/BANNER-CATEGORIA-MAQUILLAJE-Y-PESTA-AS.jpg"
                            alt=""
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Group;
