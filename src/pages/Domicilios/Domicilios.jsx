import React, { useState } from 'react';
import Domiclios from "../../../public/img/BANNER CAMION.jpg";
import Cordi from "../../../public/envios/coordinadora.jpg";
import Deprisa from "../../../public/envios/depri.jpg";
import Inter from "../../../public/envios/Inter-Rapidisimo.png"

function Domicilios() {


    const [ name, setName ] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
    }

    const clientes = [
        {
            "name": "angela cortez socorro",
            "documento": 1026555677,
            "address": 'cra 21 # 2 - 49',
            "cuidad": 'Cali'
        },
    ]


    return (
        <main>
            <div className='h-[200rem] flex flex-col items-center '>
                {/* Banner */}
                <section>
                    <img src={Domiclios} alt="" />
                </section>
                {/* Titulo  */}
                <section className='mb-5'>
                    <h1 className='text-white text-3xl'>Envios a nivel nacional</h1>
                </section>

                {/* Logos de transportadoras */}
                <section className=' dark:text-black'>
                    <form action="" className='flex flex-col space-y-2 bg-sky-300 h-[30rem] w-[30rem] px-4 py-2' onChange={handleChange}>
                        <h2 className='dark:text-white font-semibold font-bangers text-2xl text-center space-y-1'>Datos del Envio</h2>
                        <label htmlFor="" className='dark:text-white text-lg'>Destino</label>
                        <input
                            type="text"
                            name="Bogotá"
                            id=""
                            value={clientes[0].name}
                            onChange={(e) => setName(e.target.value)}
                            readOnly
                            className='py-2 px-2'
                        />
                          <label htmlFor="" className='dark:text-white'>nit o c.c</label>
                        <input
                            type="text"
                            name="Bogotá"
                            id=""
                            value={clientes[0].documento}
                            onChange={(e) => setName(e.target.value)}
                            readOnly
                        />
                         <label htmlFor="" className='dark:text-white'>Telefono</label>
                        <input
                            type="number"
                            name="telefono"
                            id=""
                            onChange={(e) => setName(e.target.value)}
                            placeholder='ingresa tu numero de contacto'
                            // value={name}
                           
                        />
                         <label htmlFor="" className='dark:text-white'>Direccion del envio</label>
                        <input
                            type="text"
                            name="Bogotá"
                            id=""
                            onChange={(e) => setName(e.target.value)}
                            placeholder='ingresa la direccion del envio'
                            // value={name}
                        />
                          <label htmlFor="" className='dark:text-white'>Cuidad</label>
                        <input
                            type="text"
                            name="Bogotá"
                            id=""
                            onChange={(e) => setName(e.target.value)}
                            placeholder='ingrese la cuidad del envio'
                            // value={name}
                        />
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Domicilios;
