import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductCategoriesThunk } from '../../../store/slice/product.slice';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";


function Group() {

    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('http://190.60.237.163/traegrupos')
            .then(res => setCategories(res.data.RESP))
    }, [])


    return (
        <div className='flex items-center justify-between relative rounded-lg'>
            {
                categories.map((category, index) => (
                    <div key={index} className='hidden lg:flex items-center '>
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className='border-b-4 font-advent  border-cyan-300 py-2 pr-4  flex items-center justify-between 
                            border-4 border-transparent dark:text-white mb-2 active:border-white duration-300 font-bold text-lg rounded-lg'
                        >
                            <span
                                onClick={() => dispatch(filterProductCategoriesThunk(category?.Codigo))}
                            >
                                {category.Nombre}
                            </span>
                            {
                                !isOpen ? (
                                    <RiArrowDownSFill />
                                ) : (
                                    <RiArrowUpSFill />
                                )
                            }
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Group;
