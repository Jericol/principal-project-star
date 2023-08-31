import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Home from './pages/Home/Home';
import Purchases from './pages/Purchases/Purchases';
import LoadingScreen from './components/loading/LoadingScreen';
import Contact from "./pages/Contact/CustomerService";
import { useSelector } from 'react-redux';
import ProductsDetail from './pages/productsDetail/ProductsDetail';
import { useState } from "react";
import { RiMenu3Line, RiStore2Line, RiHome3Line, RiShoppingCart2Line, RiFlutterLine } from "react-icons/ri";
import Distribuidores from './pages/Contact/Distribuidores/Distribuidores';
import Login from "./pages/Login/Login";
import Register from './pages/Login/Register';
import ProtetedRoutes from './components/proteccionAccount/ProtetedRoutes';
import Domicilios from './pages/Domicilios/Domicilios';
import Faq from './pages/Faq/Faq';
import DataProcessing from './pages/tratmientoDeDatos/DataProcessing';
import ProductNews from './pages/productNews/ProductNews';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Payload from './pages/payload/Payload';
import PrivacyPolicy from './pages/politicasPrivacidad/PrivacyPolicy';
import FormPqrs from './pages/formPqrs/FormPqrs';
import CartAdd from './pages/CarritoAdd/CartAdd';
import MovalNv from './components/modalNv/MovalNv';
import CustomerService from './pages/Contact/CustomerService';
import ContactBar from './components/ContacBar/ContactBar';
import Capilar from './pages/familias/Capilar';
// import WorkWithUs from './pages/servicios/workWithUs';




function App() {

  const isLoading = useSelector(state => state.isLoading);
  // ESTADO PARA MENU MOVIL
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (
    <div className=' w-full min-h-screen bg-slate-300 dark:bg-[#423e5c] dark:text-white overflow-hidden'>
      <HashRouter>
        <ContactBar />
        <AppNavbar
          showMenu={showMenu}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
        {isLoading && <LoadingScreen />}
        {/* menu movil */}
        {/* ACA VA LO DEL MENU MOVIL */}
        <Routes>
          {/* Rutas */}
          <Route path='/' element={<Home />} />
          <Route path='/productsDetail/:Codigo' element={<ProductsDetail />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/distribuidores' element={<Distribuidores />} />
          <Route path='/login' element={<Login />} />
          <Route path='/domicilios' element={<Domicilios />} />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/dataProcessing' element={<DataProcessing />} />
          <Route path='/Capilar' element={<Capilar />} />
          <Route path='/newProduct'
            element={
              <ProductNews
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }

          />
          <Route path='/payload' element={<Payload />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/carrito' element={<CartAdd />} />
          <Route path='/formPqrs' element={<FormPqrs />} />
          <Route path='/movalbar' element={<MovalNv />} />
          <Route path='/customerService' element={<CustomerService />} />
          {/* <Route path='/WorkingUs' element={<WorkWithUs />} /> */}
          {/* Rutas protegidas */}
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route element={<ProtetedRoutes />}>
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
