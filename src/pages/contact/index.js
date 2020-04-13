import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import Helmet from "react-helmet";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import EmailForm from "../../components/MailForm";

const Contact = (props) => {
    const isClient = typeof window !== "undefined";
    return (
        <Layout bodyClass="page-contact">
            <SEO title="Contact" />
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
                ></meta>
            </Helmet>
            <div className="intro intro-small">
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
                    <h2>주소</h2>
                    <p>경기도 평택시 청북읍 고잔5길 67-46</p>
                    <h2>이메일</h2>
                    <p>hanameee@naver.com</p>
                </div>
                <div className="map col-12 mb-4">
                    {isClient && (
                        <RenderAfterNavermapsLoaded
                            ncpClientId={process.env.NAVER_MAP_ID}
                        >
                            <NaverMap
                                mapDivId={"maps-getting-started-uncontrolled"}
                                style={{
                                    width: "100%",
                                    height: "400px",
                                }}
                                defaultCenter={{
                                    lat: 37.042577,
                                    lng: 126.884917,
                                }}
                                defaultZoom={20}
                                draggable={false}
                                zoomControl={true}
                            />
                        </RenderAfterNavermapsLoaded>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
