import React from 'react'
import DashSidebar from '../../components/dashborad-sidebar/DashSidebar';
import { RiWallet2Line, RiBookLine, RiArticleLine } from "react-icons/ri";
import Graficos from '../../../public/img/graficos2.png';

function Dashboard() {
    return (
        <div className='flex min-h-screen'>
            <div>
             <DashSidebar />
            </div>
            <div className='flex-1 '>
                <main>
                    {/* 3 card de gastos */}
                    <div className='flex items-center justify-around gap-5 m-8'>
                        <section className='bg-emerald-300 h-[12rem] w-[24%] rounded-md shadow-xl shadow-green-900'>
                            <section className='flex items-center justify-evenly gap-5 dark:text-gray-500'>
                                <div className='relative top-[3rem] left-[2rem] bg-white rounded-full px-3 py-3 shadow-md shadow-black'>
                                    <RiWallet2Line className='text-4xl'/>
                                </div>
                                <div className='flex flex-col justify-center gap-4 mx-auto relative top-[3rem]'>
                                    <h2 className='text-2xl font-semibold'>Total recaudado</h2>
                                    <p className='text-2xl font-semibold text-center'>$ 200.000</p>
                                </div>
                            </section>
                        </section>
                        <section className='bg-red-400 h-[12rem] w-[24%] rounded-md shadow-xl shadow-red-500'>
                            <section className='flex items-center justify-evenly gap-5 dark:text-gray-500'>
                                <div className='relative top-[3rem] left-[2rem] bg-white rounded-full px-3 py-3 shadow-md shadow-black'>
                                    <RiBookLine className='text-4xl'/>
                                </div>
                                <div className='flex flex-col justify-center gap-4 mx-auto relative top-[3rem]'>
                                    <h2 className='text-2xl font-medium'>Atrasado</h2>
                                    <p className='text-2xl font-semibold text-center'>$ 500.000</p>
                                </div>
                            </section>
                        </section>
                        <section className='bg-orange-400 h-[12rem] w-[24%] rounded-md shadow-xl shadow-orange-600'>
                            <section className='flex items-center justify-evenly gap-5 dark:text-gray-500'>
                                <div className='relative top-[3rem] left-[2rem] bg-white rounded-full px-3 py-3 shadow-md shadow-black'>
                                    <RiArticleLine className='text-2xl '/>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4 mx-auto relative top-[3rem]'>
                                    <h2 className='text-2xl font-semibold'>Pendientes</h2>
                                    <p className='text-2xl font-semibold text-center'>$ 2.000.000</p>
                                </div>
                            </section>
                        </section>
                    </div>
                    {/* estadisticas */}
                    <div className='flex items-center justify-center m-8 p-8'>
                        <section className='bg-sky-700 w-full h-[20rem]'>
                            <img src={Graficos} alt="" className='object-cover w-full h-[20rem] bg-right-top'/>
                        </section>
                    </div>
                    {/* manejo de clientes /  ventas al mes*/}
                    <div className='flex items-center justify-evenly gap-5 m-5 p-5'>
                        <section className='bg-lightDash-400 h-[13rem] w-[30%] rounded-md dark:text-black'>
                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div>
                                    <h2 className='text-2xl font-bold'>Historial de ventas</h2>
                                </div>
                                <div className='flex items-center justify-evenly gap-12'>
                                    <div className=''>
                                        <select name="" id=""  className='flex items-start rounded-md px-3 py-1 '>
                                            <option value="">Oct</option>
                                            <option value="">Sep</option>
                                            <option value="">Ags</option>
                                            <option value="">Jul</option>
                                            <option value="">Jun</option>
                                        </select>
                                    </div>
                                    <div className='w-auto  bg-white px-3 py-2'>
                                        <h2 className='w-auto mx-auto'>
                                            Lorem ipsum, dolor sit amet .
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='bg-lightDash-400 h-[13rem] w-[30%]'>
                            <h2 className='text-2xl text-center m-5 font-bold'>Clientes visitados</h2>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard
