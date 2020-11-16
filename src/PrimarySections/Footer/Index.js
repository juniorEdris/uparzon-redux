import React from 'react'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'
import NewsLetter from './NewsLetter'

export default function Footer() {
    return (
        <div>
            <NewsLetter/>
            <FooterTop/>
            <FooterBottom/>
        </div>
    )
}
