import React from 'react'
import Body from './pageComponents/LoginBody'
import ScrollBar from '../../PrimarySections/ScrollBar/ScrollBar'
import  Breadcrumbs  from '../../PrimarySections/Breadcrumbs/Breadcrumb'


export default function Login() {
    return (
        <div>
            <Breadcrumbs pageName={'Login'} route={'/home'} parent={'Home'}/>
            <Body/>
            <ScrollBar/>
        </div>
    )
}
