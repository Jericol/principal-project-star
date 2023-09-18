import Slider from "react-slick";


function Distribuidores() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive : [
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
                <img src="https://i.ibb.co/CvcWp5j/BANNER-ATENCI-N-DISTRIBUIDORES.jpg" alt="banner-distribuidores" className='md:w-full md:h-auto' />
            </header>
            <main>
                {/* Encabezado y subtitulo */}
                <section className="flex flex-col items-center justify-center mb-8">
                    <h2 className="font-bold text-4xl">Únete a nuestra red de distribuidores y desbloquea un futuro de éxito y ganancias.</h2>
                    <p className="font-semibold text-2xl">Descubre las ventajas de ser nuestro distribuidor</p>
                </section>
                {/* Lista de beneficios */}
                <div>
                    <Slider {...settings}>
                        <div className="">
                            <img src="https://i.pinimg.com/550x/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="" className="max-w-full h-auto w-[700px]"/>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/550x/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="" className="max-w-full h-auto w-[700px]"/>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/550x/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="" className="max-w-full h-auto w-[700px]"/>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/550x/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="" className="max-w-full h-auto w-[700px]"/>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/550x/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="" className="max-w-full h-auto w-[700px]"/>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/550x/34/9e/2a/349e2a4d065dcc55a417ac6f0528a5cf.jpg" alt="" className="max-w-full h-auto w-[700px]"/>
                        </div>
                    </Slider>
                </div>
            </main>
        </div>
    )
}

export default Distribuidores;
