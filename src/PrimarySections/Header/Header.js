import React from 'react'
import "mburger-css/dist/mburger.css"
import "mburger-css/dist/mburger"
import './header.css'
import Logo from "./UparzonLogo"
import Search from './Search'
import HeaderButtons from './HeaderButtons'
import Navigation from './Navigation'


function Header () {

        return (
            <header className="header-pos" id='top'>
                    
                    <div className="header-middle">
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <Logo/>
                            <Search/>
                            <HeaderButtons/>
                        </div>
                    </div>
                    </div>
                    {/* header-middle ends here */}
                    <Navigation/>
                </header>
        )
    
    
}
export default Header
