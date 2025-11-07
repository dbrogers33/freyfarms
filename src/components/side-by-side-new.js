import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import Img from "gatsby-image/withIEPolyfill";

// ---------- Helpers ----------
function renderRich(content) {
  if (content == null) return null;
  if (React.isValidElement(content) || Array.isArray(content)) return content;
  if (typeof content === "function") return content();
  if (typeof content === "string") {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
  return content;
}

// ---------- Styled ----------
const Wrapper = styled.div`
  position: relative;
  min-height: 420px;
  overflow: hidden;
  @media (min-width: 900px) {
    display: flex;
    align-items: stretch;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }
`;

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-size: cover;
  background-position: 50% 50%;
`;

const Copy = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) { margin: 2em auto; }

  h1, h2, h3, h4, h5, h6 { margin-bottom: 0.5em; }
  ul, ol { margin-left: 1.5em; margin-bottom: 1em; }
  p { margin-bottom: 1em; }

  /* Buttons/links size to text (not full width) */
  button,
  a.button,
  a[href] {
    display: inline-block;
    width: auto;
    padding: 0.6em 1.4em;
    margin-top: 1em;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    background: #377539;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.2s ease;
  }
  button:hover,
  a.button:hover,
  a[href]:hover { background: #2e6130; }
`;

const FlexItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 900px) { width: calc(100% / 2); }
`;

const SliderShell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

/* 1:1 square frame with a fallback for browsers without aspect-ratio */
const SquareFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  /* Fallback for older browsers */
  @supports not (aspect-ratio: 1 / 1) {
    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
`;

/* Absolutely fill the frame, always cover */
const FillImage = styled(Img)`
  position: absolute !important;
  inset: 0;
  width: 100%;
  height: 100%;
  /* these help avoid tiny gaps on fractional pixels during resizes */
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
`;

const StableSlider = styled(Slider)`
  .slick-list { overflow: hidden; }
  .slick-track { display: flex; }
  .slick-slide { display: flex; }
  .slick-slide > div { flex: 1 1 auto; } /* stretch slide wrapper */
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
`;

// Custom arrows
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
  <ArrowButton className={className} onClick={onClick} aria-label={direction === "next" ? "Next slide" : "Previous slide"}>
    <span style={{ fontSize: "28px", lineHeight: 1 }}>{direction === "next" ? "›" : "‹"}</span>
  </ArrowButton>
);

// ---------- Slider component (forces reliable cover on resize) ----------
function SectionSlider({ images = [], alt }) {
  const sliderRef = useRef(null);
  const [firstLoaded, setFirstLoaded] = useState(false);

  const recalc = useCallback(() => {
    try {
      sliderRef.current?.slickGoTo(0, true);
      sliderRef.current?.innerSlider?.onWindowResized?.();
    } catch {}
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("resize"));
    }
  }, []);

  useEffect(() => {
    recalc();
    const t = setTimeout(recalc, 150);
    const t2 = setTimeout(recalc, 500);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [recalc]);

  useEffect(() => { if (firstLoaded) recalc(); }, [firstLoaded, recalc]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    lazyLoad: "ondemand",
    waitForAnimate: false,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />
  };

  const sliderKey = images.map(i => i?.fluid?.src || i?.fluid?.srcWebp || "").join("|") || "no-images";
  const safeImages = images.filter(i => i?.fluid);

  return (
    <StableSlider ref={sliderRef} key={sliderKey} {...settings}>
      {safeImages.map((img, idx) => (
        <div key={idx}>
          <SquareFrame>
            <FillImage
              fluid={img.fluid}
              alt={img.alt || alt || `Slide ${idx + 1}`}
              /* Both styles & props to guarantee cover with withIEPolyfill */
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
              objectFit="cover"
              objectPosition="50% 50%"
              fadeIn={false}
              loading={idx === 0 ? "eager" : "lazy"}
              critical={idx === 0}
              onLoad={() => idx === 0 && setFirstLoaded(true)}
              onError={() => idx === 0 && setFirstLoaded(true)}
            />
          </SquareFrame>
        </div>
      ))}
    </StableSlider>
  );
}

// ---------- Main Component ----------
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
    render={(data) => {
      const bgSrc = data?.background?.childImageSharp?.fluid?.src;
      return (
        <Wrapper className="wrapper" reverse={!!reverse}>
          {bgSrc && (
            <BackgroundLayer style={{ backgroundImage: `url(${bgSrc})` }} />
          )}

          <FlexItem>
            {Array.isArray(images) && images.length > 0 ? (
              <SliderShell>
                <SectionSlider images={images} alt={alt} />
              </SliderShell>
            ) : (
              src && (
                <SquareFrame>
                  <FillImage
                    fluid={src}
                    alt={alt}
                    imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    fadeIn={false}
                    loading="eager"
                    critical
                  />
                </SquareFrame>
              )
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
        </Wrapper>
      );
    }}
  />
);

export default SectionWithSlider;
