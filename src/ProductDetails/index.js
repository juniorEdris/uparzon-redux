import React from 'react'
import ScrollBar from '../PrimarySections/ScrollBar'
import Breadcrumbs from './PageComponents/DetailsBreadcrumbs'
import Details from './PageComponents/ProductDetailsWrap'
import Review from './PageComponents/ProductReviews'
import Suggestions from './PageComponents/ProductSuggestion'
export default function index() {
    return (
        <div>
            <Breadcrumbs/>
            <Details/>
            <Review/>
            <ScrollBar/>
            <Suggestions/>
        </div>
        )
}
