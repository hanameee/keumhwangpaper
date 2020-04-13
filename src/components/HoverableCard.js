import React from "react";
import { Paper } from "@material-ui/core";
import Img from "gatsby-image";

const HoverableCard = ({ image, hoverText }) => {
    return (
        <div className="HoverableCard">
            <div className="CardImage">
                <Paper elevation={3}>
                    <Img fluid={image} loading="eager" />
                </Paper>
                <div className="CardHoverText">
                    <p>{hoverText}</p>
                </div>
            </div>
        </div>
    );
};

export default HoverableCard;
