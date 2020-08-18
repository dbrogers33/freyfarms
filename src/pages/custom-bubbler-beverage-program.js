import React from "react"
import styled from "styled-components";
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NetlifyForm from 'react-netlify-form'

import Hero from "../components/hero"
import Container from "../components/container"

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
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
        <H2 textAlign="center">Let’s Create a Bubbler Lineup Together</H2>
      <NetlifyForm
        name='Custom Bubbler Program'
        honeyPot="bot-field"
      >
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div>Loading...</div>
            }
            {error &&
              <div>Your information was not sent. Please try again later.</div>
            }
            {success &&
              <H3 style={{ margin: "3em 0" }}>Someone from Our Team will Get in Touch with You Shortly!</H3>
            }
            {!loading && !success &&
              <Flex>
                <Input type='text' name='Name' placeholder="Your Name" required />
                <Input type='tel' name='Phone' placeholder="Your phone number" required />
                <Input type="text" name="Email" placeholder="Your email" required />
                <Input type="text" name="Companyu" placeholder="Company name" required />
                <Textarea name='message' rows="4" placeholder="Enter your message here..."></Textarea>
                <Input type="hidden" name='bot-field' />
                <Button type="submit">Request Information</Button>
              </Flex>
            }
          </div>
        )}
      </NetlifyForm>
      </Container>
    </Container>

  </Layout>
)


const Flex = styled.div`
  display: grid;
`

const Input = styled.input`
  padding: 1em;
  margin-bottom: 1em;
  display: block;
  border-radius: 5px;
  border: #6f6f6f solid 1px;
  -webkit-appearance: none;
  clear: both;
  font-family: 'Brandon Grotesque Regular';
  &::placeholder {
    font-family: 'Brandon Grotesque Regular';
  }
  &:focus {
      border: green solid 1px;
      outline: none;
  }
`
const Textarea = styled.textarea`
  padding: 1em 0 1em 1em;
  display: block;
  border-radius: 5px;
  border: #6f6f6f solid 1px;
  font-family: 'Brandon Grotesque Regular';
  -webkit-appearance: none;
  clear: both;
  &::placeholder {
    font-family: 'Brandon Grotesque Regular';
  }
  &:focus {
      border: green solid 1px;
      outline: none;
  }
`
const Button = styled.button`
  border-radius: 5px;
  border: 0;
  background: #095129;
  padding: 1em 2.25em;
  font-size: 18px;
  letter-spacing: .1em;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  outline: 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  max-width: 400px;
  font-family: 'Brandon Grotesque Regular';
  margin: 1em 0;
  transition: .15s ease;
  font-weight: 500;
  &:hover {
    background: #292825;
    box-shadow: 0px 4px 7px rgba(33,32,30, .27);
  }
`

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
