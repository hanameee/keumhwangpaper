import React from "react";
import SEO from "../../components/SEO";
import Layout from "../../layouts/index";
import Products from "../../components/Products";

const Business = (props) => (
    <Layout bodyClass="page-contact">
        <SEO title="Business" />
        <div className="intro intro-small">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>비즈니스</h1>
                        <p>금황한지산업의 다양한 제품들을 소개합니다.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h4 className="mt-4 mb-2">금황한지산업 제품소개</h4>
                    <Products />
                </div>
            </div>
        </div>
    </Layout>
);

export default Business;
