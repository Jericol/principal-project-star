
import Banner from '../../../public/envios/banner edificio.jpg';

import LogoImport from '../../../public/Logo/STAR-IMPORT.png';




function Faq() {
    return (
        <section className='contenedor-faq'>
            <header className=' '>
                <div className=''>
                    <img src={Banner} alt="foto-empresa" className='img' />
                    <section className='company-info'>
                        <span className='title-first'>
                            Informacion de la empresa
                        </span>
                        <span className='title-second'>
                            Nuestra Mision Vision y Valores corporativos
                        </span>
                        <span className='phrase-company'>
                            Star es la marca preferida de los consumidores de belleza en
                            Colombia ofrecemos una solución única y óptima para
                            todas las  necesidades y expectativas de nuestros clientes
                            basamos nuestro  crecimiento en la calidad, la innovación
                            y un  servicio de excelencia.
                        </span>
                    </section>
                </div>
                <div className='seccion-importadora'>
                    <section className=' caja-importadora' >
                        <section className='base-imagen'>
                            <img src={LogoImport} alt="" className='' />
                        </section>
                        <section className='title-import'>
                            <h2 className=''>
                                importadora y distribuidora star
                            </h2>
                        </section>
                        <section className='paragraph-content'>
                            <p className='paragraph'>
                                Somos una empresa pionera en la importación, distribución y comercialización
                                de productos de belleza a nivel nacional,
                                con más de 15 años de experiencia. Gracias a la
                                implementación de la tecnología e imagen de nuestros productos,
                                Star Professional a través de nuestros canales digitales,
                                distribuidores y clientes, ofrecemos la mejor calidad y precio
                                para beneficio del consumidor.
                            </p>
                        </section>
                    </section>
                </div>
            </header>
            {/* contenido de quienes somos */}
           
        </section>
    )
}

export default Faq;
