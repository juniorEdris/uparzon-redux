import React,{useEffect} from 'react'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import ContactBreadCrumbs from './pageComponents/ContactBreadcrumbs'
import ContactDetails from './pageComponents/ContactDetails'
import ContactForm from './pageComponents/ContactForm'

export default function Contact() {
    useEffect(() => {
        // get on top of the page after page loads
        (window).scrollTo(0,0)
    }, [])
    return (
        <div>
            <ContactBreadCrumbs/>
            <ContactDetails/>
            <ContactForm/>
            <ScrollBar/>
        </div>
    )
}
