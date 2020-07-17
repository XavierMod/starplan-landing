import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import landingInfo from '../data/landingInfo.json'
import {Helmet} from 'react-helmet'

const contact = () => {
    return (
        <>
        <Helmet>
            <meta 
                name='viewport' 
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
            />
        </Helmet>
        <Layout data={landingInfo}>
            <ContactForm />
        </Layout>
        </>
    )
}


export default contact
