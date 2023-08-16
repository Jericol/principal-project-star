import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NameFiltredThunk } from '../../store/slice/product.slice';

function SearchBar() {

    const [newSearch, setNewSearch] = useState("");
    const dispatch = useDispatch();


    return (
        <div>
            <div>
               
            </div>
            <div action="" className='w-full flex items-center'>
                <input
                    type="text"
                    value={newSearch}
                    onChange={(e) => setNewSearch(e.target.value)}
                    className='bg-[#1f1d28] w-full py-2 pl-8 pr-4 rounded-lg  text-gray-300 outline-none dark:border dark:border-slate-300'
                    placeholder='Buscar por codigo'
                />
                <button
                    className='bg-slate-200 py-2 px-4'
                    onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}
                >
                    buscar
                </button>
            </div>
        </div>
    )
}

export default SearchBar;
