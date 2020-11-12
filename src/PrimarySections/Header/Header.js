import React, { useState } from 'react'
import "mburger-css/dist/mburger.css"
import "mburger-css/dist/mburger"
import './header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../Utility/StateProvider'


function Header () {

    // Basket counting functionality
    const[{basket,wishList}] = useStateValue()
    console.log(basket);
    console.log('My Array',wishList);
    //catagories menu dropdown
    const[isBrowsing,setBrowsing] = useState(false)
    const browseCatalog = (e)=>{
        e.preventDefault();
        setBrowsing(!isBrowsing)
        
    }
    //catagories menu more catagories
    const [menuShow, setMenuShow] = useState(false)
    //Conditional more-btn name
    const btnName =  menuShow ? 'Hide Categories' : 'More Categories';
    const moreMenu = (e) =>{
        e.preventDefault();
        setMenuShow(!menuShow)
    }

    //mycart menu dropdown
    const [isCartActive, setCartActive] = useState(false)
    const showCart = (e)=>{
        e.preventDefault()
        setCartActive(!isCartActive)
    }
    //main menu set
    const [mainMenu, setMainMenu] = useState(false)
    console.log("main-menu",mainMenu);
    

        return (
<header className="header-pos" id='top'>
                    
                    <div className="header-middle">
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-4 col-12">
                            <div className="logo">
                            <Link to="/"><img src="https://uparzon.com.bd/assets/img/logo/logo-sinrato.png" alt="brand-logo" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 order-sm-last">
                            <div className="header-middle-inner">
                            <form action="method">
                                <div className="top-cat hm1">
                                <div className={`search-form nice-select `}>
                                    <select >
                                    <optgroup label="Electronics">
                                        <option value="volvo">Laptop</option>
                                        <option value="saab">watch</option>
                                        <option value="saab">air cooler</option>
                                        <option value="saab">audio</option>
                                        <option value="saab">speakers</option>
                                        <option value="saab">amplifires</option>
                                    </optgroup>
                                    <optgroup label="Fashion">
                                        <option value="mercedes">Womens tops</option>
                                        <option value="audi">Jeans</option>
                                        <option value="audi">Shirt</option>
                                        <option value="audi">Pant</option>
                                        <option value="audi">Watch</option>
                                        <option value="audi">Handbag</option>
                                    </optgroup>
                                    </select>
                                </div>
                                </div>
                                <input type="text" className="top-cat-field" placeholder="Search entire store here" />
                                <input type="button" className="top-search-btn" defaultValue="Search" />
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-12 col-sm-8 order-lg-last">
                            <div className="mini-cart-option">
                            <ul>
                                <li className="compare">
                                <a className="ha-toggle" href="/compare"><span className="lnr lnr-sync" />Product compare</a>
                                </li>
                                <li className="wishlist">
                                <a className="ha-toggle" href="/wishlist"><span className="lnr lnr-heart" /><span className="count">{ wishList.length || 0 }</span>wishlist</a>
                                </li>
                                <li className="my-cart">
                                <a onClick={showCart} className="ha-toggle" href="/"><span className="lnr lnr-cart" /><span className="count">{ basket.length || 0 }</span>my cart</a>
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
                                    <div className="subtotal-price">£ 120</div>
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
                                    <a className="cart-button" href="/cart">view cart</a>
                                    </li>
                                    <li>
                                    <a className="cart-button" href="/checkout">checkout</a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* header-middle ends here */}
                    <div className="header-top-menu theme-bg sticker">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="top-main-menu">
                            <div className="categories-menu-bar">
                                <div onClick={browseCatalog} className={`categories-menu-btn`}  >{/*ha-toggle removed*/}
                                <div className="left">
                                    <i className="lnr lnr-text-align-left" />
                                    <span>Browse categories</span>
                                </div>
                                <div className="right">
                                    <i className="lnr lnr-chevron-down" />
                                </div>
                                </div>
                                <nav className={`categorie-menus ha-dropdown ${isBrowsing ? 'active':'inActive'}`}>
                                <ul id="menu2">
                                    <li><a href="/">Audio &amp; Home Theater <span className="lnr lnr-chevron-right" /></a>
                                    <ul className="cat-submenu">
                                        <li><a href="/">Home Audio <span className="lnr lnr-chevron-right" /></a>
                                        <ul className="cat-submenu">
                                            <li><a href="/">CD Players &amp; Turntables</a></li>
                                            <li><a href="/">Home Theater Systems</a></li>
                                            <li><a href="/">Receivers &amp; Amplifiers</a></li>
                                            <li><a href="/">Speakers</a></li>
                                            <li><a href="/">Wireless  Audio</a></li>
                                        </ul>
                                        </li>
                                        <li><a href="/">Blu-ray Disc Players</a></li>
                                        <li><a href="/">Curved TVs<span className="lnr lnr-chevron-right" /></a>
                                        <ul className="cat-submenu">
                                            <li><a href="/">CD Players &amp; Turntables</a></li>
                                            <li><a href="/">Home Theater Systems</a></li>
                                            <li><a href="/">Receivers &amp; Amplifiers</a></li>
                                            <li><a href="/">Speakers</a></li>
                                            <li><a href="/">Wireless  Audio</a></li>
                                        </ul>
                                        </li>
                                        <li><a href="/">Streaming Media Players</a></li>
                                        <li><a href="/">OLED TVs</a></li>
                                        <li><a href="/">LED &amp; LCD TVs</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="/">Video &amp; Home Theater<span className="lnr lnr-chevron-right" /></a>
                                    <ul className="cat-submenu category-mega">
                                        <li className="cat-mega-title"><Link to="#">Security Cameras</Link>
                                        <ul>
                                            <li><a href="/">DSLR Cameras</a></li>
                                            <li><a href="/">Lense Camera</a></li>
                                            <li><a href="/">Digital Cameras</a></li>
                                            <li><a href="/">Mirrorless Cameras</a></li>
                                            <li><a href="/">Point</a></li>
                                        </ul>
                                        </li>
                                        <li className="cat-mega-title"><Link to="#">Mirrorless Cameras</Link>
                                        <ul>
                                            <li><a href="/">DSLR Cameras</a></li>
                                            <li><a href="/">Lense Camera</a></li>
                                            <li><a href="/">Digital Cameras</a></li>
                                            <li><a href="/">Mirrorless Cameras</a></li>
                                            <li><a href="/">Point</a></li>
                                        </ul>
                                        </li>
                                        <li className="cat-mega-title"><Link to="#">Digital Cameras</Link>
                                        <ul>
                                            <li><a href="/">DSLR Cameras</a></li>
                                            <li><a href="/">Lense Camera</a></li>
                                            <li><a href="/">Digital Cameras</a></li>
                                            <li><a href="/">Mirrorless Cameras</a></li>
                                            <li><a href="/">Point</a></li>
                                        </ul>
                                        </li>
                                    </ul>
                                    </li>
                                    <li><a href="/">Cellphones &amp; Accessories<span className="lnr lnr-chevron-right" /></a>
                                    <ul className="cat-submenu">
                                        <li><a href="/">CD Players &amp; Turntables</a></li>
                                        <li><a href="/">Home Theater Systems</a></li>
                                        <li><a href="/">Receivers &amp; Amplifiers</a></li>
                                        <li><a href="/">Speakers</a></li>
                                        <li><a href="/">Wireless  Audio</a></li>
                                    </ul>
                                    </li>
                                    <li><a href="/">Top Item</a></li>
                                    <li><a href="/">Video Games Consoles</a></li>
                                    <li><a href="/">Business &amp; Office</a></li>
                                    <li><a href="/">Headphones &amp; Accessories</a></li>
                                    <li><a href="/">Quadcopters &amp; Accessories</a></li>
                                    <li><a href="/">Network Devices</a></li>
                                    <li className={`category-item-parent hidden ${menuShow ? '':'inActive'} `}><a href="/">Smart Watches</a></li>
                                    <li className="category-item-parent"><a className={`more-btn ${menuShow ? 'minus':''}`} href="/"  onClick={moreMenu}>{btnName}</a></li>
                                </ul>
                                </nav>
                                    </div>
                                    
                            <div className="ham-burger d-lg-none">
                                <a class="mburger " href="/" onClick={(e)=> {e.preventDefault(); setMainMenu(!mainMenu)}}>
                                    <b></b>
                                    <b></b>
                                    <b></b>
                                </a>           
                            </div>
                            <div className={`main-menu ${mainMenu ? 'active':''}`}>
                                <nav id="mobile-menu">
                                <ul>
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/shop">SHOP</Link></li>
                                    <li><Link to="/blog" >BLOG</Link></li>
                                    <li><Link to="/contact">CONTACT US</Link></li>
                                </ul>
                                </nav>
                            </div> {/* </div> end main menu */}
                            <div className="header-call-action">
                                <p><span className="lnr lnr-phone" />Hotline : <strong>1-001-234-5678</strong></p>
                            </div>
                            </div>
                        </div>
                        <div className="col-12 d-block d-lg-none"><div className="mobile-menu" /></div>
                        </div>
                    </div>
                    </div>
                </header>
        )
    
    
}
export default Header
