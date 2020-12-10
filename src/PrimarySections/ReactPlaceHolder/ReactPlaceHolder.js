import React from 'react'
import ContentLoader from 'react-content-loader'
import { RectShape, TextBlock } from 'react-placeholder/lib/placeholders'

import './PlaceHolder.css'

export const ProductLoader = () => {
    return (
        <div className='d-flex flex-wrap'>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        <div className='product-loader'>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: "100%", height: 185 }} />
            <br />
            <TextBlock showLoadingAnimation={true} rows={3} color="#E0E0E0" />
            <br/>
            <RectShape showLoadingAnimation={true} color="#E0E0E0" style={{ width: 170, height: 30,margin:10,borderRadius:10 }} />
        </div>
        </div>
     )
}

export const Loader=()=>{
    return(
        <div className="d-flex ">
        <ContentLoader className='border border-primary' style={{height:365,width:176,borderRadius:'10px',border:'1px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="20" y="174" rx="4" ry="4" width="90%" height="9" />
            <br/>
            <rect x="20" y="188" rx="4" ry="4" width="90%" height="17" />
            <br/>
            <rect x="20" y="210" rx="4" ry="4" width="90%" height="12" />
        </ContentLoader>
        </div>
    )
}