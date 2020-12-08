import React from 'react'
import { Link } from 'react-router-dom'

export default function VendorPagination() {
    return (
        <div className="paginatoin-area style-2 pt-35 pb-20">
            <div className="row">
            <div className="col-sm-6">
                <div className="pagination-area">
                <p>Showing 1 to 9 of 9 (1 Pages)</p>
                </div>
            </div>
            <div className="col-sm-6">
                <ul className="pagination-box pagination-style-2">
                <li><a className="Previous" href="/">Previous</a>
                </li>
                <li className="active"><Link to='/'>1</Link></li>
                <li><Link to='/'>2</Link></li>
                <li><Link to='/'>3</Link></li>
                <li>
                    <a className="Next" href="/"> Next </a>
                </li>
                </ul>
            </div>
            </div>
        </div> 
    )
}
