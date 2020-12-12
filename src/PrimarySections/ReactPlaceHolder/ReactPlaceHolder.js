import React from 'react'
import ContentLoader from 'react-content-loader'
import { RectShape, TextBlock } from 'react-placeholder/lib/placeholders'

import './PlaceHolder.css'

export const Loader = () => {
    return (
        <div className='d-flex overflow-hidden '>
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

export const ProductLoader=()=>{
    return(
        <div className="d-flex p-2 overflow-auto">
        <ContentLoader className='' style={{height:365,width:180,borderRadius:'10px',border:'1px solid #ddd',marginRight:'10px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="10" y="180" rx="4" ry="4" width="40%" height="22" />
            <br/>
            <rect x="10" y="240" rx="4" ry="4" width="90%" height="36" />
            <br/>
            <rect x="10" y="300" rx="4" ry="4" width="90%" height="36" />
        </ContentLoader>
        <ContentLoader className='' style={{height:365,width:180,borderRadius:'10px',border:'1px solid #ddd',marginRight:'10px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="10" y="180" rx="4" ry="4" width="40%" height="22" />
            <br/>
            <rect x="10" y="240" rx="4" ry="4" width="90%" height="36" />
            <br/>
            <rect x="10" y="300" rx="4" ry="4" width="90%" height="36" />
        </ContentLoader>
        <ContentLoader className='' style={{height:365,width:180,borderRadius:'10px',border:'1px solid #ddd',marginRight:'10px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="10" y="180" rx="4" ry="4" width="40%" height="22" />
            <br/>
            <rect x="10" y="240" rx="4" ry="4" width="90%" height="36" />
            <br/>
            <rect x="10" y="300" rx="4" ry="4" width="90%" height="36" />
        </ContentLoader>
        <ContentLoader className='' style={{height:365,width:180,borderRadius:'10px',border:'1px solid #ddd',marginRight:'10px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="10" y="180" rx="4" ry="4" width="40%" height="22" />
            <br/>
            <rect x="10" y="240" rx="4" ry="4" width="90%" height="36" />
            <br/>
            <rect x="10" y="300" rx="4" ry="4" width="90%" height="36" />
        </ContentLoader>
        <ContentLoader className='' style={{height:365,width:180,borderRadius:'10px',border:'1px solid #ddd',marginRight:'10px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="10" y="180" rx="4" ry="4" width="40%" height="22" />
            <br/>
            <rect x="10" y="240" rx="4" ry="4" width="90%" height="36" />
            <br/>
            <rect x="10" y="300" rx="4" ry="4" width="90%" height="36" />
        </ContentLoader>
        <ContentLoader className='' style={{height:365,width:180,borderRadius:'10px',border:'1px solid #ddd',marginRight:'10px',}}>
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
            <br/>
            <rect x="10" y="180" rx="4" ry="4" width="40%" height="22" />
            <br/>
            <rect x="10" y="240" rx="4" ry="4" width="90%" height="36" />
            <br/>
            <rect x="10" y="300" rx="4" ry="4" width="90%" height="36" />
        </ContentLoader>
        </div>
    )
}
export const StoreLoader=()=>{
    return(
        <div className="d-flex p-2 overflow-auto">
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
            <ContentLoader style={{height:247,width:175,borderRadius:'10px',border:'1px solid #ddd',marginRight:'20px',}}>
                <rect x="0" y="0" rx="5" ry="5" width="100%" height="170" />
                <br/>
                <rect x="35" y="190" rx="4" ry="4" width="60%" height="25" />
            </ContentLoader>
        </div>
    )
}