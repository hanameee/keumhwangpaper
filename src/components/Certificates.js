import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

function Certificates(props) {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "certificates" } }) {
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
    const imagesInfo = {
        "0": "황토 한지 마스크",
        "1": "마스크용 황토 한지",
        "2": "황토 마스크용 한지",
    };
    return (
        <>
            {images.allFile.edges.map(({ node }, idx) => (
                <div className="Certificates" key={idx}>
                    <div className="CertificatesImageWrapper">
                        <Paper elevation={3}>
                            <Img
                                fluid={node.childImageSharp.fluid}
                                loading="eager"
                            />
                        </Paper>
                        <div className="CertificateImageHover mt-2">
                            {imagesInfo[idx]}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Certificates;
