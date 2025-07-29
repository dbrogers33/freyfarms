import React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../components/hero"
import SideBySide from "../../components/side-by-side"
import Button from "../../components/button"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Pumpkins | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="Pumpkins" heroImage={data.hero.childImageSharp.fluid} />
    
    <Products>
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Jack O' Lanterns"
        paragraph="Our Jack O Lanterns, also known as carving pumpkins, are grown across thousands of acres in Illinois and Indiana. We ship various sizes of Jacks across the US, from 10 pounds to 25 pounds. “Pumpkins make people happy, and that matters.” Sarah Frey, Founding Farmer."
        src={data.jackLatern.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>
    
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Autumn Couleur"
        paragraph="In 2004, we trademarked a custom mix of unique, heirloom pumpkins as Autumn Couleur ®. This fall mix consists of 13 seed varieties sourced all over the world. Known for their beautiful color, texture and shapes to decorate, but widely known across the world as a delicious-superfood. The New York Times said it best, “America’s Pumpkin Queen has a request, cook and don’t just carve”."
        src={data.autumnCouleur.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>
    
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Heirloom Stacker"
        paragraph="The Fall season is known for beautiful colors and decorating with pumpkins. Thank you to the many Pinterest and Instagram Moms who inspired us with your front porch topiaries. We chose five beautiful varieties from the Autumn Couleur mix - with one requirement, they are all easily stackable."
        src={data.heirloomStacker.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>

     <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="White & Pies"
        paragraph="White pumpkins and pie pumpkins are two staples to our Fall program. We love seeing the creativity with white pumpkins, from metallic spray to unique carving and candles. Pie pumpkins are edible but in our professional opinion, you’re better off using these little guys for decor."
        src={data.whitePie.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>

     <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Mini Pumpkins & Decortive Gourds"
        paragraph="Our mini pumpkins and decorative gourds are shipped in either 3-6 count mesh bags, display ready cases and bulk bins. The white, orange, tiger stripes and bright colored gourds are the perfect addition to your tablescape, fence posts and lining front porch steps."
        src={data.miniPumpkins.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>

     <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Candy Corn"
        paragraph="We introduced this festive and fun pumpkin to the market in 2023. Known for it’s fiery colors and long shelf life, the Candy Corn grows into a very consistent size of approximately 10-14 pounds. We’ve had many people ask if it’s sweet like Candy Corn and would recommend decorating versus cooking."
        src={data.candyCorn.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Hard Winter Squash"
        paragraph="We grow Spaghetti, Butternut and Acorn Spaghetti squash. Each is known for a different flavor profile and texture. Spaghetti squash is mild and neutral, often described as slightly sweet and nutty with a stringy, pasta-like flesh that separates into strands when cooked. Butternut is smooth and creamy with a sweet and buttery flavor, ideal for soups, purees, pies  and as a base for creamy pasta. Acorn squash is tender with a slightly stringy texture and mild, slightly sweet, nutty flavor - ideal for soups , sauces or roasted halves."
        src={data.winterSquash.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>
    </Products>

  </Layout>

  
)

const Products = styled.div`
  
`
const ExternalLink = styled.a`
    text-transform: uppercase;
    font-family: 'Cervo Neue';
    color: #0F5800;
    font-weight: 800;
    font-size: 18px;
    margin: .1em 0;
    text-decoration: none;
    & :hover {
      text-decoration: underline;
    }
    @media (min-width: 800px) {
        font-size: 20px;
    }
`
const ProductWrapper = styled.section`
  @media (min-width: 900px) {
    margin: 3em;
    box-shadow: 10px 4px 34px rgba(0, 0, 0, 0.15);
    & > .wrapper {
    
    }
  }
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/pumpkins-hero.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  jackLatern: file(relativePath: { eq: "products/jack-o-latern.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  autumnCouleur: file(relativePath: { eq: "products/heirloom-stackers.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  heirloomStacker: file(relativePath: { eq: "products/heirloom-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  tsamma: file(relativePath: { eq: "products/tsamma.png" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  whitePie: file(relativePath: { eq: "products/white-pie.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  miniPumpkins: file(relativePath: { eq: "products/mini-pumpkins.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  candyCorn: file(relativePath: { eq: "products/candyCorn.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  winterSquash: file(relativePath: { eq: "products/winterSquash.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage