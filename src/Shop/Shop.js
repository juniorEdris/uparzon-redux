import React from 'react'
import ScrollBar from '../PrimarySections/ScrollBar'
import ShopBreadCrumbs from './pageComponents/ShopBreadCrumbs'
import ShopWrapper from './pageComponents/ShopWrapper'

export default function Shop() {
    return (
        <div>
            <ShopBreadCrumbs/>
            <ShopWrapper/>
            <ScrollBar/>
        </div>
    )
}
