import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import WishListBody from './pageComponents/WishListBody'

export default function WishList() {
    return (
        <div>
            <Breadcrumb pageName={'Wishlist'}/>
            <WishListBody/>
            <ScrollBar/>
        </div>
    )
}
