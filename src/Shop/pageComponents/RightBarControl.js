import React from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'

export default function RightBarControl({sort,ProductSort,limit,ProductLimit}) {
    return (
        <div className="top-bar-right">
        <div className="per-page">
            <p>Show : </p>
    <FormControl className=''>
        <Select 
        variant="outlined"
        id="grouped-select"
        value={limit}
        onChange={ProductLimit}
        >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
        </Select>
    </FormControl>
    
        </div>
        <div className="product-short">
            <p>Sort By : </p>
    <FormControl className=''>
        <Select 
        variant="outlined"
        id="grouped-select"
        value={sort}
        onChange={ProductSort}
        >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value="lowestPrice">Price (Low &gt; High)</MenuItem>
            <MenuItem value="highestPrice">Price (High &gt; Low)</MenuItem>
        </Select>
    </FormControl>                                
        </div> 
        </div>
    )
}
