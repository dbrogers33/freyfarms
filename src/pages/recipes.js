import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

// Layout components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SideBySide from "../components/side-by-side-new"
import Button from "../components/button"

// Typography
import H2 from "../components/typography/h2"
import P from "../components/typography/p"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Recipes | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="Recipes" heroImage={data.hero.childImageSharp.fluid} />
    
    <Products>
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Buckskin Soup</H2>}
        paragraph={<P>A cozy fall favorite, Buckskin Pumpkin Soup is a rich, velvety blend of roasted pumpkin, butter, and cream, lightly seasoned with cumin, salt, and pepper. Each bowl delivers warm, earthy flavors and smooth texture, finished with a dollop of sour cream for a creamy, comforting touch. Perfect for crisp evenings or festive holiday meals.</P>}
        images={[
          { fluid: data.buckskinOne.childImageSharp.fluid },
          { fluid: data.yellowMelons.childImageSharp.fluid},
        ]}
        alt="Seedless and Seeded Watermelons'"
      >
        <Button
          link="/recipes/buckskin-soup"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>
    
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Fairytale Stuffing</H2>}
        paragraph={<P>This Cinderella Pumpkin Stuffing recipe puts a cozy, seasonal twist on a classic favorite. Tender roasted pumpkin pieces are folded into buttery StoveTop stuffing made with a savory blend of chicken broth and spices. The result is a warm, flavorful side dish that balances sweet pumpkin with savory comfort—perfect for holiday gatherings or a hearty fall meal.</P>}
        images={[
          { fluid: data.fairytaleStuffingOne.childImageSharp.fluid },
          { fluid: data.fairytaleStuffingTwo.childImageSharp.fluid },
          { fluid: data.fairytaleStuffingThree.childImageSharp.fluid },
        ]}
        alt="Seedless and Seeded Watermelons'"
      >
        <Button
          link="/recipes/fairytale-stuffing"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

     <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Honeynut Feta Boats</H2>}
        paragraph={<P>These Honeynut Squash Ricotta Boats are a cozy, elegant side dish that’s both savory and slightly sweet. Roasted honeynut squash halves are filled with a creamy ricotta mixture seasoned with paprika, garlic, and onion powder, then warmed to perfection and topped with crunchy walnuts. A drizzle of olive oil and hint of cinnamon bring a touch of autumn comfort to every bite.</P>}
        images={[
          { fluid: data.fetaBoatOne.childImageSharp.fluid },
          { fluid: data.fetaBoatTwo.childImageSharp.fluid },
          { fluid: data.fetaBoatThree.childImageSharp.fluid },
        ]}
        alt="Seedless and Seeded Watermelons'"
      >
        <Button
          link="/recipes/honeynut-feta-boats"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

     <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Marla's Pumpkin Rolls</H2>}
        paragraph={<P>Soft, fluffy, and perfectly spiced — these pumpkin cinnamon rolls take the classic comfort of a cinnamon roll and elevate it with rich pumpkin flavor in every layer. The pumpkin purée adds moisture and warmth to the dough, while the spiced filling creates a cozy, aromatic sweetness. Finished with a smooth vanilla icing that melts over the warm rolls, they’re an irresistible fall favorite that’s just as perfect for holiday mornings as they are for everyday indulgence.</P>}
        images={[{ fluid: data.pumpkinrolls.childImageSharp.fluid }]}
        alt="Seedless and Seeded Watermelons'"
      >
        <Button
          link="/recipes/marlas-epic-pumpkin-rolls"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Seasoned Cinderella</H2>}
        paragraph={<P>Seasoned Cinderella Cubes are a flavorful and rustic side dish that highlights the natural sweetness of Cinderella pumpkin. Cubed pumpkin is tossed with melted butter, caramelized onions, garlic, and a blend of smoky paprika and earthy cumin, then finished with a sprinkle of fresh herbs. The result is a warm, savory, and slightly sweet dish that pairs beautifully with roasted meats or holiday favorites.</P>}
        images={[{ fluid: data.seasonedCinderella.childImageSharp.fluid }]}
        alt="Seedless and Seeded Watermelons'"
      >
        <Button
          link="/recipes/seasoned-cinderella"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Sweet Sliced Cushaw</H2>}
        paragraph={<P> Sweet Sliced Cushaw is a simple and nostalgic Southern-style side dish that highlights the natural sweetness of cushaw squash. Thinly sliced pieces are brushed with melted butter, sprinkled with brown sugar and cinnamon, and roasted until tender and caramelized. The result is a golden, fragrant dish that’s equal parts cozy dessert and comforting vegetable bake—perfect for fall gatherings or holiday meals.</P>}
        images={[{ fluid: data.slicedCushaw.childImageSharp.fluid }]}
        alt="Seedless and Seeded Watermelons'"
      >
        <Button
          link="/recipes/sweet-sliced-cushaw"
          buttonLabel="View Recipe"
        />
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
  hero: file(relativePath: { eq: "hero-images/recipe-hero.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  seedlessAndSeeded: file(relativePath: { eq: "products/seedless-and-seeded.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  buckskinOne: file(relativePath: { eq: "recipes/buckskin/buckskin-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  buckskinOne: file(relativePath: { eq: "recipes/buckskin/buckskin-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  buckskinTwo: file(relativePath: { eq: "recipes/buckskin/buckskin-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  fairytaleStuffingOne: file(relativePath: { eq: "recipes/fairytale-stuffing/fairytale-stuffing-one.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  fairytaleStuffingTwo: file(relativePath: { eq: "recipes/fairytale-stuffing/fairytale-stuffing-two.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  fairytaleStuffingThree: file(relativePath: { eq: "recipes/fairytale-stuffing/fairytale-stuffing-three.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  pumpkinrolls: file(relativePath: { eq: "recipes/pumpkin-rolls/pumpkin-rolls.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  seasonedCinderella: file(relativePath: { eq: "recipes/seasoned-cinderella/seasoned-cinderella.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  slicedCushaw: file(relativePath: { eq: "recipes/sliced-cushaw/slicde-cushaw.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  fetaBoatOne: file(relativePath: { eq: "recipes/feta-boat/feta-boat-one.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  fetaBoatTwo: file(relativePath: { eq: "recipes/feta-boat/feta-boat-two.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  fetaBoatThree: file(relativePath: { eq: "recipes/feta-boat/feta-boat-three.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  yellowMelons: file(relativePath: { eq: "recipes/buckskin/buckskin-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  melonBabies: file(relativePath: { eq: "products/melon-babies.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage