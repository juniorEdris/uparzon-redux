import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './PrimarySections/Header/Header'
import Home from './Home/HomeMainSection';
import Footer from './PrimarySections/FooterSection';
import Blog from './Blog/Blog';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import Compare from './VendorPages/Compare/Compare';
import WishList from './VendorPages/WishList/WishList';
import Product from './VendorPages/ProductCart/ProductCart';
import Checkout from './VendorPages/Checkout/Checkout';
import Register from './VendorPages/MyAccount/Register/Register';
import Login from './VendorPages/MyAccount/Login/Login';
import Modal from './PrimarySections/Modal/ModalSection';
import './App.css';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/contact'>
            <Header/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path='/blog'>
            <Header/>
            <Blog/>
            <Footer/>
          </Route>
          <Route path='/shop'>
            <Header/>
            <Shop/>
            <Footer/>
          </Route>
          <Route path='/compare'>
            <Header/>
            <Compare/>
            <Footer/>
          </Route>
          <Route path='/wishlist'>
            <Header/>
            <WishList/>
            <Footer/>
          </Route>
          <Route path='/cart'>
            <Header/>
            <Product/>
            <Footer/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
            <Footer/>
          </Route>
          <Route path='/register'>
            <Header/>
            <Register/>
            <Footer/>
          </Route>
          <Route path='/login'>
            <Header/>
            <Login/>
            <Footer/>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
            <Footer/>
            <Modal/>
          </Route>
        </Switch>
        
      </Router>
      
      </div>
  );
}

export default App;
