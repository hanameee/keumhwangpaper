import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";

const Story = (props) => {
    return (
        <Layout bodyClass="page-services">
            <SEO title="Services" />
            <div className="intro">
                <div className="container">
                    <h1>한지 이야기</h1>
                    <p>한지의 효능에 대해 소개합니다.</p>
                </div>
            </div>
            <div className="container">
                <div className="storyContainer mt-4">
                    <div className="storyImage"></div>
                    <h2 className="storyTitle">1. 원료소개(닥나무)</h2>
                    <div className="storyContent">
                        닥나무는 산기슭의 양지쪽이나 밭둑에서 자라며 주로
                        종이원료로 사용되는 식물로 성질은 차고 맛은 달며 독이
                        없는 약재로 한방에서는 열매를 양기부족, 수종(몸이 붓는
                        부종)의 치료제로 썼으며 닥나무 어린잎은 식용으로
                        사용하였다
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query ServicesQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/services/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;

export default Story;
