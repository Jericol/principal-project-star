import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Home from './pages/Home/Home';
import LoadingScreen from './components/loading/LoadingScreen';
import { useSelector } from 'react-redux';
import ProductsDetail from './pages/productsDetail/ProductsDetail';
import { useEffect, useState } from "react";
import Distribuidores from './pages/Contact/Distribuidores/Distribuidores';
import Login from "./pages/Login/Login";
import Register from './pages/Registro/Registro';
import ProtetedRoutes from './components/proteccionAccount/ProtetedRoutes';
import Faq from './pages/Faq/Faq';
import DataProcessing from './pages/tratmientoDeDatos/DataProcessing';
import ProductNews from './pages/productNews/ProductNews';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/footer/Footer';
import Payload from './pages/payload/Payload';
import PrivacyPolicy from './pages/politicasPrivacidad/PrivacyPolicy';
import FormPqrs from './pages/formPqrs/FormPqrs';
import Capilar from './pages/familias/Capilar';
import RegisterPanel from './pages/Registro/RegisterPanel';
import EmailForm from './pages/Registro/EmailForm';
import ContactForm from './pages/Registro/ContacForm';
import AddressForm from './pages/Registro/AddressForm'
import Payment from './pages/PasarelaPagos/Payment';
import ScrollToTop from './components/scrollTop/ScrollToTop';
import ContactButton from './components/contactBoton/ContactButton';
import Barberia from './pages/familias/Barberia';
import Accesorios from './pages/familias/Accesorios';
import CuidadoCorporal from './pages/familias/CuidadoCorporal';
import CuidadoFacial from './pages/familias/CuidadoFacial';
import Pestañas from './pages/familias/Pestañas';
import Uñas from './pages/familias/Uñas';
import LimpiezaDesinfeccion from './pages/familias/LimpiezaDesinfeccion';
import LoginAdmin from './pages/Login/LoginAdmin';




function App() {

  const isLoading = useSelector(state => state.isLoading);
  // ESTADO PARA MENU MOVIL
  const [showMenu, setShowMenu] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [ theme, setTheme ] = useState('light');

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

// useefeect para dar mode sobre todos los componentes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])



  return (
    <div className='min-h-screen bg-baseLight-300 dark:bg-baseDark-800 dark:text-white overflow-hidden'>
      <HashRouter>
        <ScrollToTop />
        <AppNavbar
          showMenu={showMenu}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
        {isLoading && <LoadingScreen />}
        {/* menu movil */}
        <ContactButton />
        {/* ACA VA LO DEL MENU MOVIL */}
        <Routes>
          {/* Rutas */}
          <Route path='/' element={<Home />} />
          <Route path='/productsDetail/:Codigo' element={<ProductsDetail />} />
          <Route path='/register' element={<Register />} />
          <Route path='/distribuidores' element={<Distribuidores />} />
          <Route 
           path='/loginAdmin'
           element={<LoginAdmin />}
          />
          <Route path='/login' 
              element={
                <Login 
                 theme={theme}
                 setTheme={setTheme}
                />
              } 
          />
          <Route path='/Faq' element={<Faq />} />
          <Route path='/dataProcessing' element={<DataProcessing />} />
          <Route path='/register/panel' element={<RegisterPanel />}/>
          <Route path='/register/panel/email' element={<EmailForm />}/>
          <Route path='/registro/panel/contact' element={<ContactForm />}/>
          <Route path='/register/panel/address' element={<AddressForm />}/>
          <Route path='/payment' element={<Payment />}/>
          <Route 
            path='/newProduct'
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
          {/* familias */}
          <Route path='/Capilar' element={<Capilar />} />
          <Route path='/Barberia' element={<Barberia />}/>
          <Route path='/Accesorios' element={<Accesorios />}/>
          <Route path='/CuidadoCorporal' element={<CuidadoCorporal />}/>
          <Route path='/CuidadoFacial' element={<CuidadoFacial />}/>
          <Route path='/Pestañas' element={<Pestañas />}/>
          <Route path='/Uñas' element={<Uñas />}/>
          <Route path='/LimpiezaDesinfeccion' element={<LimpiezaDesinfeccion />}/>
          
          <Route path='/payload' element={<Payload />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/formPqrs' element={<FormPqrs />} />
          <Route path='/dashboard' element={<Dashboard />} />
          {/* Rutas protegidas */}
          <Route element={<ProtetedRoutes />}>
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App;
