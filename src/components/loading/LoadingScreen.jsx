/* eslint-disable no-unused-vars */
import React from 'react';
import './loading.css';
import Logo from '../../../public/Logo/ICONO STAR PRO-02.png'

function LoadingScreen() {
    return (
        <div>
        <div id='loader' className='loader'>
            <img src={Logo} alt="" className='loader--img'/>
        </div>
    </div>
    )
}

export default LoadingScreen
