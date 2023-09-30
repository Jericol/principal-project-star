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
            <div className="container mx-auto px-5 py-2  ">
                {/* para tablet */}
                <div className="-m-1 flex flex-wrap md:-m-2 lg:hidden">
                    <div className="flex w-1/2 flex-wrap">
                        {/* primera arriba */}
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover"
                                src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg" />
                        </div>
                        {/* segunda de arriba */}
                        <div className="w-1/2 p-1 md:p-2 col-start-1 col-end-4">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/Xj8qb4C/BANNER-CATEGORIAS-PRINCIPALES-FACIAL.jpg" />
                        </div>
                        {/* grande izquierda */}
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg" />
                        </div>
                    </div>
                    {/* grade derecha */}
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg" />
                        </div>
                        {/* pequeña  */}
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg" />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            {/* para pc */}
            <div className='mx-auto p-5 container'>
                <div className='flex flex-wrap items-center justify-center gap-12'>
                    <div>
                        <img 
                           src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg" 
                           alt="" 
                           className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                    <div>
                        <img 
                           src="https://i.ibb.co/Xj8qb4C/BANNER-CATEGORIAS-PRINCIPALES-FACIAL.jpg" 
                           alt="" 
                           className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                    <div>
                        <img 
                           src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg" 
                           alt="" 
                           className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                    <div>
                        <img 
                          src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg" 
                          alt="" 
                          className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                    <div>
                        <img 
                          src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg" 
                          alt="" 
                          className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                    <div>
                        <img 
                          src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg" 
                          alt="" 
                          className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                    <div>
                        <img 
                          src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg" 
                          alt="" 
                          className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                    <div>
                        <img 
                          src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg" 
                          alt="" 
                          className='w-[18rem] rounded-lg hover:!scale-125 cursor-pointer hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Group;
