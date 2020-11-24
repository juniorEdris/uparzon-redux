import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartBody from './pageComponents/CartBody'

export default function ProductCart() {
    return (
        <div>
            <Breadcrumb pageName={'Cart'} route={'/'} parent={'Home'}/>
            <CartBody/>
            <ScrollBar/>
        </div>
    )
}
