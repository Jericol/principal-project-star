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
                    <li>
                        <button href="#" className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                          ${currentPage >= pageNumbers.length ? 'disabled:bg-red-500' : ''}`} 
                          onClick={onPreviusPage}
                        >
                            Previous
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
                    <li>
                        <button href="#" className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                          ${currentPage === 1 ? 'disabled:bg-red-500' : ''}`} 
                          onClick={onNextPage}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
       
    )
}

export default Pagination;
