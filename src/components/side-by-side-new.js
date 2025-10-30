import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import Img from 'gatsby-image/withIEPolyfill'

/**
 * Enhanced version: allows rich HTML markup in text content (H2, H3, paragraph areas)
 *
 * Props
 * - headerThree, headerTwo, paragraph: string (can contain HTML)
 * - images: Array<{ fluid: GatsbyFluidObject, alt?: string }>
 * - alt, src: fallback image support
 * - reverse: boolean (layout flip)
 * - children: ReactNode
 */

const SectionWithSlider = ({
  headerThree,
  headerTwo,
  paragraph,
  images = [],
  alt,
  src,
  children,
  reverse,
}) => (

  <StaticQuery
    query={graphql`
      query SectionWithSliderBackgroundQueryHTML {
        background: file(relativePath: { eq: "fruit-bg.png" }) {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => (
      <Wrapper className="wrapper" reverse={!!reverse}>
        <FlexItem>
          {Array.isArray(images) && images.length > 0 ? (
            <SliderShell>
              <StyledSlider
                dots
                arrows
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                adaptiveHeight={false}
                autoplay={false}
                responsive={[
                  { breakpoint: 900, settings: { arrows: false } },
                ]}
              >
                {images.map((img, idx) => (
                  <Slide key={idx}>
                    <SlideImage
                      fluid={img.fluid}
                      alt={img.alt || alt || `Slide ${idx + 1}`}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                  </Slide>
                ))}
              </StyledSlider>
            </SliderShell>
          ) : (
            <SingleImage fluid={src} alt={alt} objectFit="cover" objectPosition="50% 50%" />
          )}
        </FlexItem>

        <FlexItem>
          <Copy>
            {renderRich(headerThree)}
            {renderRich(headerTwo)}
            {renderRich(paragraph)}
            {children}
          </Copy>
        </FlexItem>

        <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          objectPosition="50% 50%"
          style={{ position: 'absolute' }}
        />
      </Wrapper>
    )}
  />
)

export default SectionWithSlider

// Helper to accept either JSX/React nodes OR HTML strings
function renderRich(content) {
  if (content == null) return null;
  // If it's already a valid React node (element, array of elements, string without HTML), return as-is
  if (React.isValidElement(content) || Array.isArray(content)) return content;
  // If you pass a function that returns JSX (render prop style)
  if (typeof content === 'function') return content();
  // If it's a string, treat as HTML string so you can include <ul>, <ol>, <em>, etc.
  if (typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
  // Fallback: render whatever it is
  return content;
}

const Wrapper = styled.div`
  position: relative;
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
`

const Copy = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 900px) {
    margin: 2em auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
  }
  ul, ol {
    margin-left: 1.5em;
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 1em;
  }
`

const FlexItem = styled.div`
  width: 100%;
  @media (min-width: 900px) {
    width: calc(100% / 2);
  }
`

const BackgroundImage = styled(Img)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
`

const SingleImage = styled(Img)`
  width: 100%;
  height: 100%;
  .gatsby-image-wrapper { height: 100%; }
`

const SliderShell = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  @supports not (aspect-ratio: 16 / 9) {
    padding-top: 56.25%;
    .slick-slider, .slick-list, .slick-track, .slick-slide > div { height: 100%; }
  }
`

const StyledSlider = styled(Slider)`
  height: 100%;
  .slick-list { height: 100%; border-radius: 16px; overflow: hidden; }
  .slick-track { display: flex; }
  .slick-slide { display: flex; align-items: stretch; }
  .slick-dots li button:before { font-size: 10px; }
  .slick-prev, .slick-next { z-index: 2; }
`

const Slide = styled.div`
  width: 100%;
  height: 100%;
`

const SlideImage = styled(Img)`
  width: 100%;
  height: 100%;
`
