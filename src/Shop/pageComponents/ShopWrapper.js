/* eslint-disable no-unused-vars */
import React,{ useEffect } from 'react'
import 'jquery-nice-select/css/nice-select.css'
import 'jquery-nice-select/js/jquery.nice-select.min'
import 'jquery-nice-select/js/jquery'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import './ShopWrapper.css'
import { useState } from 'react'
import { Electronics,Entertainments,MobileProducts, Truncate } from '../../Data'
import { useStateValue } from '../../Utility/StateProvider'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import Sidebar from './ShopSidebar'
import Product from '../../Home/pageComponents/Subfolder/Product'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import CartModal from '../../ProductCart/CartModal/CartModal'


export default function ShopWrapper() {

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

    const [state] = useStateValue()
    const [Electproducts] = useState(Electronics)
        
    return (
        <div>
            
            <div className="main-wrapper pt-10">
                <div className="container-fluid">
                <div className="shop-baner-img mb-70">
                    <Link to='/'><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1rZbOp3gP7K4jSZFqXXamhVXa.jpg_1200x1200Q100.jpg_.webp" alt="" /></Link>
                </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                <Sidebar/>
                <div className="col-lg-9 order-first order-lg-last">
                    <div className="product-shop-main-wrapper mb-50">
                    <div className="shop-top-bar mb-30">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="top-bar-left">
                            <div className="product-view-mode">
                                <Link to='/' data-target="column_3"><span>3-col</span></Link>
                                <Link className="active" to="/" data-target="grid"><span>4-col</span></Link>
                                <Link to='/' data-target="list"><span>list</span></Link>
                            </div>
                            <div className="product-page">
                                <p>Showing 1 to 9 of 9 (1 Pages)</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-bar-right">
                            <div className="per-page">
                                <p>Show : </p>
                        <FormControl className=''>
                            <Select 
                            variant="outlined"
                            id="grouped-select"
                            >
                                <MenuItem value='trending'>10</MenuItem>
                                <MenuItem value="sales">20</MenuItem>
                                <MenuItem value="rating">30</MenuItem>
                                <MenuItem value="date">40</MenuItem>
                                <MenuItem value="price-asc">50</MenuItem>
                            </Select>
                        </FormControl>
                        
                            </div>
                            <div className="product-short">
                                <p>Sort By : </p>
                        <FormControl className=''>
                            <Select 
                            variant="outlined"
                            id="grouped-select"
                            >
                                <MenuItem value='trending'>Relevance</MenuItem>
                                <MenuItem value="sales">Name (A - Z)</MenuItem>
                                <MenuItem value="rating">Name (Z - A)</MenuItem>
                                <MenuItem value="date">Price (Low &gt; High)</MenuItem>
                                <MenuItem value="price-asc">Rating (Lowest)</MenuItem>
                                <MenuItem value="price-dsc">Model (A - Z)</MenuItem>
                                <MenuItem value="price-bsc">Model (Z - A)</MenuItem>
                            </Select>
                        </FormControl>                                
                            </div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="shop-product-wrap grid row">
                        {Electproducts.map(data=>(
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        {/* grid view starts here */}
                        <Product isGrid={true} key={data.id} {...data} />
                        {/* List view starts here */}
                        <Product key={data.id} {...data} isList={true}/>
                        
                        </div>
                        ))}
                        
                    </div>
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
                    </div>
                </div>
                </div>
            </div>
            </div>
            <ModalSection product={state.quickView}/>
        </div>
    )
}
