import React from 'react'
import ScrollBar from '../PrimarySections/ScrollBar'
import WishListBody from './pageComponents/WishListBody'
import WishListBreadCrumbs from './pageComponents/WishListBreadCrumbs'

export default function WishList() {
    return (
        <div>
            <WishListBreadCrumbs/>
            <WishListBody/>
            <ScrollBar/>
        </div>
    )
}
