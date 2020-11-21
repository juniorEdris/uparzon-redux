import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import CompareBody from './pageComponents/CompareBody'

export default function Compare() {
    return (
        <div>
            <Breadcrumb pageName={'Compare'}/>
            <CompareBody/>
            <ScrollBar/>
        </div>
    )
}
