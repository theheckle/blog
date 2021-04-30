import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PhysicalComputing = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Religious Robots" />
      <Bio />
      <hr margin="2px"></hr>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        if( node.fields.slug.includes("/religious-robots")){
          return (
            <article key={node.fields.slug} className="blog">
              <header>
                <h3
                  style={{
                    marginBottom: 1 / 4,
                  }}
                >
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          );
        }
        return null;
      })}
      <hr margin="2px"></hr>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </Layout>
  );
};

export default PhysicalComputing;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
