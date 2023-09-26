import Slider from "react-slick";


function Distribuidores() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="h-[900rem]">
            <header className='mb-8'>
                <img src="https://photos.smugmug.com/photos/i-sGKxGkq/0/0f265c99/X2/i-sGKxGkq-X2.jpg" alt="banner-distribuidores" className='md:w-full md:h-auto' />
            </header>
            <main>
                {/* Encabezado y subtitulo */}
                <section className="flex flex-col items-center justify-center mb-8">
                    <h2 className="font-bold text-4xl">Únete a nuestra red de distribuidores y desbloquea un futuro de éxito y ganancias.</h2>
                    <p className="font-semibold text-2xl">
                        En Star Professional, sabemos que la belleza es un negocio que nunca pasa de moda. Nuestra empresa se enorgullece de ofrecer una amplia gama
                        de productos de belleza de alta calidad que han conquistado corazones y clientes en todo el pais.
                    </p>
                </section>
                {/* Lista de beneficios */}
                <div>
                    <Slider {...settings}>
                        {/* ganancias */}
                        <div className="">
                            <img src="https://i.imgur.com/6iLNlMV.jpg" alt="" className="max-w-full h-auto w-[700px] rounded-lg" />
                            <h2>Ganancias</h2>
                        </div>
                        {/* estrategias */}
                        <div>
                            <img src="https://i.ibb.co/6HPWhfv/estrategias.jpg" alt="" className="max-w-full h-auto w-[700px] rounded-lg" />
                            <h2>estrategias</h2>
                        </div>
                        {/* acompañamiento */}
                        <div>
                            <img src="https://i.ibb.co/Snh6fTw/acompa-amiento.jpg" alt="" className="max-w-full h-auto w-[700px] rounded-lg" />
                            <h2>acompañamiento</h2>
                        </div>
                        {/* envios */}
                        <div>
                            <img src="https://i.ibb.co/y6TNNsV/envios-pais.jpg" alt="" className="max-w-full h-auto w-[700px] rounded-lg" />
                            <h2>envios</h2>
                        </div>
                        {/* marketing */}
                        <div>
                            <img src="https://i.ibb.co/jMNmHP3/marketing.jpg" alt="" className="max-w-full h-auto w-[700px] rounded-lg" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/0XQgF89/soporte.jpg" alt="" className="max-w-full h-auto w-[700px] rounded-lg" />
                        </div>
                    </Slider>
                </div>
            </main>
        </div>
    )
}

export default Distribuidores;
