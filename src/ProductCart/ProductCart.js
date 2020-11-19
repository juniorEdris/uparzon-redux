import React from 'react'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartBody from './pageComponents/CartBody'
import CartBreadCrumbs from './pageComponents/CartBreadCrumbs'

export default function ProductCart() {
    return (
        <div>
            <CartBreadCrumbs/>
            <CartBody/>
            <ScrollBar/>
        </div>
    )
}
