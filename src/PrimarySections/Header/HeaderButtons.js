import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getSubTotal } from '../../Utility/Reducer'
import { useStateValue } from '../../Utility/StateProvider'

export default function HeaderButtons() {


    // Basket counting functionality
    const[{basket,wishList,user}] = useStateValue()
    //mycart menu dropdown
    const [isCartActive, setCartActive] = useState(false)
    const showCart = (e)=>{
        e.preventDefault()
        setCartActive(!isCartActive)
    }
    return (
<div className="col-lg-4 col-md-8 col-12 col-sm-8 order-lg-last">
    <div className="mini-cart-option">
    <ul>
        <li className="compare">
        {
            //turnery option
            user ? 
            <Link className="ha-toggle" to={`/compare`}><span className="lnr lnr-sync" />Product compare</Link>
            :
            <Link className="ha-toggle" to="/login"><span className="lnr lnr-user" />user</Link>
        }
        </li>
        
        <li className="wishlist">
        <Link className="ha-toggle" to='/wishlist'><span className="lnr lnr-heart" /><span className="count">{ wishList.length || 0 }</span>wishlist</Link>
        </li>
        <li className="my-cart">
        <Link onClick={basket.length > 0 && showCart} className="ha-toggle" to="#"><span className="lnr lnr-cart" /><span className="count">{ basket.length || 0 }</span>my cart</Link>
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
            <Link className="cart-button" to="/checkout">checkout</Link>
            </li>
        </ul>
        </li>
        
    </ul>
    </div>
</div>
    )
}
