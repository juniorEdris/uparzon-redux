import React,{useEffect} from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartBody from './pageComponents/CartBody'

export default function ProductCart() {
    useEffect(() => {
        // get on top of the page after page loads
        (window).scrollTo(0,0)
    }, [])
    return (
        <div>
            <Breadcrumb pageName={'Cart'} route={'/'} parent={'Home'}/>
            <CartBody/>
            <ScrollBar/>
        </div>
    )
}
