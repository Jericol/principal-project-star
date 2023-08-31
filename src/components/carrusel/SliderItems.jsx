import React from 'react';
import { Carousel } from 'react-carousel3';

import Banner from "../../../public/img carrousel/BANNER-ACCESORIOS-AHORA-SI.jpg";



function SliderItems() {
    return (
        <div className=''>
           <img src={Banner} alt="" className='rounded-lg md:w-full md:h-[16rem] lg:h-[28rem] h-[9rem]'/>
        </div>
    )
}

export default SliderItems
