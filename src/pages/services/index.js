import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";

const Services = (props) => {
    return (
        <Layout bodyClass="page-services">
            <SEO title="Services" />
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Services</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ServicesQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/services/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;

export default Services;