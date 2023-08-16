import React from 'react';
import items1 from "../../../public/categorias/Down1.jpg";
import items2 from "../../../public/categorias/Down2.jpg";
import items3 from "../../../public/categorias/Down3.jpg";
import items4 from "../../../public/categorias/45.jpg";
import items5 from "../../../public/categorias/2_1.jpg";
import items6 from "../../../public/categorias/29.jpg";

function CateItems() {
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={items1} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={items2} />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={items3} />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={items4} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={items5} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={items6} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CateItems;
