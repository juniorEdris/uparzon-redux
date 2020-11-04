import React, { useEffect } from 'react'
import $ from 'jquery'

export default function ScrollBar() {
    useEffect(() => {
        const scrollTop = document.querySelector('.scroll-top');
        $(scrollTop).on('click',function (event){
	        $('html').animate({
	            scrollTop:0
	        },1000);
		});
    }, [])
    return (
        <div>
            {/* /Scroll to Top starts */}
                <div className="scroll-top not-visible">
                    <i className="fa fa-angle-up"/>
                </div>
            {/* /End Scroll to Top */}
        </div>
    )
}
