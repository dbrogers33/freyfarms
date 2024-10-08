import React from "react"
import styled from "styled-components";
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Container from "../components/container"
import Gallery from "../components/gallery"

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"



const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Décor Inspo | Frey Farms"
      description="Founded in 1992 by Sarah Frey, Frey Farms is a family business headquartered near Orchardville, Illinois. Sarah started the business as a simple produce delivery route that quickly grew, and her brothers soon came home to help her."
    />
    <Hero headline="Décor Inspo" heroImage={data.hero.childImageSharp.fluid} />

    <Container>

      <Padding>
      <H2 textAlign="center">Tag Us on Instagram <ExternalLink href="https://www.instagram.com/freyfarms/">@freyfarms</ExternalLink></H2>
      </Padding>

      <Gallery />

    </Container>

  </Layout>
)

const ExternalLink = styled.a`
  color: #0F5800;
`

const Padding = styled.div`
  margin: 3em 0;
`


export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/decor-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage
