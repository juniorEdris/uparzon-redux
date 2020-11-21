import React, { useEffect } from 'react'
import $ from 'jquery'

export default function ScrollBar() {
    useEffect(() => {
        // get on top of the page after page loads
        (window).scrollTo(0,0)
        // get on top of the page after clicking scroll button
        const scrollTop = document.querySelector('.scroll-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
              scrollTop.classList.remove('not-visible')
            }else{
                scrollTop.classList.add('not-visible')
            }
        })
        $(scrollTop).on('click',function (event){
	        $('html').animate({
	            scrollTop:0
	        },1000);
        });
        
        return()=>{
            window.removeEventListener('scroll', () => {})
        }
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
