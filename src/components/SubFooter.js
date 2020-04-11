import React from "react";
import { graphql, StaticQuery } from "gatsby";

const SubFooter = (props) => (
    <div className="sub-footer-strip">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="sub-footer">
                        <ul>
                            <li>
                                <strong>대표자: </strong>
                                {props.data.site.siteMetadata.contact.ceo}
                            </li>
                            <li>
                                <strong>주소: </strong>{" "}
                                <a
                                    href={`mailto:${props.data.site.siteMetadata.contact.address}`}
                                >
                                    {
                                        props.data.site.siteMetadata.contact
                                            .address
                                    }
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://www.koreanpaper.kr">
                                    https://www.koreanpaper.kr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        contact {
                            ceo
                            address
                        }
                    }
                }
            }
        `}
        render={(data) => <SubFooter data={data} />}
    />
);
