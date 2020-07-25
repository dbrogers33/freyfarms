import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/hero"
import P from "../components/typography/p"
import { Link } from "gatsby";

import SideBySide from '../components/side-by-side-map'

export default ({ data }) => {

  return (
    <Layout>
      <SEO
        title={'Sarah\'s Homegrown near ' + data.airtable.data.city + ', ' + data.airtable.data.state + ' | Frey Farms'}
        description="Taste the refreshing flavors of Sarah's Homegrown aqua frescas, teas, and lemonade. Made with real fresh ingredients that come straight from our farms."
      />
      <Hero headline={"Frey Farms Products in " + data.airtable.data.City + ", " + data.airtable.data.State} heroImage={data.hero.childImageSharp.fluid} />
      <SideBySide
        headerThree="Get Farm Fresh at..."
        headerTwo={data.airtable.data.Store_Name + " in " + data.airtable.data.City + ", " + data.airtable.data.State}
        street={data.airtable.data.Street_Address}
        city={data.airtable.data.City + ", " + data.airtable.data.State + " " + data.airtable.data.Zip}
        phone={data.airtable.data.Phone}
        src={data.family.childImageSharp.fluid}
        alt="Sarah Frey sitting in a pumpkin field"
        center={"[" + data.airtable.data.Latidtude + ", " + data.airtable.data.Longitude + "]"}
      >
        <P>All Frey Farms <Link to="/products">products</Link> come fresh from the farm. You can find some of our items at {data.airtable.data.Store_Name} in {data.airtable.data.City}, {data.airtable.data.State}.</P>
      </SideBySide>
    </Layout>
  )
}

export const query = graphql`
query GetRecord($recordId: String!) {
  family: file(relativePath: { eq: "family.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  hero: file(relativePath: { eq: "hero-images/single-locations.png" }) { 
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  airtable(recordId: { eq: $recordId}) {
      data {
        Store_Name
        State
        City
        Zip
        Street_Address
        Phone
        Latidtude
        Longitude
      }
      recordId
    }
}`