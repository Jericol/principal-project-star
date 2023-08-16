import React from 'react';
import BannerCart from '../../../public/img/carrito.jpg'
import ContactBar from '../../components/ContacBar/ContactBar';
import SearchBar from '../../components/SearchBar/SearchBar';

function CartAdd() {
    return (
        <div className='h-[200rem]'>
            <h2 className='text-center text-2xl'>Bienvenidos al call center de star professional</h2>
            <div className='lg:col-span-6'>
                {/* cabezera */}
                <header>
                    <div>
                        <section className='mb-6'>
                            {/* informacion de contacto */}
                            <div>
                                <ContactBar />
                            </div>
                            {/* titulo y buscador */}
                            <div className='flex items-center justify-between'>
                                <h2 className='mb-6 text-2xl text-gray-300 font-shadows relative left-2'>
                                    Holis soy un titulo
                                </h2>
                                <form action="">
                                    <section className='w-full flex items-center'>
                                        <SearchBar />
                                    </section>
                                </form>
                            </div>
                            {/* banner */}
                            <span className='mb-6'>
                                <img src={BannerCart} alt="" />
                            </span>
                        </section>
                    </div>
                </header>
                <main>
                    <div className='pl-28'>
                        <div className='flex items-center justify-around'>
                            <div className='flex items-center justify-between'>
                                <div className='relative right-[12rem]'>
                                    <h2 className='text-2xl font-bold'>
                                        Carrito de compras
                                    </h2>
                                </div>
                                <div>
                                    <p>
                                        En su bolsa 2 articulos
                                    </p>
                                </div>
                            </div>
                            <div className='bg-slate-200 w-[30rem] h-[30rem]'>
                                <h2 className='text-black text-2xl pb-8 font-bold relative left-[7rem] top-7'>Detalles de precio</h2>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder='holis escribeme tontis'
                                    className='relative left-[2.2rem] top-12 h-[11rem] w-[26rem]'
                                />
                                <div className='flex items-center justify-around mb-6 relative top-[5rem]'>
                                    <p className='font-semibold'>Total parcial</p>
                                    <p className='text-2xl font-bold'>
                                        $ 55.000
                                    </p>
                                </div>
                                <div className='pl-9 relative top-[5rem]'>
                                    <button className='px-3 py-3 rounded-lg bg-black text-white w-[26rem] transition
                                      transform hover:last:rotate-45'
                                    >
                                        Finalizar compra
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default CartAdd;
