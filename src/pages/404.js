import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import landingInfo from '../data/landingInfo.json'

const NotFoundPage = () => (
  <Layout data={landingInfo}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
