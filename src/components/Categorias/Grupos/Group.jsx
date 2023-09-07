import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductCategoriesThunk } from '../../../store/slice/product.slice';
import { RiFullscreenExitLine, RiApps2Fill, RiCloseCircleFill, RiApps2Line } from "react-icons/ri";
import Categories from '../Category';
import { Link, useNavigate } from 'react-router-dom';
import { TECollapse } from "tw-elements-react";



function Group({ itemPage, setItemPage, nextPage, setNextPage, showMenu, setShowMenu, logo, setLogo }) {

    const dispatch = useDispatch();
    // estado para categorias
    const [categories, setCategories] = useState([]);

    const [num, setNum] = useState(1);
    // estado para llamar la api de categorias
    const [categoryNum, setCategoryNum] = useState(4)
    const navigate = useNavigate();
    const [activeElement, setActiveElement] = useState("");



    useEffect(() => {
        axios.get("http://190.60.237.163/traegrupos")
            .then(res => setCategories(res.data.RESP))

    }, [])



    return (
        <div className='flex items-center justify-between relative left-[6rem] top-4  rounded-lg  '>
            <div>
                <section className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-5 md:p-6 lg:p-4 rounded-md relative'>
                        <Link to="/" className=' lg:p-4 flex justify-center rounded-xl md:hover:bg-emerald-200  dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <RiApps2Line className='text-2xl lg:text-2xl md:text-3xl dark:text-white ' />
                            <h2 className={` origin-left duration-500 pl-2 font-medium font-advent text-lg md:text-xl dark:text-white`} onClick={() => setLogo(!logo)}>
                                Categorias
                            </h2>
                        </Link>
                </section>
            </div>

        </div>
    )
}

export default Group;
