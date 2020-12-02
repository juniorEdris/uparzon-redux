import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Utility/StateProvider';
import $ from 'jquery'
import './CartForm.css'

export default function CartForm() {
    const [{basket}] = useStateValue();
    useEffect(() => {
        //Product Quantity 
		$('.product-qty').append('<span class="dec qtybtn"><i class="fa fa-minus"></i></span><span class="inc qtybtn"><i class="fa fa-plus"></i></span>');
		$('.qtybtn').on('click', function() {
		    var $button = $(this);
            var oldValue = $button.parent().find('input').val();
            let newVal;
		    if ($button.hasClass('inc')) {
		         newVal = parseFloat(oldValue) + 1;
		    } else {
		        // Don't allow decrementing below zero
		        if (oldValue > 0) {
		             newVal = parseFloat(oldValue) - 1;
		        } else {
		            newVal = 0;
		        }
		    }
		    $button.parent().find('input').val(newVal);
		});

    }, [])

    return (
        <form action="#">
            <div className="table-responsive">
                {basket.length>0 ? <table className="table table-bordered">
                <thead>
                    <tr>
                    <td>Image</td>
                    <td>Product Name</td>
                    <td>Model</td>
                    <td>Quantity</td>
                    <td>Unit Price</td>
                    <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                {
                basket.map(prod=>(
                    <tr>
                        <td>
                            <Link to="product-details.html"><img src={prod.img1} alt={prod.name} title={prod.name} className="img-thumbnail" /></Link>
                        </td>
                        <td>
                            <Link to="product-details.html">{prod.name}</Link>
                            <span>Delivery Date: 2019-09-22</span>
                            <span>Color: Brown</span>
                            <span>Reward Points: 300</span>
                        </td>
                        <td>3</td>
                        <td>
                            <div className="input-group btn-block">
                            <div className="product-qty mr-3">
                                <input type="text" defaultValue={0} />
                            </div>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary"><i className="fa fa-refresh" /></button>
                                <button type="button" className="btn btn-danger pull-right"><i className="fa fa-times-circle" /></button>
                            </span>
                            </div>
                        </td>
                        <td>${prod.price}</td>
                        <td>$200.00</td>
                    </tr>
                ))
                
                }
                </tbody>
                </table> : <div className='choose_product'><Link to='/' className="btn">Choose Product</Link></div>}
            </div>
        </form>
    )
}
