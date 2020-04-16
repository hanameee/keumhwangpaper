import React from "react";
import { Paper } from "@material-ui/core";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import HoverableCard from "./HoverableCard";

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
        certificate1: "황토 한지 (마스크)",
        certificate2: "마스크용 황토 한지",
        certificate3: "황토 마스크용 한지",
        certificate4: "한지 추출물 (검은황토)",
    };
    return (
        <>
            {images.allFile.edges.map(({ node }, idx) => (
                <HoverableCard
                    image={node.childImageSharp.fluid}
                    hoverText={imagesInfo[node.base.replace(".png", "")]}
                    key={idx}
                />
            ))}
        </>
    );
}

export default Certificates;
