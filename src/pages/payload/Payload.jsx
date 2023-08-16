import React, { useState } from 'react';
import Compra1 from '../../../public/cart/IMAGENES_PRUEBA_CARRUSEL-02.png'
import Compra2 from '../../../public/cart/IMAGENES_PRUEBA_CARRUSEL-03.png'
import Compra3 from '../../../public/cart/IMAGENES_PRUEBA_CARRUSEL-04.png'
import Compra4 from '../../../public/cart/IMAGENES_PRUEBA_CARRUSEL-05.png'
import Compra5 from '../../../public/cart/IMAGENES_PRUEBA_CARRUSEL-06.png'
function Payload() {

    const itemsCart = [
        {
            "id": 1,
            "name": 'cortadora',
            "quantity": 2,
            "categoria": 'Barberia',
            "price": '12.000',
            "foto": ('../../../public/prueba de carrito/IMAGENES_PRUEBA_CARRUSEL-03.png')
        },
        {
            "id": 2,
            "name": 'caja de tijeras',
            "quantity": 2,
            "categoria": 'Barberia',
            "price": '12.000',
            "foto": ('../../../public/prueba de carrito/IMAGENES_PRUEBA_CARRUSEL-04.png')
        },
        {
            "id": 3,
            "name": 'brocha peque',
            "quantity": 2,
            "categoria": 'Barberia',
            "price": '12.000',
            "foto": ('../../../public/prueba de carrito/IMAGENES_PRUEBA_CARRUSEL-05.png')
        },
        {
            "id": 4,
            "name": 'maquina de cosas',
            "quantity": 2,
            "categoria": 'Barberia',
            "price": '12.000',
            "foto": ('../../../public/prueba de carrito/IMAGENES_PRUEBA_CARRUSEL-06.png')
        },
        {
            "id": 5,
            "name": 'depilador',
            "quantity": 2,
            "categoria": 'Barberia',
            "price": '2.000',
            "foto": ('../../../public/prueba de carrito/IMAGENES_PRUEBA_CARRUSEL-02.png')
        }
    ]

    const [quantity, setQuantity] = useState(1);


    return (
        <div className='h-[150rem] pl-28 text-black dark:text-white text-center'>
            <h2 className='text-2xl'>Hola estas en la pasarela de ppagos</h2>
            <div>
                <div>
                    {
                        itemsCart.map(cart => (
                            <div key={cart} className='relative left-[12rem] pb-6 border border-gray-500 w-[30rem]'>
                                <div>
                                    <img src={cart.foto} alt="" style={{ width: '200px' }} />
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* precio total */}
                <div></div>
                {/* metodos de pago */}
                <div className=''>
                    <form action="">

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payload;
