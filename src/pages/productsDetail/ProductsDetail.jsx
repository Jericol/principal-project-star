import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterProductCategoriesThunk, getProductsThunk } from "../../store/slice/product.slice";
import { RiShoppingCartLine, RiArrowDownSFill } from "react-icons/ri";

import Cart from "../../components/cart/Cart";
import Pagination from "../../components/Pagination/Pagination";
import { getCartThunk } from "../../store/slice/cart.slice";


function ProductsDetail() {

    const { Codigo } = useParams();
    const dispatch = useDispatch();
    const newsSuggested = useSelector(state => state.product)
    const totalProduct = newsSuggested.length;
    const [productsPage, setProductsPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * productsPage;
    const firsIndex = lastIndex - productsPage;

    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    const [Cantidad, setCantidad] = useState(1);


    // PARA FILTRAR CATEGORIAS 
    useEffect(() => {
        axios.get(`http://190.60.237.163/articulos/?buscar=${Codigo}&size=1`)
            .then(res => {
                setNews(res.data.RESP)
                // console.log(res.data.RESP[0]?.CodFami)
                dispatch(filterProductCategoriesThunk(res.data.RESP[0]?.CodFami))
            })
    }, [Codigo]);

    // console.log(news)

    const Authentication = (data) => {
        axios.post("190.60.237.163/encabezadoped", data)
        .then(res => {
           if (res.status === 200) {
             console.log(res.data)
             localStorage.setItem("id", res.data.id)
           } else {
            console.log('error en la respuesta')
           }
        })
        .catch(error => {
            console.log(error, 'error en endpoint encabezado')
        })

    } 

    const HadleSuma = () => {
        
    }

    

    return (
        <div className="lg:h-[130rem] md:h-auto">
            <div className="mx-auto text-white  mb-5 container ">
                {/* Detalles del producto  */}
                <div className="lg:grid lg:grid-cols-2">
                    {
                        news.map(items => (
                            <article key={items} className="md:grid md:grid-cols-2 pt-[12rem] pl-5 bg-white text-black dark:text-white dark:bg-[#1f1d2b] md:w-[42rem]
                               md:h-[30rem] lg:h-[35rem] lg:w-[50rem] md:rounded-lg md:relative md:left-16 md:top-10 "
                            >
                                {/* foto */}
                                <section className="flex flex-col items-center ">
                                    <img src={items?.Foto}
                                        alt=""
                                        // style={{ width: "300px" }}
                                        className="relative w-[300px] bottom-[9rem] right-9 md:relative md:bottom-[4rem] md:right-[5rem] lg:relative lg:right-16 lg:bottom-[8.5rem]"
                                    />
                                </section>
                                {/* contenedor de caja */}
                                <section className="md:relative md:bottom-10">
                                    {/* titulo del producto caja */}
                                    <h2 className="text-2xl relative bottom-[16rem] w-[19rem] text-center right-5 p-2 
                                        md:relative md:bottom-[7rem] md:right-20 md:text-center font-bold  md:text-2xl 
                                        lg:text-center lg:relative lg:right-[7.6rem] lg:w-[30rem]"
                                    >
                                        {items?.Descripcion}
                                    </h2>
                                    {/* descripcion larga */}
                                    <p className=" text-lg relative bottom-[13rem] right-9 text-center 
                                        lg:w-[30rem] lg:relative lg:right-[8rem] md:relative md:bottom-[5rem]
                                        md:right-[5rem] md:text-xl md:text-center md:w-[20rem]"
                                    >
                                        {items?.Adicional}
                                    </p>
                                    {/* Botones mas precio */}
                                    <section className="">
                                        <section className=" relative bottom-[9.5rem] left-[4rem] md:relative md:top-[3rem] md:right-5">
                                            <p className="text-2xl font-bold md:text-3xl
                                                    md:font-semibold md:relative md:right-[4rem] md:bottom-[6rem] lg:relative lg:left-1"
                                            >
                                               $  {items?.Precio}
                                            </p>
                                        </section>
                                    </section>
                                    <section className="lg:relative lg:left-7 ">
                                        <button 
                                            className="px-7 py-3 bg-blue-500 rounded-lg font-bold transform hover:bg-green-400 
                                            hover:scale-110 hover:text-black transition duration-500 text-white"
                                            onSubmit={Authentication}
                                        >
                                            Add al carrito
                                        </button>
                                    </section>
                                </section>
                            </article>
                        ))
                    }
                    {/* tabla de valores */}
                    <section className="mb-8">
                        <div className="relative left-9 top-6 lg:relative lg:top-12 lg:left-[12rem] md:relative md:top-16 md:left-16 overflow-hidden">
                            <table className="bg-slate-300 w-[21rem] lg:w-[40rem] lg:h-[34.5rem] text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg md:w-[41rem]">
                                <thead className="bg-white text-xs border-b dark:bg-gray-800 dark:border-gray-700">
                                    <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="col" className="bg-[#1f1d2b] border-b px-6 py-3 dark:bg-gray-700 text-white uppercase">
                                            nombre de producto
                                        </th>
                                        <td scope="col" className="bg-[#312e44] text-white px-6 py-3">
                                            {news[0]?.Descripcion}
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="bg-[#1f1d2b] border-b px-6 py-3 dark:bg-gray-700 text-white uppercase">
                                            Marca
                                        </th>
                                        <td className="bg-[#312e44] text-white px-6 py-4">
                                            {news[0]?.Marca}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="bg-[#1f1d2b] border-b px-6 py-3 dark:bg-gray-700 text-white uppercase">
                                            Alto
                                        </th>
                                        <td className="bg-[#312e44] text-white px-6 py-4">
                                            {news[0]?.Alto}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="bg-[#1f1d2b] border-b px-6 py-3 dark:bg-gray-700 text-white uppercase">
                                            Ancho
                                        </th>
                                        <td className="bg-[#312e44] text-white px-6 py-4">
                                            {news[0]?.Ancho}
                                        </td>

                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800        dark:border-gray-700">
                                        <th scope="row" className="bg-[#1f1d2b] border-b px-6 py-3 dark:bg-gray-700 text-white uppercase">
                                            Largo
                                        </th>
                                        <td className="bg-[#312e44] text-white px-6 py-4">
                                            {news[0]?.Largo}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
                {/* seccion detalles */}
                <h2>Productos Similares</h2>
                {/* productos similares */}
                <section className='lg:pl-16 lg:relative lg:top-[12rem] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28 font-monserrat font-semibold'>
                    {
                        newsSuggested.map(newsItem => (
                            <section key={newsItem.Codigo} onClick={() => navigate(`/productsDetail/${newsItem?.Codigo}`)}
                                className='bg-white text-black dark:bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center gap-2 
                                 dark:text-gray-300 text-center border-2 border-black '
                            >
                                <img
                                    src={newsItem?.Foto}
                                    alt=""
                                    className='object-cover w-60 '
                                />
                                <p>{newsItem?.Descripcion}</p>
                                <span>REF: {newsItem?.Codigo}</span>
                                <p>$: {newsItem?.Precio}</p>
                                <section>
                                    <button 
                                        className="px-7 py-3 bg-blue-500 rounded-lg font-bold transform hover:bg-green-400 
                                        hover:scale-110 hover:text-black transition duration-500"
                                    >
                                        Add al carrito
                                    </button>
                                </section>
                            </section>
                        )).slice(firsIndex, lastIndex)
                    }
                    <Pagination
                        productsPage={productsPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalProduct={totalProduct}

                    />
                </section>
            </div>

        </div>
    )
}

export default ProductsDetail;
