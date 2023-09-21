/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';


function Login() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sesion, setSesion] = useState([])


    // prubea 3 
    const submit = (data) => {
        console.log(data)
        axios.post("http://190.60.237.163/login", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.jwt)
                //  navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    console.log("Respuesta del servidor:", error.response.data);
                } else if (error.request) {
                    console.log("No se recibió respuesta del servidor:", error.request);
                } else {
                    console.log("Error al hacer la solicitud:", error.message);
                }
            });



        //  dispatch(checkIdThunk())

    }

    // useEffect((data) => {
    //    axios.post("http://190.60.237.163/login", data)
    //    .then(res => setSesion(res.data.RESP))
    // }, [])

    // console.log(sesion)

    return (
        <div>
            {/* para pc */}
            <div className='md:hidden hidden lg:flex h-[88rem]'>
                <div>
                    {/* video */}
                    <header>
                        <section>
                            <video
                                src="../../../public/BACKGROUND.mp4"
                                autoPlay muted loop
                            />
                        </section>
                    </header>
                    {/* formulario de inicio */}
                    <main>
                        <div className='flex items-center justify-center'>
                            <section className='flex flex-col items-center justify-center text-white'>
                                {/* logo */}
                                <div className='relative bottom-[69rem] left-5'>
                                    <img
                                        src="https://i.ibb.co/z5yFkFh/ICONO-STAR-PRO-02.png"
                                        alt=""
                                        className='w-[14rem]'
                                    />
                                </div>
                                {/* titulo */}
                                <div>
                                    <h1 className='lg:text-3xl relative bottom-[71rem] left-5'>
                                        Bienvenidos a Star Professional
                                    </h1>
                                </div>
                                {/* usuario */}
                                <div className='flex items-center gap-4 border-2 border-white py-3 px-3 rounded-lg relative left-[1rem] bottom-[69rem] mb-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <input
                                        type="text"
                                        className='px-3 py-2 bg-transparent w-[25rem]'
                                        placeholder='Ingresa tu usuario'
                                    />
                                </div>
                                {/* contraseña */}
                                <div className='flex items-center gap-4 border-2 border-white py-3 px-3 rounded-lg relative left-[1rem] bottom-[69rem]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <input
                                        type="password"
                                        className='px-3 lg:py-2 bg-transparent lg:w-[25rem] '
                                        placeholder='Ingresa tu contraseña'
                                    />
                                </div>
                                {/* sesion de registro  */}
                                <div className='flex items-center justify-between gap-5 lg:relative lg:bottom-[67.5rem]'>
                                    <span className='relative right-4 text-xl'>Has olvidado tu contraseña</span>
                                    <span className='relative left-9 text-xl'>Registrarse</span>
                                </div>
                                {/* boton iniciar sesion */}
                                <div className='relative bottom-[64rem]'>
                                    <button className='px-3 py-3 border-2 border-white rounded-lg lg:w-[20rem]'>
                                        Iniciar sesion
                                    </button>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
            {/* para tablet */}
            <div className='lg:hidden hidden md:flex md:h-[30rem] '>
                <div className=''>
                    <header>
                        <section>
                            <video
                                src="../../../public/BACKGROUND.mp4"
                                autoPlay muted loop
                            />
                        </section>
                    </header>
                    <main>
                        <div className='relative bottom-[59rem] flex items-center justify-center'>
                            <section className='flex flex-col items-center justify-center text-white
                              md:relative md:top-[37rem] '
                            >
                                {/* logo */}
                                <div className='lg:relative lg:bottom-[55rem] lg:left-[12rem]'>
                                    <img
                                        src="https://i.ibb.co/z5yFkFh/ICONO-STAR-PRO-02.png"
                                        alt=""
                                        className='w-[14rem] object-cover  md:relative md:right-[13rem]'
                                    />
                                </div>
                                {/* titulo */}
                                <div className='lg:relative lg:bottom-[42rem] lg:right-[8rem]'>
                                    <h1 className='lg:text-3xl md:text-xl md:relative md:left-[8.6rem] md:bottom-[16rem]'>
                                        Bienvenidos a Star Professional
                                    </h1>
                                </div>
                                {/* usuario */}
                                <div className='flex items-center gap-4 border-2 border-white lg:py-3 lg:px-4 md:px-3 md:py-2 rounded-lg lg:relative lg:bottom-[55rem] mb-8
                                   md:relative md:bottom-[14rem] md:left-[9rem]'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <input
                                        type="text"
                                        className='lg:px-3 lg:py-2 bg-transparent lg:w-[25rem] md:w-[14rem]'
                                        placeholder='Ingresa tu usuario'
                                    />
                                </div>
                                {/* contraseña */}
                                <div className='flex items-center gap-4 border-2 border-white lg:py-3 lg:px-4 md:px-3 md:py-2 rounded-lg lg:relative lg:bottom-[49rem]
                              md:relative md:bottom-[14rem] md:left-[9rem]'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <input
                                        type="password"
                                        className='px-3 lg:py-2 bg-transparent lg:w-[25rem] '
                                        placeholder='Ingresa tu contraseña'
                                    />
                                </div>
                                {/* sesion de registro  */}
                                <div className='flex md:flex-col lg:items-center justify-around gap-5 lg:relative lg:bottom-[14.5rem] md:relative md:left-[9rem] md:bottom-[14.5rem]'>
                                    <span className='lg:relative lg:right-16 md:relative md:top-[2rem]'>Has olvidado tu contraseña</span>
                                    <span className='lg:relative lg:left-16 md:relative md:top-5 md:left-[4rem]'>Registrarse</span>
                                </div>
                                {/* boton inicio de sesion */}
                                <div className='lg:relative lg:bottom-[12rem] md:relative md:bottom-[12rem] md:left-[9rem]'>
                                    <button className='px-3 py-3 border-2 border-white rounded-lg lg:w-[20rem]'>
                                        Iniciar sesion
                                    </button>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
            {/* para celular */}
            <div className=' lg:hidden md:hidden flex'>
                <div>
                    <header>
                        <section>
                            <video
                                src="../../../public/BACKGROUND.mp4"
                                autoPlay muted loop
                            />
                        </section>
                    </header>
                    <main>
                        <div className='flex items-center justify-center relative bottom-[50rem] bg-red-500'>
                            <section className='flex flex-col items-center justify-center text-white'>
                                {/* logo */}
                                <div className='relative top-[35rem] '>
                                    <img src="https://i.ibb.co/z5yFkFh/ICONO-STAR-PRO-02.png" alt="" className='w-[9rem] object-cover ' />
                                </div>
                                {/* usuario */}
                                <div className='flex items-center gap-4 border-2 border-white rounded-lg  mb-8 relative top-[33rem]
                                    '
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    <input
                                        type="text"
                                        className='lg:px-3 lg:py-2 bg-transparent bg-red-500'
                                        placeholder='Ingresa tu usuario'
                                    />
                                </div>
                                {/* contraseña */}
                                <div className='flex items-center gap-4 border-2 border-white relative top-[33rem]'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <input
                                        type="password"
                                        className='px-3 lg:py-2 bg-transparent lg:w-[25rem] '
                                        placeholder='Ingresa tu contraseña'
                                    />
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Login;
