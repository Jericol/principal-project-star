import { useState } from "react";


function Pagination({ productsPage, currentPage, totalProducts, setCurrentPage }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPage); i++) {
        pageNumbers.push(i)
    }


    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecifyPage = (n) => {
        setCurrentPage(n)
    }



    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li className="lg:flex hidden">
                        <button href="#" className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500  border-gray-300 rounded-l-lg
                          hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                           relative right-[4rem] bottom-[18rem] transition-all duration-[.8s] ease-linear
                          ${currentPage >= pageNumbers.length ? 'disabled:bg-red-500' : ''}`}
                            onClick={onPreviusPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 bg-white rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </li>
                    {
                        pageNumbers.map(noPage => (
                            <li key={noPage}>
                                <a href="#" className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${noPage === currentPage ? 'bg-blue-300' : ''}`}
                                    onClick={() => onSpecifyPage(noPage)}
                                >
                                    {noPage}
                                </a>
                            </li>
                        ))
                    }
                    <li className="lg:flex hidden ">
                        <button href="#" className={`flex items-center justify-center px-2 h-10 leading-tight text-gray-500 relative left-[108.5rem] bottom-[17rem]
                          hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                          ${currentPage === 1 ? 'disabled:bg-red-500' : ''}`}
                            onClick={onNextPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 bg-white rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Pagination;
