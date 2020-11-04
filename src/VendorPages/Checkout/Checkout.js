import React from 'react'
import ScrollBar from '../../PrimarySections/ScrollBar'
import CheckoutBody from './pageComponents/CheckoutBody'
import CheckoutBreadCrumbs from './pageComponents/CheckoutBreadCrumbs'

export default function Checkout() {
    return (
        <div>
            <CheckoutBreadCrumbs/>
            <CheckoutBody/>
            <ScrollBar/>
        </div>
    )
}
