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
        <Carousel indicators={false}>
            {images.allFile.edges.map(({ node }, idx) => (
                <Paper elevation={3} key={idx}>
                    <Img fluid={node.childImageSharp.fluid} loading="eager" />
                </Paper>
            ))}
        </Carousel>
    );
}

export default IntroCarousel;
