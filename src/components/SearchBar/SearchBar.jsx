import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NameFiltredThunk } from '../../store/slice/product.slice';
import { RiSearchLine } from "react-icons/ri";

function SearchBar() {

    const [newSearch, setNewSearch] = useState("");
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    console.log(newSearch)

    const handlesybmit = () => {

    }

    return (
        <div>
            {/* buscador para pc */}
            <div action="" className='w-full lg:flex items-center  md:hidden hidden'>
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
                        strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-black"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            {/* buscador para md con efecto leo */}
            <div className='lg:hidden md:flex hidden'>
                {/* boton de busqueda de navbar */}
                <button
                    className='dark:border dark:border-slate-400 dark:rounded-full md:py-3 md:px-4 py-2 px-2 border border-slate-600 rounded-full md:relative md:left-11 
                     relative left-5'
                    // onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-3 h-3 dark:text-white"

                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                {/* sidebar busqueda */}
                <div className={`absolute top-24 -right-[1rem] ${isOpen ? 'right-0' : '-right-[49rem]'} w-[43rem] h-[4rem] 
                   flex items-center justify-center transition-all transform duration-[.8s]`}
                >
                    <button >
                        <input
                            type="text"
                            value={newSearch}
                            onChange={(e) => setNewSearch(e.target.value)}
                            className={`dark:bg-[#1f1d28] bg-white w-[18rem]  md:w-[42rem] md:h-[3rem] py-2 pl-8 pr-4 rounded-lg text-black  dark:text-gray-300 outline-none dark:border dark:border-slate-300 
                             border border-slate-600 text-xl`}
                            placeholder='Buscar tu producto favorito'
                            
                        />
                    </button>
                    <button onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}>
                        <RiSearchLine className='relative right-10 text-2xl' onClick={() => setIsOpen(!isOpen)}/>
                    </button>
                </div>
            </div>
            {/* buscador para sm con efecto  */}
            <div className='lg:hidden md:hidden flex'>
                 {/* boton de busqueda de navbar */}
                 <button
                    className='dark:border dark:border-slate-400 dark:rounded-full md:py-3 md:px-4 py-2 px-2 border border-slate-600 rounded-full md:relative md:left-11 
                     relative left-5'
                    // onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-3 h-3 dark:text-white"

                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                {/* sidebar busqueda */}
                <div className={`absolute top-[4.5rem] -right-[1rem] ${isOpen ? '-right-[9rem]' : '-right-[49rem]'} w-[43rem] h-[4rem] 
                   flex items-center justify-center transition-all transform duration-[.8s]`}
                >
                    <button >
                        <input
                            type="text"
                            value={newSearch}
                            onChange={(e) => setNewSearch(e.target.value)}
                            className={`dark:bg-[#1f1d28] bg-white w-[22rem]  md:w-[42rem] md:h-[3rem] py-2 pl-8 pr-4 rounded-lg text-black  dark:text-gray-300 outline-none dark:border dark:border-slate-300 
                             border border-slate-600 md:text-xl text-lg`}
                            placeholder='Buscar tu producto favorito'
                            
                        />
                    </button>
                    <button onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}>
                        <RiSearchLine className='relative right-10 text-xl md:text-2xl' onClick={() => setIsOpen(!isOpen)}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
