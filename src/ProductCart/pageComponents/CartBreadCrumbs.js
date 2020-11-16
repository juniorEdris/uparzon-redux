import React from 'react'
import { Link } from 'react-router-dom'

export default function CartBreadCrumbs() {
    return (
        <div>
            {/* breadcrumb area start */}
            <div className="breadcrumb-area">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-wrap">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* breadcrumb area end */}

        </div>
    )
}
