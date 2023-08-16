/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPurchasesThunk } from '../../store/slice/purchases.slice';
import { Link, useNavigate } from 'react-router-dom';
import CartBanner from "../../../public/img/carrito.jpg"
import ContactBar from '../../components/ContacBar/ContactBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cart from '../../components/cart/Cart';
import Prueba from '../../../public/img/Capilar 2.jpg'


function Purchases() {

    const purchases = useSelector(state => state.purchases);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPurchasesThunk())


    }, [])

    console.log(purchases)

    return (
        <div className='h-[200rem] pl-28 grid grid-cols-1 lg:grid-cols-8 overflow-hidden'>
            <div className='lg:col-span-6'>
                <header>
                    <div className=''>
                        <section>
                            {/* informacion de contacto */}
                            <div className=''>
                                <ContactBar />
                            </div>
                            {/* titulo y buscador */}
                            <div className='flex items-center justify-between'>
                                <h2 className='mb-6 text-2xl text-gray-300 font-shadows relative left-2'>
                                    Siempre Estamos contigo
                                </h2>
                                <form action="">
                                    <section className='w-full flex items-center'>
                                        <SearchBar />
                                    </section>
                                </form>
                            </div>
                            {/* banner */}
                            <span className='mb-6'>
                                <img src={CartBanner} alt="" className='rounded-lg' />
                            </span>
                        </section>
                    </div>
                </header>
                <main className='flex flex-col'>
                    <div className='relative overflow-x-auto  top-[4rem]'>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                                        Nombre de producto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Cantidad
                                    </th>
                                    <th scope="col" className="px-6 py-3 rounded-r-lg">
                                        Precio
                                    </th>
                                </tr>
                            </thead>
                            {purchases.map((ListItem, index) => (
                                <tbody key={index}>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {ListItem.Descripcion}
                                        </th>
                                        <td className="px-6 py-4">
                                            {ListItem.Cantidad}
                                        </td>
                                        <td className="px-6 py-4">
                                            $ {ListItem.Total}
                                        </td>
                                    </tr>
                                </tbody>
                            ))}

                            <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" className="px-6 py-3 text-base">Total</th>
                                    <td className="px-6 py-3">4.000</td>
                                    <td className="px-6 py-3">7.090.000</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </main>
            </div >
            <div className='lg:col-span-2  fixed lg:static right-0 top-0 bg-[#1f1d2b] w-full h-full'>
                <Cart />
            </div>
        </div >

    )
}

export default Purchases;
