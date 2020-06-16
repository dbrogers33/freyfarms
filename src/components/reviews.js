import React from 'react'
import styled from "styled-components";

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"
import Container from "../components/container"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Reviews = () => {
    return (
        <section>
            {/* Desktop Version */}
            <Desktop>
                <Container>
                    <H3 >What We Stand For</H3>

                    <Carousel>        
                    <CarouselProvider
                        naturalSlideWidth={10}
                        naturalSlideHeight={2}
                        totalSlides={4}
                        infinite="true"
                        isIntrinsicHeight="true"
                        visibleSlides={1}
                    >
                        <Slider>
                            <Slide index={0}><H2>Family</H2><P>Our farm was founded and thrives today based on the strong bonds of family. We only grow and make products that we feel good about providing to our own families - and we love sharing them with you. Everyone deserves to experience the goodness of life on the farm.</P></Slide>
                            <Slide index={1}><H2>Conservation</H2><P>Our love of the land and passion for preserving it for future generations drives our sustainable farming initiatives. Inspired by humble beginnings, reducing food waste and finding a purpose for all that we grow is part of daily life and business on the farm.</P></Slide>
                            <Slide index={2}><H2>Quality</H2><P>What’s inside is what matters most. That’s why we source fresh, natural ingredients from our farms and grower partners we know and trust. Many of the fresh fruits and vegetable we grow are turned into healthy ingredients without ever leaving the farm. Juicing is done on the farm within a day of harvest.</P></Slide>
                            <Slide index={3}><H2>Innovation</H2><P>We use innovative farming methods to ensure we are taking care of the earth. We also innovate for our customers and consumers, to stay ahead of flavor trends and bring only the very best products to the marketplace.</P></Slide>
                        </Slider>
                        <Buttons>
                            <NewButtonBack><img src="/arrow.png" alt="back arrow" /></NewButtonBack>
                            <NewButtonNext style={{ float: "right" }}><img src="/arrow.png" alt="next arrow" /></NewButtonNext>
                        </Buttons>

                    </CarouselProvider>
                    
                    </Carousel>
                </Container>
            </Desktop>

           
        </section>
    );
};

const Desktop = styled.div`

`

const NewButtonBack = styled(ButtonBack)`
    border: none;
    background: rgba(0,0,0,0);
    transform: rotate(180deg);
    &:focus {
        border: none;
        outline: 0;
    }
`

const NewButtonNext= styled(ButtonNext)`
    border: none;
    background: rgba(0,0,0,0);
    &:focus {
        border: none;
        outline: 0;
    }
`

const Buttons = styled.div`
    position: absolute;
    top: 45%;
    width: 105%;
    z-index: 1;
    left: 0;
    transform: translate(-5%);
    @media (max-width: 899px) {
        width: 120%;
        transform: translateX(-10%);
    }
`

const Carousel = styled.div`
    position: relative;
    
`


export default Reviews;