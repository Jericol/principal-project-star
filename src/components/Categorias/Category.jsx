import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { filterProductCategoriesThunk } from '../../store/slice/product.slice';
import { useDispatch, useSelector } from 'react-redux';

function Categories() {

    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        axios.get('http://190.60.237.163/traegrupos')
            .then(res => setCategories(res.data.RESP))
    }, [])

    console.log(categories)

    return (
        <div className='flex items-center justify-around text-black dark:text-white dark:bg-[#1f1d2b]'>
        {
            categories.map(category => (
                <div key={category?.Codigo} onClick={() => dispatch(filterProductCategoriesThunk(category?.Codigo))} className='hidden lg:flex items-center gap-2'>
                    <button className='border-b-2 font-advent uppercase text-lg hover:border-cyan-300 py-2 pr-4'>
                        {category?.Nombre}
                    </button>
                </div>
            ))
        }
    </div>
    )
}

export default Categories;
