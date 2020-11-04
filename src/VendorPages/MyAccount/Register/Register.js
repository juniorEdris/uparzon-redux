import React from 'react'
import BreadCrumbs from './pageComponents/RegisterBreadCrumbs'
import Body from './pageComponents/RegisterBody'
import ScrollBar from '../../../PrimarySections/ScrollBar'

export default function Register() {
    return (
        <div>
            <BreadCrumbs/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
