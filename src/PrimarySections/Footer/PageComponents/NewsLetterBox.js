import React from 'react'

export default function NewsLetterBox() {
    return (
        <div className="newsletter-box">
            <form id="mc-form">
                <input type="email" id="mc-email" autoComplete="off" className="email-box" placeholder="enter your email" />
                <button className="newsletter-btn" type="submit" id="mc-submit">subscribe !</button>
            </form>
        </div>
    )
}
