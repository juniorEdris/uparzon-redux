import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterBottom() {
    return (
<div class="footer-bottom">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-bottom-content">
                            <div class="footer-copyright">
                            <p>Copyright © 2019 <Link to="/">Uparzon</Link>. All Right Reserved</p>
                            </div>
                            <div class="footer-custom-link">
                                <Link to="#">Brands</Link>
                                <Link to="#">Specials</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
