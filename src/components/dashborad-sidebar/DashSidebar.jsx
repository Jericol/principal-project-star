import React from 'react';
import { RiTeamLine, RiSurveyLine, RiWallet3Line, RiBankCardLine } from "react-icons/ri";

function DashSidebar() {
    return (
        <div>
            <div className='bg-lightDash-300 dark:bg-primary-900 h-full overflow-y-scroll'>
                {/* FOTO DE PERFEIL NOMBRE Y ZONA */}
                <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
                    <img 
                        src="https://i.ibb.co/8gjHVw0/PRECIADO-GIRALDO-LIGIA-PATRICIA.png"
                        alt=""
                        className='rounded-full border-2 border-slate-400 w-20 h-20 object-cover' 
                    />
                    <h2 className='text-2xl dark:text-white font-semibold'>Patricia Giraldo</h2>
                    <p className='bg-lightDash-600 dark:bg-primary-100 py-1 px-3 rounded-full text-white'>Bogotá</p>
                </div>
                {/* LISTA DE ITEMS  */}
                <nav className='bg-lightDash-400 dark:bg-primary-300 p-8 rounded-tr-[150px] h-[70vh] '>
                    {/* Clientes */}
                    <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8'>
                        <RiTeamLine className='text-3xl'/> 
                        <p className='font-semibold text-2xl'>Clientes</p>
                    </section>
                    {/* cartera */}
                    <section className='dark:text-white flex items-center gap-2 cursor-pointer'>
                        <RiWallet3Line className='text-3xl'/>
                        <p className='font-semibold text-2xl'>Cartera</p>
                    </section>
                </nav>
            </div>
        </div>
    )
}

export default DashSidebar;
