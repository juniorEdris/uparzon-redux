import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CartModal from '../ProductCart/CartModal/CartModal'
import { useStateValue } from '../Utility/StateProvider'
import ShopWrapper from './pageComponents/ShopWrapper'

export default function Shop() {
    const [{newCartProd}] =useStateValue()
    return (
        <div>
            <Breadcrumb pageName={'Shop'} route={'/'} parent={'Home'}/>
            <ShopWrapper/>
            <ScrollBar/>
            <CartModal product={newCartProd}/>
        </div>
    )
}
