import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NameFiltredThunk } from '../../store/slice/product.slice';

function SearchBar() {

    const [newSearch, setNewSearch] = useState("");
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <div action="" className='w-full flex items-center '>
                <input
                    type="text"
                    value={newSearch}
                    onChange={(e) => setNewSearch(e.target.value)}
                    className={`bg-[#1f1d28] w-[18rem]  md:w-[22rem] md:h-[2.5rem] py-2 pl-8 pr-4 rounded-lg  text-gray-300 outline-none dark:border dark:border-slate-300 
                     ${isOpen ? 'right-0' : '-right-full'}`}
                    placeholder='Buscar tu producto favorito'
                />
                <button
                    className='bg-slate-200 py-2 px-4'
                    onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                       strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 "
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default SearchBar;
