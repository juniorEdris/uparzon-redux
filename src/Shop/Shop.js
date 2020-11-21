import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import ShopWrapper from './pageComponents/ShopWrapper'

export default function Shop() {
    return (
        <div>
            <Breadcrumb pageName={'Shop'}/>
            <ShopWrapper/>
            <ScrollBar/>
        </div>
    )
}
