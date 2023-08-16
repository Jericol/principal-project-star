import React, { useState, useRef } from 'react';




// eslint-disable-next-line react/prop-types
function MovalNv({ showModal, setShowModal, open, setOpen }) {

    const [indice, setindice] = useState(0);

    const images = [
        {
            title: "COSMETIQUERA NEGRO",
            value: "5.0",
            url: "../../../public/cart/1764NEGRA.png"
        },
        {
            title: "COSMETIQUERA GRIS",
            value: "5.0",
            url: "../../../public/cart/1764GRIS.png"
        },
        {
            title: "COSMETIQUERA VERDER",
            value: "5.0",
            url: "../../../public/cart/1764VERDE.png"
        },
        {
            title: "MALETIN EN  ALUMINO ",
            value: "5.0",
            url: "../../../public/cart/1767 DORADA.png"
        },
        {
            title: "MALETIN EN  ALUMINO",
            value: "5.0",
            url: "../../../public/cart/1767 ORO ROSA.png"
        },
        {
            title: "MALETIN EN  ALUMINO",
            value: "5.0",
            url: "../../../public/cart/1767 ROSA.png"
        },
    ]


    const next = () => {
        if (indice < images.length - 1) {
            setindice(indice + 1)
        } else {
            setindice(0)
        }
    }


    const back = () => {
        if (indice > 0) {
            setindice(indice - 1)
        } else {
            setindice(images.length - 1)
        }
    }


    return (
        <div>
            <button
                className="bg-slate-300 text-black dark:text-white  ring-gray-600 active:bg-slate-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Novedades
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[30rem] h-[30rem] my-6 ">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[29rem] h-[31rem] bg-gradient-to-tl from-[#323346] to-[#000000]
                                 dark:bg-gradient-to-tl dark:from-slate-300 dark:to-white outline-none focus:outline-none"
                            >
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 fixed  rounded-t">
                                    {/* <h3 className="text-3xl font-semibold fixed z-auto ">
                                    Star novedades
                                </h3> */}
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {/* <span className="bg-blue-500 text-black h-[5rem] w-[5rem] rounded-lg text-2xl block focus:outline-none">
                                            <RiCloseCircleFill />
                                        </span> */}
                                    </button>
                                </div>
                                {/*body*/}
                                <div>
                                    <div className="relative p-6 flex items-center justify-center top-[3rem] right-2">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 text-white cursor-pointer hover:bg-white hover:text-black duration-300 hover:scale-125 rounded-full relative right-[1rem] top-3"
                                            onClick={back}
                                        >
                                            <path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                                        </svg>

                                        <div className="w-[20rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#" className='relative left-[4rem]'>
                                                <img
                                                    src={images[indice].url}
                                                    alt=""
                                                    style={{ width: '200px' }}
                                                    className={`object-cover `}
                                                />

                                            </a>
                                            <div className="px-5 pb-5">
                                                <a href="#">
                                                    <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                                                        {images[indice].title}
                                                    </h5>
                                                </a>
                                                <div className="flex items-center mt-2.5 mb-5">
                                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                                        {images[indice].value}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 text-white hover:text-black hover:bg-white duration-300 hover:scale-125 rounded-full ml-5 relative bottom-[8rem] left-[24.2rem]"
                                        onClick={next}
                                    >
                                        <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                    <div className='flex flex-row gap-4 relative top-[1.8rem] left-[9rem]'>
                                        {
                                            images.map((img, index) => (
                                                <div key={index} className={`${index === indice && "opacity-100"} bg-white dark:bg-blue-500 rounded-full h-2 w-[1rem] opacity-25`}></div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6  rounded-b">
                                    <button
                                        className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                             viewBox="0 0 24 24" fill="currentColor" 
                                             className="w-8 h-8 relative bottom-[24rem] left-[15.5rem]">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                        </svg>

                                    </button>
                                    <button
                                        className=" ring-blue-400 hover:ring-[#272531] ring-offset-4 ring-offset-blue-100 hover:ring-offset-blue-600 hover:text-white 
                                        dark:ring-offset-slate-900 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg 
                                        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-blue-300 relative top-6 right-[5.8rem] outline-none 
                                        dark:text-black"
                                        type="button"
                                        onClick={() => alert("agregaste un kit")}
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default MovalNv;
