/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../public/Logo/STARPROFESSIONAL.png';
import { useDispatch } from 'react-redux';


function Login() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // prubea 3 
     const submit = (data) => {
         console.log(data)
         axios.post("http://190.60.237.163/logincli", data, {
             headers: {
                 'usuario': '1026555677',
                 'clave': 'LeoGR1026'
             }
        })
         .then(res => {
             console.log(res.data)
             localStorage.setItem("usuario", res.data.usuario)
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

  
    
    return (
        <section className="contenedor">
            <div className="capa-superior">
                <div className="capa-media">
                    <div className="capa-interna">
                        <section href="#" className="seccion-logo">
                            <img className="w-8 h-8 mr-2" src={Logo} alt="logo" style={{ width: '180px', height: '180px' }} />
                        </section>
                        <h1 className="login-title">
                            Inicia sesión con tu cuenta star
                        </h1>
                        <form onSubmit={handleSubmit(submit)} className="space-y-4 md:space-y-6" action="#">
                            {/* Usuario */}
                            <div>
                                <label htmlFor="username" className="user-title">Usuario</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="user-input"
                                    placeholder="leoGomez12"
                                    required=""
                                    {...register("username")}
                                />
                            </div>
                            {/* Contraseña */}
                            <div>
                                <label htmlFor="password" className="">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="password-input"
                                    required=""
                                    {...register("password")}
                                />
                            </div>
                            {/* container de Recuerdame */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    {/* input de Recuerdame */}
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="input-check"
                                            required=""
                                        />
                                    </div>
                                    {/* Texto de recuerdame */}
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="title-check"
                                        >
                                            Recuerdame
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="forgot-password">
                                    Olvidaste la contraseña?
                                </a>
                            </div>
                            {/* Boton de iniciar sesion */}
                            <button
                                type="submit"
                                className="botonsubmit-log"
                            >
                                Iniciar sesion
                            </button>
                            {/* Enlace de Registro */}
                            <p className="register-text">
                                Aún no tienes una cuenta ?
                                <Link to="" className="registre-link ">
                                    Registrate
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;
