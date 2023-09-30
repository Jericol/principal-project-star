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
            {/* nueva barra de busqueda pc */}
            <form className='md:hidden hidden lg:flex'>
                <label htmlFor="defaultSearch" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-[25rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Buscar tu producto favorito" required
                        value={newSearch}
                        onChange={(e) => setNewSearch(e.target.value)}
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}
                    >
                        Buscar
                    </button>
                </div>
            </form>

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
                        <RiSearchLine className='relative right-10 text-2xl' onClick={() => setIsOpen(!isOpen)} />
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
                        <RiSearchLine className='relative right-10 text-xl md:text-2xl' onClick={() => setIsOpen(!isOpen)} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
