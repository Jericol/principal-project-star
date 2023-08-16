
import Banner from '../../../public/envios/banner edificio.jpg';
import ValoresCorp1 from '../../../public/valores-corporativos/compromiso.png';
import ValoresCorp2 from '../../../public/valores-corporativos/innovacion.png';
import ValoresCorp3 from '../../../public/valores-corporativos/liderazgo3.png';
import ValoresCorp4 from '../../../public/valores-corporativos/servicio-al-cliente5.png';
import ValoresCorp5 from '../../../public/valores-corporativos/trabajo-en-equipo.png';
import Corporativos from './Corporativos';
import LogoImport from '../../../public/Logo/STAR-IMPORT.png';
import './phrase.css';
import BoutiqueFirst from '../../../public/img/CARD-BOUTIQUE-1.jpg';
import BoutiqueSecond from '../../../public/img/CARD-BOUTIQUE-2}.jpg';
import BannerBotique from '../../../public/img/BANNER-BPUTIQUE.jpg';


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
            <main className='mb-6 main-faq'>
                <div className='main-content'>
                    {/* informacion de mision */}
                    <div className='mision'>
                        <section className='mision-conten'>
                            <h2 className='mision-title'>nuestra mision</h2>
                            <p className='mision-paragraph'>
                                Distribuir y comercializar artículos de belleza de alta
                                calidad generando una experiencia de marca única
                                en todos nuestros canales de venta,
                                logrando alcanzar la fidelización del consumidor final.
                            </p>
                        </section>
                        <section className='mision-card'>
                            <img src={BoutiqueFirst} alt="" className='mision-img' />
                        </section>
                    </div>
                    {/* informacion de vision */}
                    <div className='vision'>
                        <section className='pl-2'>
                            <img src={BoutiqueSecond} alt="" className='vision-img' />
                        </section>
                        <section className='vision-card'>
                            <h2 className='vision-title'>nuestra vision</h2>
                            <p className='vision-paragraph'>
                                Posicionarnos como la marca preferida de los consumidores de belleza en Colombia, estableciendo
                                procesos de experiencia de marca única servicio y atención oportuna al cliente que conlleve a
                                mantenernos como una empresa competitiva,
                                dinámica, innovadora y eficiente, garantizando la mejor calidad en todas sus diferentes líneas
                            </p>
                        </section>
                    </div>
                    {/* informacion de valores corporativos */}
                    {/* compromiso */}
                    <div className='mb-6 font-monserrat border-b pb-8 dark:border-gray-100 border-gray-700 flex items-center gap-8 justify-around relative left-[3rem] bottom-[27rem] font-bold '>
                        <section className='pl-20'>
                            <h2 className='mb-6 uppercase text-2xl '>valores corporativos</h2>
                            <p className='text-2xl w-[34rem] space-y-8  space-x-8'>
                                Compromiso: Nuestro compromiso y dedicación se manifiesta en la búsqueda de soluciones
                                efectivas y sostenibles para satisfacer las necesidades de todo el publico en general,
                                este es el cimiento de nuestra relación con cada cliente que nos impulsa a superar obstáculos y
                                desafíos
                            </p>
                        </section>
                        <section className='pl-2'>
                            <img src={ValoresCorp1} alt="" className='h-[15rem] lg:relative lg:right-[2rem]' />
                        </section>
                    </div>
                    {/* innovacion */}
                    <div className='mb-6 font-monserrat border-b pb-8 dark:border-gray-100 border-gray-700 flex items-center gap-8 justify-around relative left-[3rem] bottom-[27rem] font-bold '>
                        <section className='pl-2'>
                            <img src={ValoresCorp2} alt="" className='h-[15rem] lg:relative left-[9rem]' />
                        </section>
                        <section className='pl-20'>
                            <p className='text-2xl w-[34rem] space-y-8  space-x-8'>
                                Innovacion: La innovación es el eje central de nuestro enfoque. Buscamos constantemente nuevas
                                formas de mejorar nuestros productos,
                                servicios y procesos. Nos mantenemos a la vanguardia de las últimas tendencias y tecnologías
                                para ofrecer soluciones creativas que impulsen el progreso y la eficiencia en todo lo que hacemos.
                            </p>
                        </section>
                    </div>
                    {/* lideranzgo */}
                    <div className='mb-6 font-monserrat border-b pb-8 dark:border-gray-100 border-gray-700 flex items-center gap-8 justify-around relative left-[3rem] bottom-[27rem] font-bold '>
                        <section className='pl-20'>
                            <p className='text-2xl w-[34rem] space-y-8  space-x-8'>
                                Liderazgo: Nuestro objetivo es liderar en cada uno de los ámbitos en los que operamos.
                                Nos esforzamos por ser referentes en la industria de la belleza, estableciendo estándares de
                                excelencia y siendo pioneros en la
                                implementación de mejores prácticas.
                            </p>
                        </section>
                        <section className='pl-2'>
                            <img src={ValoresCorp3} alt="" className='h-[15rem] lg:relative lg:right-[2rem]' />
                        </section>
                    </div>
                    {/* servicio al cliente */}
                    <div className='mb-6 font-monserrat border-b pb-8 dark:border-gray-100 border-gray-700 flex items-center gap-8 justify-around relative left-[3rem] bottom-[27rem] font-bold '>
                        <section className='pl-2'>
                            <img src={ValoresCorp4} alt="" className='h-[15rem] lg:relative left-[9rem]' />
                        </section>
                        <section className='pl-20'>
                            <p className='text-2xl w-[34rem] space-y-8  space-x-8'>
                                Servicio al cliente: Nuestros clientes son nuestra razón de ser. Les brindamos un servicio excepcional,
                                escuchando activamente sus necesidades y respondiendo de manera rápida y efectiva.
                                siendo proactivos en la solución de problemas y ofreciendo un trato humano y personalizado
                                en cada interacción.
                            </p>
                        </section>
                    </div>
                    {/* Trabajo en equipo */}
                    <div className='mb-6 font-monserrat border-b pb-8 dark:border-gray-100 border-gray-700 flex items-center gap-8 justify-around relative left-[3rem] bottom-[27rem] font-bold '>
                        <section className='pl-20'>
                            <p className='text-2xl w-[34rem] space-y-8  space-x-8'>
                                Trabajo en equipo: Reconocemos que nuestro éxito depende del trabajo conjunto de todos 
                                nuestros colaboradores.
                                Fomentamos un ambiente de colaboración, respeto y apoyo mutuo. Valoramos las diferentes
                                perspectivas y habilidades creando así un entorno donde cada uno puede crecer y contribuir al máximo.
                            </p>
                        </section>
                        <section className='pl-2'>
                            <img src={ValoresCorp5} alt="" className='h-[15rem] lg:relative lg:right-[2rem]' />
                        </section>
                    </div>
                    {/* banner boutique */}
                    <div className='border-b pb-8 border-gray-10 flex items-center gap-8 justify-around relative left-[3rem] bottom-[27rem] font-bold font-advent'>
                        <section className='pl-2'>
                            <img src={BannerBotique} alt="" className='object-cover rounded-lg' />
                        </section>
                    </div>
                    <section>
                        <Corporativos />
                    </section>
                </div>
            </main>
        </section>
    )
}

export default Faq;
