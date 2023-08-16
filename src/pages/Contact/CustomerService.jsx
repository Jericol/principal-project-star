import Whatsapp from '../../../public/redes/whatsapp.jpg';
import Logo from '../../../public/Logo/STARPROFESSIONAL.png'
import { Link } from 'react-router-dom';

function CustomerService() {


    return (
        <div className="h-[80rem]  dark:text-white scroll-auto">
            {/* servicio al cliente  */}
            <h2 className="text-3xl text-black font-bold text-center font-shadows dark:text-white">
                Soporte para servicios de contactenos
            </h2>
            <div className='pl-28 flex items-center space-x-[5rem] gap-5 text-gray-800 dark:text-white relative top-[6rem]'>
                <div>
                    <img src={Logo} alt="" className='relative bottom-5' />
                    <h2 className='text-2xl  font-semibold w-[18rem] uppercase text-center relative bottom-9'>
                        Informacion de contacto
                    </h2>
                </div>
                <div className='mb-6 lg:border-l pl-8 lg:border-gray-700 dark:border-white'>
                    <h2 className='text-2xl font-bold text-center mb-8'>
                        Comunícate con nosotros
                    </h2>
                    <form action="" className='flex flex-col gap-1'>
                        {/* nombres */}
                        <label htmlFor="" className='text-lg font-semibold uppercase'>Nombres</label>
                        <input type="text" className='w-[32rem] h-[2.3rem] px-3 py-3 dark:text-black rounded-lg mb-4' placeholder='Dejanos tus nombres'/>

                        {/* correo */}
                        <label htmlFor="" className='text-lg font-semibold uppercase'>Envíe un correo electrónico a</label>
                        <input type="text" className='w-[32rem] h-[2.3rem] px-3 py-3 dark:text-black rounded-lg mb-4' placeholder='Escribe tu correo electronico'/>

                        {/* mensaje */}
                        <label htmlFor="" className='text-lg font-semibold uppercase'>Mensaje</label>
                        <textarea name="" id="" className='w-[32rem] h-[12rem] px-3 py-3 rounded-lg mb-2' placeholder='Escribenos tus dudas'/>
                        {/* boton de submit */}
                        <button className='px-3 py-3 bg-black text-white rounded-lg hover:transition hover:ease-in-out hover:bg-blue-600  hover:bg-right duration-150'>
                            Envíar datos
                        </button>
                    </form>
                </div>
                <div className='mb-6 lg:border-l pl-10 lg:border-gray-700 dark:border-white'>
                    <div>
                        {/* pbx */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[3rem] h-[3rem]">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"

                            />
                        </svg>
                        <div className='flex flex-col gap-1 relative left-20 bottom-14  lg:border-b-2 pb-6 lg:border-gray-700 dark:border-white'>
                            <h2 className='text-xl uppercase font-bold font-advent'>pbx:</h2>
                            <p className='text-2xl font-semibold space-x-[2rem]'>6014927230</p>
                        </div>
                        {/* direccion */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[3rem] h-[3rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <div className='flex flex-col gap-1 relative left-20 bottom-14 lg:border-b-2 pb-6 lg:border-gray-700 dark:border-white'>
                            <h2 className='text-xl uppercase font-bold font-advent'>direccion</h2>
                            <p className='text-2xl font-semibold'>Colombia - Bogotá</p>
                        </div>
                        {/* correo */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[3rem] h-[3rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                        </svg>

                        <div className='flex flex-col gap-1 relative left-20 bottom-14 lg:border-b-2 pb-6 lg:border-gray-700 dark:border-white'>
                            <h2 className='text-xl uppercase font-bold font-advent'>correo</h2>
                            <p className='text-2xl font-semibold'>
                                <Link to='mailto:servicioalcliente@importadorastar.com' target='_blank'>
                                    ventas@importadorastar.com
                                </Link>
                            </p>
                        </div>
                        {/* whatsapp */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[3rem] h-[3rem]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                        {/* boton de check */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative bottom-[4rem] left-[2.4rem] text-green-600 animate-bounce">
                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        <div className='flex flex-col gap-1 relative left-20 bottom-14 lg:border-b-2 pb-6 lg:border-gray-700 dark:border-white'>
                            <h2 className='text-xl uppercase font-bold font-advent'>whatsapp</h2>
                            <p className='text-2xl font-semibold'>
                                <Link to='https://wa.link/ha60z4' target='_blank'>
                                    3123924999
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerService;
// cols="20" rows="10"