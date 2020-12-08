import React from 'react'
import { Link } from 'react-router-dom'
import './vendorBanner.css'

export default function VendorBanner() {
    return (
        <div className="container-fluid">
        <div className="vendor-baner-img mb-30">
            <Link to='/'><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1rZbOp3gP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg_.webp" alt="" /></Link>
        </div>
    </div>
    )
}
