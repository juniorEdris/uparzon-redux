import React, { useState } from 'react'

export default function HeaderTop() {


        //header-top dropdown
        const [isAccActive, setIsAccActive] = useState(false);    
        const [isLngActive, setIsLngActive] = useState(false);    
        const [isCurrActive, setIsCurrActive] = useState(false);    
        const AccBtn = (e) =>{
            e.preventDefault();
            setIsAccActive(!isAccActive);
            setIsLngActive(false);
            setIsCurrActive(false)
        }
        const LngBtn = (e) =>{
            e.preventDefault();
            setIsLngActive(!isLngActive);
            setIsAccActive(false);
            setIsCurrActive(false)
        }
        const CurrBtn = (e) =>{
            e.preventDefault();
            setIsCurrActive(!isCurrActive);
            setIsAccActive(false);
            setIsLngActive(false);
        }
    return (
        <div className="header-top black-bg">
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-8 col-12">
                <div className="header-top-left">
                <ul>
                    <li><span>Email: </span>support@sinrato.com</li>
                    <li>Free Shipping for all Order of $99</li>
                </ul>
                </div>
            </div>
            <div className="col-lg-4 col-12">
                <div className="box box-right">
                <ul>
                    <li className="settings">
                    <a onClick={AccBtn} className="ha-toggle" href="/">My Account<span className="lnr lnr-chevron-down" /></a>
                    <ul className={`box-dropdown ha-dropdown ${isAccActive ? "active" : "inactive"}`}>
                        <li><a href="/">Register</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                    </li>
                    <li className="settings">
                    <a onClick={LngBtn} className="ha-toggle" href="/">Language<span className="lnr lnr-chevron-down" /></a>
                    <ul className={`box-dropdown ha-dropdown ${isLngActive ? "active" : "inactive"}`}>
                        <li><a href="/"><img src="assets/img/icon/en.png" alt="" /> English</a></li>
                        <li><a href="/"><img src="assets/img/icon/ge.png" alt="" /> Germany</a></li>
                    </ul>
                    </li>
                    <li className="currency">
                    <a onClick={CurrBtn} className="ha-toggle" href="/">Currency<span className="lnr lnr-chevron-down" /></a>
                    <ul className={`box-dropdown ha-dropdown ${isCurrActive ? "active" : "inactive"}`}>
                        <li><a href="/">€ Euro</a></li>
                        <li><a href="/">$ US Doller</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
