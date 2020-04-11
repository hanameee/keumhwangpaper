import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Call = (props) => (
    <div className="call">
        <div className="call-box-top">
            <div className="call-phone">
                <strong>Ceo: </strong>
                <a href={`tel:${props.data.site.siteMetadata.contact.ceo}`}>
                    {props.data.site.siteMetadata.contact.ceo}
                </a>
            </div>
            <div className="call-email">
                <strong>Address: </strong>
                <a
                    href={`mailto:${props.data.site.siteMetadata.contact.address}`}
                >
                    {props.data.site.siteMetadata.contact.address}
                </a>
            </div>
        </div>
        {props.button && (
            <div className="call-box-bottom">
                <a href="/contact" className="button">
                    Contact
                </a>
            </div>
        )}
    </div>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        contact {
                            ceo
                            address
                        }
                    }
                }
            }
        `}
        render={(data) => <Call button={props.button} data={data} />}
    />
);
