import React from 'react'
import ScrollBar from '../PrimarySections/ScrollBar/ScrollBar'
import ContactBreadCrumbs from './pageComponents/ContactBreadcrumbs'
import ContactDetails from './pageComponents/ContactDetails'
import ContactForm from './pageComponents/ContactForm'

export default function Contact() {
    
    return (
        <div>
            <ContactBreadCrumbs/>
            <ContactDetails/>
            <ContactForm/>
            <ScrollBar/>
        </div>
    )
}
