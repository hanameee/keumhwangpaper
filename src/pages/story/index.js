import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faScroll } from "@fortawesome/free-solid-svg-icons";
import { Paper } from "@material-ui/core";
import Img from "gatsby-image";

const Story = (props) => {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "stories" } }) {
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
    return (
        <Layout bodyClass="page-services">
            <SEO title="Services" />
            <div className="intro">
                <div className="container">
                    <h1>한지 이야기</h1>
                    <p>
                        한지의 원료인 닥나무를 비롯한 다양한 한지의 효능에 대해
                        소개합니다.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="storiesContainer mt-4">
                    <div className="story-box">
                        <div className="story mb-2">
                            <h2 className="storyTitle">
                                <FontAwesomeIcon icon={faTree} />
                                원료(닥나무) 이야기
                            </h2>
                            <div className="storyContent">
                                닥나무는 산기슭의 양지쪽이나 밭둑에서 자라며
                                주로 종이원료로 사용되는 식물로 성질은 차고 맛은
                                달며 독이 없는 약재로 한방에서는 열매를
                                양기부족, 수종(몸이 붓는 부종)의 치료제로 썼으며
                                닥나무 어린잎은 식용으로 사용하였다.
                            </div>
                            <h3 className="storySubTitle">닥나무의 효능</h3>
                            <ul>
                                <li>1) 음위를 고친다</li>
                                <li>2) 근골에 힘을 나게 한다</li>
                                <li>3) 양기를 돕는다</li>
                                <li>4) 허리 아픈 곳을 고친다</li>
                                <li>5) 얼굴의 색을 희고 맑게 한다 </li>
                                <li>6) 눈을 밝게한다 </li>
                                <li>7) 얼굴 부은데 효과가 있다 </li>
                                <li>8) 여성의 자궁 출혈을 멈추게 한다</li>
                            </ul>
                        </div>
                        <div className="storyImage mb-2">
                            <Paper elevation={3}>
                                <Img
                                    fluid={
                                        images.allFile.edges[0].node
                                            .childImageSharp.fluid
                                    }
                                    loading="eager"
                                />
                            </Paper>
                        </div>
                    </div>
                    <div className="story-box">
                        <div className="story mb-2">
                            <h2 className="storyTitle">
                                <FontAwesomeIcon icon={faScroll} />
                                한지 이야기
                            </h2>
                            <div className="storyContent">
                                전통한지의 원료인 닥나무가 아토피성 피부염의
                                예방과 치료에 효과가 있다는 연구 결과가 나왔다.
                                전북 전주시는 한국한의학연구원과
                                전주생물소재연구소에 맡겨 닥나무의 효능을 분석한
                                결과 닥나무 잎과 속대의 추출물 등이 아토피성
                                피부염의 원인 물질이 활성화하는 것을 막고
                                면역력을 높이는 것으로 나타났다고 19일 밝혔다.
                                아토피성 피부염으로 인한 부종이나 출혈, 피부
                                각질화를 억제하는 효과도 냈다. 이와 함께
                                닥나무를 찐 물은 각종 세포를 증식 또는
                                활성화하는 데 관여해 아토피성 피부염에 대한
                                면역력을 높이는 기능을 하는 것으로 분석됐다.
                                (연합뉴스)
                                <h3 className="storySubTitle">
                                    기계 한지 이야기:
                                </h3>
                                한지산업은 1957년 전북도에만 315개에 이르고
                                종사자수가 4978명에 이르렀으나, 1977년 한지
                                제조소와 농가는 약 160호로 감소하였으며, 2006년
                                문화관광부 한지문화산업 자원실태조사 보고서에
                                따르면 전국의 수제 및 기계한지 제조업체는
                                30여개로 크게 축소되었으며, 현재 한지를 산업에
                                응용할 수 있는 생산기반을 가진 업체는
                                금황한지산업을 비롯한 전국 3개업체만 존재한다.
                                <h3 className="storySubTitle">
                                    기능성 한지 이야기:
                                </h3>
                                한지의 본래기능인 항균기능과 탈취기능을 상당부분
                                개선한 한지제품으로 자사 기능성 원료인
                                한지추출물(검은황토)를 한지에 혼합하여 기계화된
                                한지설비로 대량생산한 것으로 항균, 탈취 등이
                                필요한 필터 등 설비의 핵심재료로 활용이 가능한
                                첨단소재 한지이다.
                            </div>
                        </div>
                        <div className="storyImage mb-2">
                            <Paper elevation={3}>
                                <Img
                                    fluid={
                                        images.allFile.edges[1].node
                                            .childImageSharp.fluid
                                    }
                                    loading="eager"
                                />
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Story;
