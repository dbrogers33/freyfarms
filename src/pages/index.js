import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"

import Hero from "../components/hero"
import Container from "../components/container"
import SideBySide from '../components/side-by-side'
import Button from "../components/button"
import Card from "../components/hover-card"
import Book from "../components/book-promo"
import Instagram from "../components/instagram"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Frey Farms | Home to watermelons, pumpkins, and Sara's Homegrown"
      description="It is our vision to bring our love of the farm to all families. Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
      image=""
  />
    <Hero headline="We believe all good things begin on the farm." heroImage={data.hero.childImageSharp.fluid} />

    {/* QUOTE SECTION */}
    <Quote>
      <Container>
        <Header2 color="white" textAlign="center">A NOTE FROM OUR FOUNDING FARMER</Header2>
        <P color="white" textAlign="center">“I grew up on a small family farm where nothing was ever wasted and food was simple and delicious. Every growing season yielded different crops and we’re proud to bring that produce to market today. Some of my of fondest memories are of trying to figure what to do with the imperfect or “ugly fruit”. This led to my vision of using all of what we grow and creating farm fresh beverages for families. Our family works hard to provide you with the freshest produce and products, made with all natural ingredients while keeping with the tradition of conserving and protecting the land we love.”</P>
        <H3 textAlign="center" color="white">-Sarah Frey</H3>
        <P textAlign="center" color="white">Founding Farmer</P>
      </Container>
    </Quote>

    {/* ABOUT SECTION */}
    <SideBySide
      reverse="row-reverse"
      headerThree="Our Story"
      headerTwo="Sharing our love of the farm with you"
      paragraph="It is our vision to bring our love of the farm to all families. Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best. We hope you can kick back, relax and share in our love for delicious fruits and vegetables, Sarah’s Homegrown™ agua frescas, and Tsamma® watermelon juice."
      src={data.sarah.childImageSharp.fluid}
      alt="Sarah Frey sitting in a pumpkin field"
    >
      <Button
        link="/our-story"
        buttonLabel="Our Story"
      />
    </SideBySide>

    <Products>
      <Container width="400px">
        <H3 textAlign="center">Our Products</H3>
        <H2 textAlign="center">Everything we make comes from the farm.</H2>
      </Container>
      <Container>
        <ProductGrid>
          <CardWrapper>
            <Card image={data.produce.childImageSharp.fluid} headline="Sarah's Homegrown Produce" link="/products"/>
          </CardWrapper>
          <CardWrapper>
            <Card image={data.beverages.childImageSharp.fluid} headline="Sarah's Homegrown Beverages" link="/products"/>
          </CardWrapper>
          <CardWrapper>
            <Card image={data.tsamma.childImageSharp.fluid} headline="Tsamma Watermelon Juice" link="/products"/>
          </CardWrapper>
        </ProductGrid>
      </Container>
    </Products>

    <Book/>

    <Instagram />
 
  </Layout>
)

const Quote = styled.section`
  background-color: #095129;
  padding: 3em 0;
  margin-top: -2px;
`
const Header2 = styled(H2)`
  font-size: 9px;
`
const Products = styled.section`
  margin: 3em 0;
`
const ProductGrid = styled.div`
  margin: 1em 0;
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
  }
`
const CardWrapper = styled.div`
  width: 100%;
  margin: 1em 0;
  @media (min-width: 700px) {
    width: calc(100% / 3 - 1em);
  }
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/home-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  sarah: file(relativePath: { eq: "sarah-frey.png" }) {
    childImageSharp {
      fluid(maxWidth: 900, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  produce: file(relativePath: { eq: "Produce.png" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  beverages: file(relativePath: { eq: "Beverage.png" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  tsamma: file(relativePath: { eq: "Tsamma.png" }) {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage
