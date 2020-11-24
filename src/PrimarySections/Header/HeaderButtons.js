import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer'
import { useStateValue } from '../../Utility/StateProvider'
import './HeaderButton.css'

export default function HeaderButtons() {


    // Basket counting functionality
    const[{basket,wishList,user}] = useStateValue()
    //mycart menu dropdown
    const [isCartActive, setCartActive] = useState(false)
    const showCart = (e)=>{
        e.preventDefault()
        setCartActive(!isCartActive)
        setIsAccActive(false)
    }
    // User btn active
    const [isAccActive, setIsAccActive] = useState(false);
    const AccBtn = (e) =>{
        e.preventDefault();
        setIsAccActive(!isAccActive);
        setCartActive(false);
    }

    return (
        <div className="col-lg-4 col-md-8 col-12 col-sm-8 order-lg-last">
            <div className="mini-cart-option">
            <ul>
                <li className="compare"> 
                    <Link className="ha-toggle" to={`/compare`}><span className="lnr lnr-sync" /></Link>
                </li>
                
                <li className="wishlist">
                <Link className="ha-toggle" to='/wishlist'><span className="lnr lnr-heart" /><span className="count">{ wishList.length || 0 }</span></Link>
                </li>
                <li className="my-cart">
                <Link onClick={basket.length > 0 && showCart} className="ha-toggle" to="#"><span className="lnr lnr-cart" /><span className="count">{ basket.length || 0 }</span></Link>
                <ul className={`mini-cart-drop-down ha-dropdown ${isCartActive ? 'active': 'inActive'}`}>
                        {
                            basket.map((prod) => (
                            <li className="mb-30">
                                <div className="cart-img">
                                    <a href="/"><img alt="" src={prod?.img2} /></a>
                                </div>
                                <div className="cart-info">
                                        <h4><a href="/">{prod.name} </a></h4>
                                        <span> <span>{`${1} x` }</span>{`£ ${prod.price}`}</span>
                                </div>
                                <div className="del-icon">
                                    <i className="fa fa-times-circle" />
                                </div>
                            </li>
                                ))
                        }

                    <li>
                    <div className="subtotal-text">Sub-total: </div>
                    <div className="subtotal-price">{`£ ${getSubTotal(basket).toFixed(2)}`}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Eco Tax (-2.00): </div>
                    <div className="subtotal-price">£1.51</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Vat (20%): </div>
                    <div className="subtotal-price">£9.79</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Total: </div>
                    <div className="subtotal-price"><span>£60.24</span></div>
                    </li>
                    <li className="mt-30">
                    <Link className="cart-button" to="/cart">view cart</Link>
                    </li>
                    <li>
                    <Link className="cart-button" to={user ? "/checkout": "/login"}>checkout</Link>
                    </li>
                </ul>
                </li>
                <li className="compare"> 
                    <Link onClick={AccBtn} className="ha-toggle" to="#"><span className="lnr lnr-user" /></Link>
                    {
                        user ?
                    <ul className={`box-dropdown ha-dropdown ${isAccActive ? "active" : "inactive"}`}>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/">Log out</Link></li>
                    </ul>
                    :
                    <ul className={`box-dropdown ha-dropdown ${isAccActive ? "active" : "inactive"}`}>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                    
                    }
                </li>
                
            </ul>
            </div>
        </div>
    )
}
