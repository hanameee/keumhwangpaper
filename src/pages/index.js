import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import Layout from "../layouts/index";
import Img from "gatsby-image";
import Example from "../components/Carousel";
const Home = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "intro" } }) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid(maxWidth: 500) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <Layout bodyClass="page-home">
            <SEO title="Home" />
            <Helmet>
                <meta
                    name="금황한지산업"
                    content="금황한지산업 소개 홈페이지"
                />
            </Helmet>
            <div className="intro pb-4">
                <div className="container">
                    <h1>금황한지산업에 오신 것을 환영합니다.</h1>
                    <p>
                        한지 (hanji, handmade traditional Korean paper made from
                        mulberry trees) 의 세계로 초대합니다.
                    </p>
                </div>
            </div>
            <Example />
            <div className="container img-container pt-6 pt-md-4">
                <div className="row justify-content-start">
                    <div className="col-12">
                        <h2 className="title-3 text-dark mb-4">회사 소개</h2>
                    </div>
                    {data.allFile.edges.map(({ node }) => (
                        <div className="col-6 col-md-4 mb-2">
                            <Img fluid={node.childImageSharp.fluid} />
                        </div>
                    ))}
                    <div className="col-12 my-2 btn-container">
                        <a href="/business" className="button">
                            제품 더 보기
                        </a>
                    </div>
                    <div className="col-12 col-md-10 mb-1">
                        <div className="card service service-teaser">
                            <div className="card-content">
                                <h2 className="title-4">소개글</h2>
                                <p>
                                    금황한지산업은, 1985년 ‘금황특수제지’에서
                                    시작하여 1988년부터 기계한지 제조회사로 전환
                                    증설 후 지금까지 30여년이 넘는 세월 동안
                                    오직 기능을 부가한 한지를 개발/생산에
                                    매진하여 전통한지와는 차별화된 기능 중심의
                                    고기능성 한지를 통하여 한지의 첨단화 및
                                    세계화를 목표로 하고 있습니다
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-10 mb-1">
                        <div className="card service service-teaser">
                            <div className="card-content">
                                <h2 className="title-4">회사 연혁</h2>
                                <p>
                                    금황한지산업은, 1985년 ‘금황특수제지’에서
                                    시작하여 1988년부터 기계한지 제조회사로 전환
                                    증설 후 지금까지 30여년이 넘는 세월 동안
                                    오직 기능을 부가한 한지를 개발/생산에
                                    매진하여 전통한지와는 차별화된 기능 중심의
                                    고기능성 한지를 통하여 한지의 첨단화 및
                                    세계화를 목표로 하고 있습니다
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-10 mb-1">
                        <div className="card service service-teaser">
                            <div className="card-content">
                                <h2 className="title-4">
                                    믿을 수 있는 금황한지산업
                                </h2>
                                <p>인증서</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;