import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

function IntroCarousel(props) {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "intro" } }) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Carousel>
            {images.allFile.edges.map(({ node }) => (
                <Paper elevation={3}>
                    <Img fluid={node.childImageSharp.fluid} />
                </Paper>
            ))}
        </Carousel>
    );
}

export default IntroCarousel;
