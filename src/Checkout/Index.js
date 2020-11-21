import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CheckoutBody from './pageComponents/CheckoutBody'

export default function Checkout() {
    return (
        <div>
            <Breadcrumb pageName={'Checkout'}/>
            <CheckoutBody/>
            <ScrollBar/>
        </div>
    )
}
