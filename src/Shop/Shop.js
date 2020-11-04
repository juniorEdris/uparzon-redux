import React from 'react'
import ScrollBar from '../PrimarySections/ScrollBar'
import ShopBreadCrumbs from './pageComponents/ShopBreadCrumbs'
import ShopWrapper from './pageComponents/ShopWrapper'
import Modal from '../PrimarySections/Modal/ModalSection'

export default function Shop() {
    return (
        <div>
            <ShopBreadCrumbs/>
            <ShopWrapper/>
            <ScrollBar/>
            <Modal/>
        </div>
    )
}
