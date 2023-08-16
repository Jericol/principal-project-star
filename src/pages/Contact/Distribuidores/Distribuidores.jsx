import Banner from '../../../../public/img/BANNER-ATENCION-DISTRIBUIDORES.jpg';






function Distribuidores() {





    return (
        <div className="pl-28 h-[260rem] text-2xl text-white text-center">
            <header className='relative right-[1rem]'>
                <img src={Banner} alt="" />
            </header>
            <main className='mb-8 h-[150rem]'>
                <div className='flex items-center justify-evenly relative right-[5rem]'>
                    <div className='relative top-[7rem]'>
                       
                    </div>
                    <div className=''>
                      
                        <h2 className='dark:text-white text-black text-[4rem] font-bold relative bottom-[4rem] left-[2rem]'>
                            Corporativo
                        </h2>
                    </div>
                </div>
                <p className='dark:text-white text-black font-semibold text-2xl w-[28rem] text-start relative bottom-[7rem] left-[66rem]'>
                    Transforma tu pasión por la belleza en tu propio negocio: ¡Únete a nosotros y haz brillar tu futuro !
                </p>
                <button className='px-3 py-2 rounded-lg bg-slate-400 ring-2 ring-black relative left-[15.8rem] bottom-[5rem]'>
                    Contáctenos
                </button>
                <div>
                    <div className='flex flex-col items-center gap-6 justify-center'>
                        <h2 className='text-2xl font-bold dark:text-white text-black w-[44rem]'>
                            Irradia confianza y belleza, Comienza tu Camino como Distribuidor y únete ha <span className='uppercase'>star professional</span> y transforma vidas
                        </h2>
                        <p className='text-2xl text-black dark:text-white w-[52rem]'>
                            En un mundo donde la belleza y la confianza van de la mano, te presentamos una oportunidad única para convertirte en un distribuidor de productos
                            que no solo realzan la apariencia, sino que también empoderan a quienes los utilizan. En  <i className='font-semibold uppercase'>star professional</i>,
                            no solo ofrecemos productos de belleza
                            excepcionales, sino que también te brindamos una plataforma para crecer, aprender y liderar tu propio camino hacia el éxito.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-x-16 relative left-[9rem] top-[6rem]'>
                  
                </div>
                <h2 className='text-2xl font-semibold text-center relative top-6 text-black'>¿Por qué elegirnos?</h2>
                {/* porque elegirnos */}
                <div className='flex items-center justify-around relative top-[12rem]'>
                    <div className='flex items-center justify-around gap-8'>
                        <p className='text-black w-[25rem] text-lg'>
                            <span className='font-semibold'>Calidad Inigualable: </span> <br />
                            Nuestros productos están formulados con los ingredientes más finos y avanzados, respaldados por la investigación científica.
                            Te enorgullecerás de representar productos que realmente marcan la diferencia en la vida de las personas.
                        </p>
                        <p className='text-black w-[25rem] pt-5 text-lg'>
                            <span className='font-semibold'>Apoyo Integral</span><br />
                            No estás solo en este viaje. Ofrecemos capacitación integral para ayudarte a entender no solo nuestros productos, sino también las estrategias
                            efectivas de venta. Nuestro equipo estará a tu disposición para responder preguntas y brindarte orientación en cada paso .
                        </p>
                        <p className='text-black w-[25rem] text-lg'>
                            <span className='font-semibold'>Oportunidad de Crecimiento: </span> <br />
                            ¿Sueñas con dirigir tu propio negocio? Aquí es donde comienza. Con nuestro modelo de distribución, tienes la oportunidad de crear tu propio camino
                            hacia el éxito. Establece tus metas, trabaja con dedicación y cosecha las recompensas
                        </p>
                        <p className='text-black w-[25rem]  text-lg'>
                            <span className='font-semibold'>Impacto Positivo:</span> <br />
                            No solo vendemos productos, creamos experiencias. Ayudamos a las personas a sentirse seguras y hermosas, lo que a su vez influye en su confianza y
                            actitud. Al unirte a nosotros, te conviertes en un facilitador de esta transformación positiva en la vida de los demás.
                        </p>
                    </div>
                </div>
                {/* banner de equipo */}
                <div className='relative top-[16rem] left-[18rem]'>
                   
                </div>
                <div className='flex items-center justify-around'>
                    <p className='text-black text-2xl w-[64rem] relative top-[22rem] left-[4rem]'>
                        No pierdas la oportunidad de ser parte de algo más grande. Con  star professional,
                        no solo te conviertes en un distribuidor de productos de belleza, sino en un embajador del empoderamiento y la autoexpresión. Juntos,
                        creamos belleza en todos los sentidos de la palabra. Únete a nosotros y comencemos este viaje hacia el éxito y la belleza interior y exterior.
                    </p>
                    
                </div>
               
            </main>
        </div>
    )
}

export default Distribuidores;
