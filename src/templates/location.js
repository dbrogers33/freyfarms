import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/hero"

import SideBySide from '../components/side-by-side-map'

export default ({ data }) => {

  return (
    <Layout>
      <Hero headline={"Frey Farms Products in " + data.airtable.data.City + ", " + data.airtable.data.State } heroImage={data.hero.childImageSharp.fluid} />
      <SideBySide
        headerThree="Get Farm Fresh at..."
        headerTwo={data.airtable.data.Store_Name + " in " +  data.airtable.data.City + ", " + data.airtable.data.State}
        street={data.airtable.data.Street_Address}
        city={data.airtable.data.City + ", " + data.airtable.data.State + " " + data.airtable.data.Zip}
        phone={data.airtable.data.Phone}
        src={data.family.childImageSharp.fluid}
        alt="Sarah Frey sitting in a pumpkin field"
      />
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
  hero: file(relativePath: { eq: "hero-images/story-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
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
      }
      recordId
    }
}`