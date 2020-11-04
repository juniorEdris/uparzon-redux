import React from 'react'
import ScrollBar from '../../PrimarySections/ScrollBar'
import CompareBody from './pageComponents/CompareBody'
import CompareBreadCrumbs from './pageComponents/CompareBreadCrumbs'

export default function Compare() {
    return (
        <div>
            <CompareBreadCrumbs/>
            <CompareBody/>
            <ScrollBar/>
        </div>
    )
}
