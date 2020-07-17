import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import landingInfo from '../data/landingInfo.json'

const contact = () => {
    return (
        <Layout data={landingInfo}>
            <ContactForm />
        </Layout>
    )
}


export default contact
