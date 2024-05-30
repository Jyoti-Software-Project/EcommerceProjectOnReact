import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './Components/Navbar';
import Login from './Components/Navbar/Login';
import Register from './Components/Navbar/Register';
import Order from './Components/Navbar/Order';
import Address from './Components/Navbar/Order/Address';
import DeliveryAddress from './Components/Navbar/Order/DeliveryAddress';
import Payment from './Components/Navbar/Order/Payment';
import PlaceOrder from './Components/Navbar/Order/PlaceOrder';
import Cart from './Components/Navbar/Cart';
import Home from './Components/Home';
import ProductShow from './Components/Body/ProductShow';
import Footer from './Components/Footer';
import AboutUs from './Components/Footer/AboutUs';
import ContactUs from './Components/Footer/ContactUs';
import Privacy from './Components/Footer/Privacy';
import TermsAndCondition from './Components/Footer/TermsAndCondition';
import ProtectedRoute from './Components/ProtectedRoute';
import Error from './Components/Error';
import Product from './Admin/Product';
import AdminLogin from './Admin/AdminLogin';
import AdminRegister from './Admin/AdminRegister';

function App() {
  return (
      <div className='container-fluid m-0 p-0 App'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Body/ProductShow" element={<ProductShow title="Your desire product" />} />
                <Route path="/Navbar/Login" element={<Login />} />
                <Route path="/Navbar/Register" element={<Register />} />
                <Route path="/Navbar/Order" element={<ProtectedRoute Comp={Order} />}>
                    <Route path="Address" element={<Address />} />
                    <Route path="DeliveryAddress" element={<DeliveryAddress />} />
                    <Route path="Payment" element={<Payment />} />
                    <Route path="PlaceOrder" element={<PlaceOrder />} />
                </Route>
                <Route path="/Navbar/Cart" element={<ProtectedRoute Comp={Cart} />} />
                <Route path="/Footer/AboutUs" element={<AboutUs />} />
                <Route path="/Footer/ContactUs" element={<ContactUs />} />
                <Route path="/Footer/Privacy" element={<Privacy />} />
                <Route path="/Footer/TermsAndCondition" element={<TermsAndCondition />} />
                <Route path="*" element={<Error />} />
                {/* Admin Panel all code START here */}
                    <Route path="Admin/Product" element={<Product />} />
                    <Route path="Admin/AdminLogin" element={<AdminLogin />} />
                    <Route path="Admin/AdminRegister" element={<AdminRegister />} />
                {/* Admin Panel all code END here */}
            </Routes>
            <Footer />
        </Router>
      </div>
  );
}

export default App;