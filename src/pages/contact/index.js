import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import Helmet from "react-helmet";
import LoadableNaverMap from "../../components/LoadableMap";
import Form from "../../components/Form";

const Contact = (props) => {
    const isClient =
        typeof window !== "undefined" && typeof document !== "undefined";
    return (
        <Layout bodyClass="page-contact">
            <SEO title="Contact" />
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
                ></meta>
            </Helmet>
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Contact</h1>
                            <p>
                                궁금하신 사항은 이메일 또는 유선 상으로 문의
                                주십시오. <br />
                                최대한 신속히 답변을 해드리겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="col-12 mt-4 mb-2 contact">
                    <h2>대표자</h2>
                    <p>이관모</p>
                    <h2>전화</h2>
                    <p>031-683-0224</p>
                    <h2>팩스</h2>
                    <p>031-683-1638</p>
                    <h2>주소</h2>
                    <p>경기도 평택시 청북읍 고잔5길 67-46</p>
                </div>
                <div className="map col-12 mb-4">
                    {isClient && <LoadableNaverMap />}
                </div>
                <Form />
            </div>
        </Layout>
    );
};

export default Contact;
