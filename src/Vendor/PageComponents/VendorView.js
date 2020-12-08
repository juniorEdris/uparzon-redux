import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default function VendorView() {
useEffect(() => {
    // product view mode change js
    $('.product-view-mode a').on('click', function(e){
        e.preventDefault();
        
        var shopProductWrap = $('.shop-product-wrap');
        var viewMode = $(this).data('target');
        
        $('.product-view-mode a').removeClass('active');
        $(this).addClass('active');
        shopProductWrap.removeClass('grid list column_3').addClass(viewMode);
    })
    
}, [])
    return (
        <div className="col-md-6">
            <div className="top-bar-left">
            <div className="product-view-mode">
                <Link className="active" to='#' data-target="column_3"><span>3-col</span></Link>
                <Link  to="#" data-target="grid"><span>4-col</span></Link>
                <Link to='#' data-target="list"><span>list</span></Link>
            </div>
            </div>
        </div>
    )
}
