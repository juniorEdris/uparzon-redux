import React, { useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer'
import { useStateValue } from '../../Utility/StateProvider'
import './HeaderButton.css'

export default function HeaderButtons() {

    //Cart state false when clicked outside functionality
    const cartRef = useRef(null)
    const cartOutsideClick = (event)=>{
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setCartActive(false);
        }
    }
    //user state false when clicked outside functionality
    const userRef = useRef(null)
    const userOutsideClick = (event)=>{
        if (userRef.current && !userRef.current.contains(event.target)) {
            setIsAccActive(false);
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown',cartOutsideClick)
        document.addEventListener('mousedown',userOutsideClick)
        return()=>{
            document.removeEventListener('mousedown',()=>{})
        }
    },[])
    // Basket counting functionality
    const[{basket,wishList,user,}] = useStateValue()
    // console.log('count',count);
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

    // Total Amount (inc vat & eco) 
    const eco_tax = getSubTotal(basket) / 1.51
    const vat_amount = getSubTotal(basket) * 0.20 
    const get_total = getSubTotal(basket) + eco_tax + vat_amount

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
                <Link onClick={basket.length > 0 && showCart}   className="ha-toggle" to="#" ><span className="lnr lnr-cart" /><span className="count">{ basket.length || 0 }</span></Link>
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
                    <div className="subtotal-price">${getSubTotal(basket).toFixed(2)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Eco Tax (-2.00): </div>
                    <div className="subtotal-price">${eco_tax.toFixed(2)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Vat (20%): </div>
                    <div className="subtotal-price">${vat_amount.toFixed(2)}</div>
                    </li>
                    <li>
                    <div className="subtotal-text">Total: </div>
                    <div className="subtotal-price"><span>${get_total.toFixed(2)}</span></div>
                    </li>
                    <li className="mt-30">
                    <Link className="cart-button" to="/cart">view cart</Link>
                    </li>
                    <li>
                    <Link className="cart-button" to={!user ? "#": "/checkout"} data-target={!user && "#login_modal"} data-toggle={!user && "modal"}>checkout</Link>
                    </li>
                </ul>
                </li>
                <li className="compare"> 
                    <Link onClick={AccBtn} className="ha-toggle" to="#" ><span className="lnr lnr-user" /></Link>
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
