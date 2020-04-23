import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"

import Hero from "../components/hero"
import Container from "../components/container"

const IndexPage = ({ data }) => {
  const news = data.allContentfulNews.edges
  return (
  <Layout>
    <SEO title="Our Story" />
    <Hero headline="Fresh from the vine." heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      {news.map((article, key) => (
        <Article key={key}>
          <H3>{article.node.publicationName}</H3>
          <StyledLink href={article.node.linkToArticle} target="_blank" rel="noopener noreferrer"><H2>{article.node.articleTitle}</H2></StyledLink>
          <P>{article.node.articleSnippet}</P>
        </Article>
      ))}
    </Container>

  </Layout>
)}

const Article = styled.div`
  padding: 2em 0;
  border-bottom: 1px solid #E5E5E5;
  &:last-child {
    border-bottom: none;
  }
`
const StyledLink = styled.a`
  display: inline;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/news-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allContentfulNews(sort: {fields: publishDate, order: DESC}) {
    edges {
      node {
        articleSnippet
        articleTitle
        linkToArticle
        publicationName
      }
    }
  }
}
`

export default IndexPage
