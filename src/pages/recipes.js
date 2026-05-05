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
        headerTwo={<H2>Watermelon Pizza</H2>}
        paragraph={<P>A fun, summer twist on pizza — topped with small, diced watermelon for a sweet and refreshing bite.</P>}
        images={[
          { fluid: data.watermelonPizzaOne.childImageSharp.fluid },
        ]}
        alt="Watermelon Pizza"
      >
        <Button
          link="/recipes/watermelon-pizza"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Watermelon Salsa</H2>}
        paragraph={<P>A fresh and vibrant Watermelon Salsa made with diced watermelon, quartered cherry tomatoes, sweet onion, basil, olive oil, and a splash of balsamic vinegar. Mix it all together, chill, and serve.</P>}
        images={[
          { fluid: data.watermelonSalsaOne.childImageSharp.fluid },
          { fluid: data.watermelonSalsaTwo.childImageSharp.fluid },
        ]}
        alt="Watermelon Salsa"
      >
        <Button
          link="/recipes/watermelon-salsa"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Yellow Melon Salad</H2>}
        paragraph={<P>Toss together a simple Yellow Watermelon Salad with cubed yellow watermelon, sliced Persian cucumbers, crumbled feta, and fresh basil and mint. Bright, refreshing, and ready in minutes.</P>}
        images={[
          { fluid: data.melonSaladOne.childImageSharp.fluid },
          { fluid: data.melonSaladTwo.childImageSharp.fluid },
        ]}
        alt="Yellow Melon Salad"
      >
        <Button
          link="/recipes/yellow-melon-salad"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Watermelon Feta & Sweet Corn Salad</H2>}
        paragraph={<P> A bright, summer-fresh salad that hits all the right notes—sweet, salty, and zesty. Juicy watermelon and grilled sweet corn are tossed with creamy feta, crisp red onion, and fresh mint, then finished with a light lime-garlic dressing. It’s quick to make, incredibly refreshing, and perfect for cookouts, potlucks, or an easy warm-weather side.</P>}
        images={[
          { fluid: data.fetaWatermelon.childImageSharp.fluid },
          { fluid: data.fetaWatermelonTwo.childImageSharp.fluid },
          { fluid: data.fetaWatermelonThree.childImageSharp.fluid }
        ]}
        alt="Seedless and Seeded Watermelons’"
      >
        <Button
          link="/recipes/watermelon-sweet-corn-feta"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Sweet Sliced Cushaw</H2>}
        paragraph={<P> Sweet Sliced Cushaw is a simple and nostalgic Southern-style side dish that highlights the natural sweetness of cushaw squash. Thinly sliced pieces are brushed with melted butter, sprinkled with brown sugar and cinnamon, and roasted until tender and caramelized. The result is a golden, fragrant dish that’s equal parts cozy dessert and comforting vegetable bake—perfect for fall gatherings or holiday meals.</P>}
        images={[
          { fluid: data.slicedCushaw.childImageSharp.fluid },
          { fluid: data.slicedCushawTwo.childImageSharp.fluid }
        ]}
        alt="Seedless and Seeded Watermelons’"
      >
        <Button
          link="/recipes/sweet-sliced-cushaw"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Seasoned Cinderella</H2>}
        paragraph={<P>Seasoned Cinderella cubes are a flavorful and rustic side dish that highlights the natural sweetness of Cinderella pumpkin. Cubed pumpkin is tossed with melted butter, caramelized onions, garlic, and a blend of smoky paprika and earthy cumin, then finished with a sprinkle of fresh herbs. The result is a warm, savory, and slightly sweet dish that pairs beautifully with roasted meats or holiday favorites.</P>}
        images={[
          { fluid: data.seasonedCinderella.childImageSharp.fluid },
          { fluid: data.seasonedCinderellaTwo.childImageSharp.fluid },
        ]}
        alt="Seedless and Seeded Watermelons’"
      >
        <Button
          link="/recipes/seasoned-cinderella"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Marla’s Epic Pumpkin Rolls</H2>}
        paragraph={<P>Soft, fluffy, and perfectly spiced — these pumpkin cinnamon rolls take the classic comfort of a cinnamon roll and elevate it with rich pumpkin flavor in every layer. The pumpkin purée adds moisture and warmth to the dough, while the spiced filling creates a cozy, aromatic sweetness. Finished with a smooth vanilla icing that melts over the warm rolls, they’re an irresistible fall favorite that’s just as perfect for holiday mornings as they are for everyday indulgence.</P>}
        images={[{ fluid: data.pumpkinrolls.childImageSharp.fluid }]}
        alt="Seedless and Seeded Watermelons’"
      >
        <Button
          link="/recipes/marlas-epic-pumpkin-rolls"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Honeynut Ricotta Boats</H2>}
        paragraph={<P>These Honeynut Squash Ricotta Boats are a cozy, elegant side dish that’s both savory and slightly sweet. Roasted honeynut squash halves are filled with a creamy ricotta mixture seasoned with paprika, garlic, and onion powder, then warmed to perfection and topped with crunchy walnuts. A drizzle of olive oil and hint of cinnamon bring a touch of autumn comfort to every bite.</P>}
        images={[
          { fluid: data.fetaBoatOne.childImageSharp.fluid },
          { fluid: data.fetaBoatTwo.childImageSharp.fluid },
          { fluid: data.fetaBoatThree.childImageSharp.fluid },
          { fluid: data.fetaBoatFour.childImageSharp.fluid },
        ]}
        alt="Seedless and Seeded Watermelons’"
      >
        <Button
          link="/recipes/honeynut-ricotta-boats"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Fairytale Stuffing</H2>}
        paragraph={<P>This Fairytale Pumpkin Stuffing recipe puts a cozy, seasonal twist on a classic favorite. Tender roasted pumpkin pieces are folded into buttery StoveTop stuffing made with a savory blend of chicken broth and spices. The result is a warm, flavorful side dish that balances sweet pumpkin with savory comfort—perfect for holiday gatherings or a hearty fall meal.</P>}
        images={[
          { fluid: data.fairytaleStuffingOne.childImageSharp.fluid },
          { fluid: data.fairytaleStuffingTwo.childImageSharp.fluid },
          { fluid: data.fairytaleStuffingThree.childImageSharp.fluid },
          { fluid: data.fairytaleStuffingFour.childImageSharp.fluid },
          { fluid: data.fairytaleStuffingFive.childImageSharp.fluid },
        ]}
        alt="Seedless and Seeded Watermelons’"
      >
        <Button
          link="/recipes/fairytale-stuffing"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>

    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Buckskin Soup</H2>}
        paragraph={<P>A cozy fall favorite, Buckskin Pumpkin Soup is a rich, velvety blend of roasted pumpkin, butter, and cream, lightly seasoned with cumin, salt, and pepper. Each bowl delivers warm, earthy flavors and smooth texture, finished with a dollop of sour cream for a creamy, comforting touch. Perfect for crisp evenings or festive holiday meals.</P>}
        images={[
          { fluid: data.buckskinOne.childImageSharp.fluid },
          { fluid: data.yellowMelons.childImageSharp.fluid},
        ]}
        alt="Seedless and Seeded Watermelons’"
      >
        <Button
          link="/recipes/buckskin-soup"
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
  hero: file(relativePath: { eq: "hero-images/recipe-hero-new.jpg" }) {
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
  fairytaleStuffingFour: file(relativePath: { eq: "recipes/fairytale-stuffing/fairytale_pumpkin.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    } 
  }
  fairytaleStuffingFive: file(relativePath: { eq: "recipes/fairytale-stuffing/fairytale_pumpkin_two.jpg" }) {
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
  seasonedCinderellaTwo: file(relativePath: { eq: "recipes/seasoned-cinderella/cinderella_pumpkin.jpg" }) {
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
  slicedCushawTwo: file(relativePath: { eq: "recipes/sliced-cushaw/cushaw_squash.jpg" }) {
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
  fetaBoatFour: file(relativePath: { eq: "recipes/feta-boat/feta-boat-four.jpg" }) {
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
  fetaWatermelon: file(relativePath: { eq: "recipes/watermelon-feta/watermelon-feta-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fetaWatermelonTwo: file(relativePath: { eq: "recipes/watermelon-feta/watermelon-feta-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fetaWatermelonThree: file(relativePath: { eq: "recipes/watermelon-feta/watermelon-feta-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  melonSaladOne: file(relativePath: { eq: "recipes/yellow-melon-salad/melon-salad-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  melonSaladTwo: file(relativePath: { eq: "recipes/yellow-melon-salad/melon-salad-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  watermelonSalsaOne: file(relativePath: { eq: "recipes/watermelon-salsa/watermelon-salsa-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  watermelonSalsaTwo: file(relativePath: { eq: "recipes/watermelon-salsa/watermelon-salsa-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  watermelonPizzaOne: file(relativePath: { eq: "recipes/watermelon-pizza/watermelon-pizza-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage