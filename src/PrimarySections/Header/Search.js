import React from 'react'

export default function Search() {
    return (
        <div className="col-lg-6 col-md-12 col-12 order-sm-last">
        <div className="header-middle-inner">
        <form action="method">
            <div className="top-cat hm1">
            <div className={`search-form nice-select `}>
                <select >
                <optgroup label="Electronics">
                    <option value="volvo">Laptop</option>
                    <option value="saab">watch</option>
                    <option value="saab">air cooler</option>
                    <option value="saab">audio</option>
                    <option value="saab">speakers</option>
                    <option value="saab">amplifires</option>
                </optgroup>
                <optgroup label="Fashion">
                    <option value="mercedes">Womens tops</option>
                    <option value="audi">Jeans</option>
                    <option value="audi">Shirt</option>
                    <option value="audi">Pant</option>
                    <option value="audi">Watch</option>
                    <option value="audi">Handbag</option>
                </optgroup>
                </select>
            </div>
            </div>
            <input type="text" className="top-cat-field" placeholder="Search entire store here" />
            <input type="button" className="top-search-btn" defaultValue="Search" />
        </form>
        </div>
    </div>
    )
}
