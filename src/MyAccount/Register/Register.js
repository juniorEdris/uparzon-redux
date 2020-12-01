import React from 'react'
import Body from './pageComponents/RegisterBody'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import  Breadcrumb  from '../../PrimarySections/Breadcrumbs/Breadcrumb'

export default function Register() {
    return (
        <div>
            <Breadcrumb pageName={'Register'} route={'/home'} parent={'Home'}/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
