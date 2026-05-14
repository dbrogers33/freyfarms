import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

import Hero from "../components/hero"
import Container from "../components/container"

import H2 from "../components/typography/h2"
import P from "../components/typography/p"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Our Story | Frey Farms"
      description="Founded in 1992 by Sarah Frey, Frey Farms is a family business headquartered near Orchardville, Illinois. Sarah started the business as a simple produce delivery route that quickly grew, and her brothers soon came home to help her."
    />
    <Hero headline="Custom Bubbler Beverage Program" heroImage={data.hero.childImageSharp.fluid} />

    <Container>
      <P textAlign="center">We offer custom bubbler beverage solutions for our foodservice partners. Private label programs available.</P>

      <Container width="750px">
        <H2 textAlign="center">Let's Create a Bubbler Lineup Together</H2>
        <ContactForm />
      </Container>
    </Container>

  </Layout>
)

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/beverage-program.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage
