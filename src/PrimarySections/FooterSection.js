import React from 'react'
import FooterBottom from './Footer/FooterBottom'
import FooterTop from './Footer/FooterTop'
import NewsLetter from './Footer/NewsLetter'

export default function FooterSection() {
    return (
        <div>
            <NewsLetter/>
            <FooterTop/>
            <FooterBottom/>
        </div>
    )
}
