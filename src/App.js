import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './PrimarySections/Header/Header'
import Home from './Home/HomeMainSection';
import Footer from './PrimarySections/Footer/Index';
import Blog from './Blog/Blog';
import Shop from './Shop/Shop';
import Contact from './Contact/Contact';
import Compare from './Compare/Compare';
import WishList from './WishList/WishList';
import Product from './ProductCart/ProductCart';
import Checkout from './Checkout/Index';
import Register from './MyAccount/Register/Register';
import Login from './MyAccount/Login/Login';
import Details from './ProductDetails'
import './App.css';
import DashBoard from './MyAccount/DashBoard/Index';


function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/dashboard'>
            <Header/>
            <DashBoard/>
            <Footer/>
          </Route>
          <Route path='/contact'>
            <Header/>
            <Contact/>
            <Footer/>
          </Route>
          <Route path='/productdetails'>
            <Header/>
            <Details/>
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
          </Route>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
