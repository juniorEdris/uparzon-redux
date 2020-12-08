import React from 'react'
import './vendorSearch.css'

export default function VendorSearch() {
    return (
        <div className="container-fluid mb-20">
            <div className="vendor__search col-lg-12 col-md-12 col-12">
                <form action="method" className=' d-flex justify-content-end'>
                    <input type="text" className="vendor-search-field" placeholder="Search entire store here" />
                    <input type="button" className="vendor-search-btn " defaultValue="Search" />
                </form>
            </div>
        </div>
    )
}
