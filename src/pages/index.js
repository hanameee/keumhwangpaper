import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";
import CompanyTimeline from "../components/History";
import IntroCarousel from "../components/Carousel";
import Certificates from "../components/Certificates";

const Home = (props) => {
    return (
        <Layout bodyClass="page-home">
            <SEO title="Home" />
            <Helmet>
                <meta
                    name="금황한지산업"
                    content="금황한지산업 소개 홈페이지"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
                ></meta>
            </Helmet>
            <div className="intro">
                <div className="container">
                    <h1>금황한지산업에 오신 것을 환영합니다.</h1>
                    <p>
                        한지 (hanji, traditional Korean paper made from mulberry
                        trees) 의 세계로 초대합니다.
                    </p>
                </div>
            </div>

            <div className="container pt-6 pt-md-4">
                <div className="row justify-content-start">
                    <div className="col-12">
                        <h2 className="text-dark mb-4 title-4">
                            금황한지산업 소개
                        </h2>
                    </div>
                    <div className="CarouselWrapper">
                        <div className="col-12 col-md-9 CarouselText">
                            저희 금황한지산업은 1985년 ‘금황특수제지’에서 시작해
                            1988년부터 기계한지 제조회사로 전환 증설 후 지금까지
                            30여년이 넘는 세월 동안 오직{" "}
                            <span className="pointColor">
                                기능성 한지의 개발과 생산
                            </span>
                            에 매진해 왔습니다. <br />
                            <br />
                            금황한지산업의 기능성 한지는 한지의 본래기능인
                            항균기능과 탈취기능을 상당부분 개선한 한지제품으로,
                            자사 기능성 원료인 한지추출물(검은황토)를 한지에
                            혼합하여 기계화된 한지 설비로 대량생산 한 것으로서
                            항균, 탈취 등이 필요한 필터 등{" "}
                            <span className="pointColor">
                                설비의 핵심재료로 활용이 가능한 첨단소재 한지
                            </span>
                            입니다.
                            <br />
                            <br /> 이렇듯 금황한지산업은 전통 한지와는 차별화된
                            기능 중심의 고기능성 한지를 통하여{" "}
                            <span className="pointColor">
                                한지의 첨단화 및 세계화
                            </span>
                            를 목표로 하고 있습니다.
                        </div>
                        <div className="col-12 col-md-3">
                            <IntroCarousel />
                        </div>
                    </div>
                    <div className="col-12 my-2 btn-container">
                        <a href="/business" className="button">
                            제품 더 보기
                        </a>
                    </div>
                    <div className="col-10 mt-2 mb-1 ">
                        <h2 className="title-4">금황한지산업이 걸어온 길</h2>
                        <CompanyTimeline />
                    </div>
                    <div className="col-12 mt-2 mb-4">
                        <h2 className="title-4">믿을 수 있는 금황한지산업</h2>
                        <p>인증서 및 시험성적서 목록</p>
                        <div className="CertificatesWrapper">
                            <Certificates />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
