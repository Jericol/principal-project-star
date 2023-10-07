/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../../public/img/usuario.jpg'
import { useDispatch } from 'react-redux';


function Login({ theme, setTheme }) {

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
                  navigate("/dashboard")
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

    const handleHide = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className='mx-auto container p-5 h-screen' >
            <div className='flex items-center justify-center' >
                <section className='bg-emerald-500 h-[39rem] w-[29rem] rounded-lg relative top-[7rem]'>
                    <form action="" className='flex flex-col gap-6'>
                        <h2 className='text-center text-2xl font-bold relative top-8'>Login Distribuidores</h2>
                        {
                            theme === 'light' ? 
                            <img 
                               src='' 
                               alt='' 
                               className='object-cover lg:w-[12rem] lg:h-[]'
                            />
                            :
                            <img 
                               src='' 
                               alt=''  
                               className=''
                            />
                        }

                    </form>
                </section>
                <section className='border border-sky-500 h-[39rem] w-[27rem] rounded-lg dark:text-white text-black relative top-[7rem]'>
                    <form action="" className='flex flex-col items-start m-5 gap-4 z-20' onSubmit={handleSubmit(submit)}>
                        {
                            theme === 'light' ?
                                <img
                                    src="../../../public/img/ICONO STAR PRO-01.png"
                                    alt=""
                                    className='object-cover lg:w-[12rem] lg:h-[12rem]'
                                />
                                :
                                <img
                                    src="../../../public/img/ICONO STAR PRO-02.png"
                                    alt=""
                                    className='object-cover lg:w-[12rem] lg:h-[12rem]'
                                />
                        }
                        <h2 className='text-center  text-2xl font-bold relative bottom-9 tracking-wide'>
                            Login de usuarios
                        </h2>
                        {/* usuario */}
                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="usuario" className='text-xl font-semibold'>Iniciar sesion</label>
                            <input
                                type="text"
                                name='usuario'
                                className='rounded-lg lg:w-[20rem] lg:h-[2.5rem] px-3'
                                placeholder='Ingresa tu usuario'
                                required
                                {...register('usuario')}
                            />
                        </div>
                        {/* contraseña */}
                        <div className='flex flex-col items-start gap-4 '>
                            <label htmlFor="" className='text-xl font-semibold tracking-wide'>Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                className='rounded-lg lg:w-[20rem] lg:h-[2.5rem] px-3 '
                                placeholder='Ingresa tu contraseña'
                                required
                                {...register('clave')}
                            />
                        </div>
                        {/* olvide contraseña / register */}
                        <div className='flex items-center justify-between gap-14 text-blue-600'>
                            {/* olvide la contraseña */}
                            <section>
                                <h2 className='cursor-pointer hover:!scale-125 transition duration-[0.3s]'>Olvide la contraseña</h2>
                            </section>
                            {/* register */}
                            <section>
                                <Link to='/register'>
                                    <h2 className='cursor-pointer hover:!scale-125 transition duration-[0.3s]'>Registrate</h2>
                                </Link>
                            </section>
                        </div>
                        {/* buton */}
                        <div>
                            <button className='rounded-lg px-3 py-3 bg-blue-600 text-white w-[20rem]'>
                                Iniciar sesion
                            </button>
                        </div>
                    </form>
                </section>

            </div>
        </div>
    )
}

export default Login;
