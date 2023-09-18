import React from 'react';


function CateItems() {
    return (
        <div className=''>
            <div className="md:grid md:grid-cols-2 md:gap-2 m-8 grid grid-cols-1 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg" alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg" alt=""/>
                </div>
            </div>

        </div>
    )
}

export default CateItems;
