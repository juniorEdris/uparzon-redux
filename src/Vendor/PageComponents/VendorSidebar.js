/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './VendorSidebar.css'

/*

    SOME OF THE CSS CONNECTED FROM SHOP SIDEBAR COMPONENT*** 

*/



export default function VendorSidebar() {

    return (
        <div className="col-lg-3">
                    <div className="vendor-sidebar-inner mb-30">
                        <div className="vendor-inner-title mb-25">
                            <h3>Browse More</h3>
                        </div>
                            <ul class="vendor-submenu">
                                <li><Link to="#">CD Players & Turntables <span class="lnr lnr-chevron-right"/></Link></li>
                                <li><Link to="#">Home Theater Systems <span class="lnr lnr-chevron-right"/></Link></li>
                                <li><Link to="#">Receivers & Amplifiers <span class="lnr lnr-chevron-right"/></Link></li>
                                <li><Link to="#">Speakers <span class="lnr lnr-chevron-right"/></Link></li>
                                <li><Link to="#">Wireless  Audio <span class="lnr lnr-chevron-right"/></Link></li>
                                <li><Link to="#">Streaming Media Players <span class="lnr lnr-chevron-right"/></Link></li>
                                <li><Link to="#">OLED TVs <span class="lnr lnr-chevron-right"/></Link></li>
                                <li><Link to="#">LED & LCD TVs <span class="lnr lnr-chevron-right"/></Link></li>
                            </ul>
                    </div>
                </div>
    )
}
