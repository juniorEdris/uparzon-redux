/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Link } from 'react-router-dom'
import Slider from './SubFolder/ProductSlider'
import Details from './SubFolder/Details'

export default function ProductDetailsWrap() {


    return (
        <div className="product-details-main-wrapper pb-50">
  <div className="container-fluid">
    <div className="row">
        <Slider/>
        <Details/>
    </div>
  </div>
</div>

    )
}
