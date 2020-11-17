import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Slider from '@material-ui/core/Slider';
import $ from 'jquery'
import './ShopSidebar.css'




export default function Sidebar() {

    const [value, setValue] = useState([70, 500]);
    const handleChange = (event, newValue) =>{
        setValue(newValue)
    }
    // Active shop-sidebar-inner active state
    const [radioActive, setRadioActive] = useState(false);
    const SelectRadio = (e) =>{
        e.preventDefault()
        setRadioActive(!radioActive);
    }
    return (
        <div className="col-lg-3">
                    <div className="shop-sidebar-inner mb-30">
                    {/* filter-price-content start */}
                    <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Fillter by price</h3>
                        </div>
                        <div className="sidebar-content-box"> 
                        <div className="filter-price-content">
                            <form action="#" method="post">
                            {/* <div id="price-slider" className="price-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: '16.6667%', width: '79.1667%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '16.6667%'}} /><span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} style={{left: '95.8333%'}} /></div> */}
                            <Slider
                            value={value}
                            onChange={handleChange}
                            max={500}
                            />
                            <div className="filter-price-wapper">
                                <div className="filter-price-cont">
                                <div className="input-type">
                                    <input id="min-price" readOnly type="text" value={`$${value[0]}`} />
                                    
                                </div>
                                <div className="input-type">
                                    <input id="max-price" readOnly type="text" value={`$${value[1]}`} />
                                </div>
                                </div>
                            </div>
                            </form>  
                        </div> 
                        </div>
                    </div>
                    {/* filte price end */}
                    {/* categories filter start */}
                    <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Categories</h3>
                        </div>
                        <div className="sidebar-content-box">
                        <div className="filter-attribute-container">
                            <ul>
                            <li><a className="active" href="/">Categories 1 (05)</a></li>
                            <li><a href="/">Categories 2 (03)</a></li>
                            <li><a href="/">Categories 3 (10)</a></li>
                            <li><a href="/">Categories 4 (02)</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* categories filter end */}
                    {/* categories filter start */}
                    <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Manufacturer</h3>
                        </div>
                        <div className="sidebar-content-box">
                        <div className="filter-attribute-container">
                            <ul>
                            <li><a onClick={SelectRadio} className={`${radioActive ? 'active':''}`} href="/">Christian Dior (2)</a></li>
                            <li><a onClick={SelectRadio} className={`${radioActive ? 'active':''}`} href="/">ferragamo (7)</a></li>
                            <li><a href="/">hermes (7)</a></li>
                            <li><a href="/">louis vuitton (6)</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* categories filter end */}
                    {/* categories filter start */}
                    <div className="single-sidebar mb-45">
                        <div className="sidebar-inner-title mb-25">
                        <h3>Select by color</h3>
                        </div>
                        <div className="sidebar-content-box">
                        <div className="filter-attribute-container">
                            <ul>
                            <li><a onClick={SelectRadio} className={`${radioActive ? 'active':''}`} href="/">Black (2)</a></li>
                            <li><a href="/">blue (7)</a></li>
                            <li><a href="/">brown (7)</a></li>
                            <li><a href="/">white (6)</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* sidebar promote picture start */}
                    <div className="single-sidebar mb-30">
                    <div className="sidebar-thumb">
                        <Link to='/'><img src="assets/img/banner/img-static-sidebar.jpg" alt="" /></Link>
                    </div>
                    </div>
                    {/* sidebar promote picture end */}
                </div>
    )
}
