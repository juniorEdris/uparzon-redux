import React from 'react'
import BreadCrumbs from './pageComponents/LoginBreadCrumbs'
import Body from './pageComponents/LoginBody'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'

export default function Login() {
    return (
        <div>
            <BreadCrumbs/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
