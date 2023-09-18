

function Faq() {
    return (
        <section className='h-[200rem] overflow-hidden'>
            <header className=' '>
                <div className='mb-8'>
                    <img src="https://i.ibb.co/zHb5n6W/banner-edificio.jpg"
                        alt="foto-empresa"
                        className='md:h-[16rem] lg:w-full lg:h-[28rem] h-[9rem]'
                    />
                </div>
                <div className="lg:relative lg:top-36">
                    <img
                        src="https://i.ibb.co/NL3g95B/BANNER-DESCRIPCION-CORPORATIVA.jpg"
                        alt=""
                        className="hover:shadow-lg hover:shadow-gray-500 hover:transition-all hover:transform hover:duration-[.4s] dark:hover:shadow-md dark:hover:shadow-white"
                    />
                </div>
                {/* mision y vision */}
                <div className="flex items-center justify-center gap-12 lg:relative lg:top-[16rem] lg:left-2 md:relative md:top-[3rem]">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <img 
                               className="lg:h-auto md:w-[63rem]  rounded-lg hover:shadow-lg hover:shadow-slate-500 hover:transition hover:transform hover:duration-[.10s] 
                                dark:hover:shadow-md dark:hover:shadow-white object-cover" 
                               src="https://i.ibb.co/D5TvMbY/BANNER-VISION.jpg" 
                               alt="" 
                            />
                        </div>
                        <div>
                            <img 
                               className="h-auto w-[63rem] rounded-lg hover:shadow-lg hover:shadow-slate-500 hover:transition hover:transform hover:duration-[.10s] 
                               dark:hover:shadow-md dark:hover:shadow-white  object-cover" 
                               src="https://i.ibb.co/J5G1w2R/BANNER-MISION.jpg" 
                               alt="" 
                            />
                        </div>
                    </div>
                </div>
                {/* valores corporativos */}
                <div className="lg:relative lg:top-[25rem] lg:left-[29rem] md:relative md:top-[4rem]">
                    <img 
                       src="https://i.ibb.co/dK6T6mv/BANNER-VALORES-CORPORATIVOS.jpg" 
                       alt="" 
                       className="h-auto lg:w-[80rem] md:w-[50rem] object-cover rounded-lg hover:shadow-gray-500 hover:transition-all hover:transform hover:duration-[.4s] "
                    />
                </div>
            </header>
        </section>
    )
}

export default Faq;
