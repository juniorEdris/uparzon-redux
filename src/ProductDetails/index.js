import React from 'react'
import Breadcrumb from '../PrimarySections/Breadcrumbs/Breadcrumb'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'

import Details from './PageComponents/ProductDetailsWrap'
import Review from './PageComponents/ProductReviews'
import Suggestions from './PageComponents/ProductSuggestion'
export default function index() {
    return (
        <div>
            <Breadcrumb pageName={'Product details'}/>
            <Details/>
            <Review/>
            <ScrollBar/>
            <Suggestions/>
        </div>
        )
}
