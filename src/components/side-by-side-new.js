import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import Img from 'gatsby-image/withIEPolyfill'

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
                dots={false}
                arrows={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                adaptiveHeight={false}
                autoplay={false}
                nextArrow={<Arrow direction="next" />}
                prevArrow={<Arrow direction="prev" />}
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

// Custom arrow component used by react-slick
const ArrowButton = styled.button`
  all: unset;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.35);
  color: #fff;
  cursor: pointer;
`;

const Arrow = ({ className, onClick, direction }) => (
  <ArrowButton className={className} onClick={onClick} aria-label={direction === 'next' ? 'Next slide' : 'Previous slide'}>
    <span style={{fontSize: '28px', lineHeight: 1}}>{direction === 'next' ? '›' : '‹'}</span>
  </ArrowButton>
);

function renderRich(content) {
  if (content == null) return null;
  if (React.isValidElement(content) || Array.isArray(content)) return content;
  if (typeof content === 'function') return content();
  if (typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
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
  height: 100%;
`

const StyledSlider = styled(Slider)`
  height: 100%;
  .slick-list { height: 100%; overflow: hidden; }
  .slick-track { display: flex; height: 100%; }
  .slick-slide { display: flex; align-items: stretch; height: 100%; }

  /* Hide dots explicitly just in case */
  .slick-dots { display: none !important; }

  /* Overlay arrows */
  .slick-prev, .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.35);
    color: #fff;
    border: none;
    outline: none;
    z-index: 3;
    cursor: pointer;
  }
  .slick-prev { left: 12px; }
  .slick-next { right: 12px; }
  .slick-prev::before, .slick-next::before { display: none; }
`

const Slide = styled.div`
  width: 100%;
  height: 100%;
`

const SlideImage = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
