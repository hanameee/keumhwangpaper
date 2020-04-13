import React from "react";
import { Paper } from "@material-ui/core";
import Img from "gatsby-image";

import "./ProductCard.scss";
const ProductCard = ({ image, name, info }) => {
    return (
        <div className="ProductCard">
            <div className="CardImage">
                <Paper elevation={3}>
                    <Img fixed={image} loading="eager" />
                </Paper>
            </div>
            <div className="CardInformation">
                <p className="CardInformationTitle">{name}</p>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default ProductCard;
