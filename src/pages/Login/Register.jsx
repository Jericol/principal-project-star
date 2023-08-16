import React, { useEffect, useRef, useState } from 'react';
import Logo from "../../../public/Logo/STARPROFESSIONAL.png";
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../store/slice/register.slice';


function Register() {

    const form = useRef(null);
    const dispatch = useDispatch();
    const registro = useSelector(state => state.register)

   console.log(registro)

   useEffect(() => {
     
     dispatch(registerThunk())

   }, [dispatch])
    return (
        <article className='h-[100rem] flex items-start justify-center'>
            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    telefono: '',
                    direccion: '',
                    fecha: '',
                    correo: '',
                    cuidad: '',
                    barrio: '',
                    nit: '',

                }}
                onSubmit={(valores) => {
                    console.log(valores)
                }}
            >
                {/* Formulario de registro */}
                {({ values, handleChange, handleSubmit, handleBlur }) => (
                    <form
                        className='form-register'
                        onSubmit={handleSubmit}
                        action="https://formsubmit.co/desarrollo@importadorastar.com" 
                        method="POST"
                    >
                        {/* Logo y titulo */}
                        <section className='mb-5'>
                            <p className='title-header'>Formulario de registro</p>
                            <span className="contenedor-circule">
                                <span className="circule-first"></span>
                                <span className="circule-second">
                                </span>
                            </span>
                            <img
                                src={Logo}
                                alt="logo-star"
                                className='img-logo' />
                        </section>
                        {/* Campo para ingresar nombre */}
                        <section className='mb-5'>
                            <label htmlFor="nombre" className='name-title'>Nombres</label>
                            <input
                                type="text"
                                ref={form}
                                name='nombre'
                                className='name-input'
                                placeholder='Ingresa Tu nombre ej: Jhon alex'
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </section>
                        {/* Campo para ingresar apellido */}
                        <section className='mb-5'>
                            <label htmlFor="apellido" className='lastname-title'>Apellidos</label>
                            <input
                                type="text"
                                name='apellidos'
                                ref={form}
                                className='lastname-input'
                                placeholder='ingrese su apellido Ej: Gomez'
                                value={values.apellido}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </section>
                        {/* Campo de telefono */}
                        <section className='mb-5'>
                            <label htmlFor="telefono" className='number-title'>Telefono</label>
                            <input
                                type="tel"
                                name='telefono'
                                className='number-input'
                                placeholder='ingrese su apellido'
                                value={values.telefono}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </section>
                        {/* Cuidad */}
                        <section className='mb-5'>
                            <label htmlFor="cuidad" className='city-title'>Cuidad</label>
                            <select name="cuidad" id=""
                                className='city-input'
                                placeholder='ingrese su apellido Ej: Gomez'
                                onBlur={handleBlur}
                                value={values.apellido}
                                onChange={handleChange}
                            >
                                <option value={values.cuidad} onChange={handleChange} onBlur={handleBlur} name='bogota'>Bogota</option>
                                <option value={values.cuidad} onChange={handleChange} name='medellin'>Medellin</option>
                                <option value={values.cuidad} onChange={handleChange} name='cali'>Cali</option>
                                <option value={values.cuidad} onChange={handleChange} name='barranquilla'>Barranquilla</option>
                            </select>
                        </section>

                        {/* Direccion  */}
                        <section className='mb-5'>
                            <label htmlFor="direccion" className='address-title'>Direccion de residencia</label>
                            <input
                                type='text'
                                name='direccion'
                                className='address-input'
                                placeholder='ingrese su apellido'
                                value={values.direccion}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                        </section>
                        {/* Fecha de nacimiento */}
                        <section className='mb-5'>
                            <label htmlFor="fecha" className='data-title'>Fecha de nacimiento</label>
                            <input
                                type="date"
                                name='fecha'
                                className='data-input'
                                placeholder='ingrese su apellido'
                                value={values.fecha}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </section>
                        {/* Campo de correo electronico */}
                        <section className='mb-5'>
                            <label htmlFor="correo" className='email-title'>Correo Electronico</label>
                            <input
                                type="email"
                                name='correo'
                                className='email-input'
                                placeholder='ingrese su apellido'
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </section>
                        {/* input de tratamiento de datos */}
                        <section className="mb-5 flex items-center justify-between">
                            <div className="flex items-start">
                                {/* input de Recuerdame */}
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        className="datatreatment-input"
                                        required=""
                                    />
                                </div>
                                {/* Texto de recuerdame */}
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="datatreatment-titulo">
                                        <Link to='/dataProcessing' >
                                            Autorizo El uso y tratamiento de datos
                                        </Link>
                                    </label>
                                </div>
                            </div>
                        </section>
                        {/* Boton de registro */}
                        <section className='mb-5'>
                            <button 
                             type='submit'
                             className='boton-submit'
                            >
                                <Link>Registrarte</Link>
                            </button>
                        </section>
                    </form>
                )}

            </Formik>

        </article>
    )
}

export default Register;












