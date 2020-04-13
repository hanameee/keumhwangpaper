import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import ProductCard from "./ProductCard";

function Products(props) {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "products" } }) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fixed(width: 150) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `);
    const productInfo = {
        "0": [
            "기능성한지",
            "고객사 요구조건에 따라 항균율 99%의 한지까지 생산이 가능하며, 현재 항균율 90% 수준의 한지원단을 활용한 다양한 마스크 리필필터가 약 8개 업체를 통해 생산되고 있습니다.",
        ],
        "1": [
            "부직포접합용기능성한지",
            "미세먼지 한지마스크 자체생산 노하우를 바탕으로 기존 한지 대비 초음파접합이 가능한 특수한지",
        ],
        "2": [
            "한지기름종이",
            "목재 펄프에 닥 펄프의 한지 원료가 혼합된 혼합 지료에 소정 비율의   녹차잎이 혼합 고해하여 일정 기간 숙성시킨 다음 통상의 초지 방법  으로 기름 흡착 시트를 형성한다. 평면 시트 상에 안정된 겹지 형태의  반투명 다공 무늬 기름 흡착 시트를 구현함으로써, 한지원료(닥 펄프)와  녹차 잎 성분이 한데 어우러져 기름이나 노폐물을 흡착하는 기름받이 기능을 수행하게 된다.",
        ],
        "3": [
            "한지황토벽지",
            "닥펄프에 황토, 氣玉분, 게르마늄 성분의 흑운모를 혼합하여 생산한 한지 황토 옥(玉)벽지로 접착제를 제외한 어떠한 화학적 물질도 사용하지 않은 천연제품이다. 방사율 91%, 대장균에 의한 항균 97.5%, 탈취율 97%, PH 5.68%의   시험수치이며 황토벽지마감제로 사용하면 황토집을 따로 지을 필요없이  황토자연의 향 그대로 자연미를 느낄 수 있다.",
        ],
        "4": [
            "한지방수매트",
            "제품은 닥펄프에 황토, 한지파우더(항산화물질)등을 혼합하여 생산한 메트로 식품용 에폭시 접착제를 제외한 어떠한 화학적 물질도 사용하지 않은 천연제품이다. 원적외선 방사율 99%, 대장균, 녹농균, 폐렴균에 의한 항균 99%,   탈취율 97%의 항균기능성 방수제품으로 의료병원 및 요양병원 등 시설의 환자 및 입원자의 침상 배트로 사용되는 제품입니다.",
        ],
        "5": [
            "한지파우더",
            "한지파우더는 천연재료를 사용한 항균률(녹농균, 대장균, 폐렴균 등) 99%의 기능성 효과를 가진 2000메시 단위의 파우더이며, 인체에 무해하고 각종 세균을 제거하는 등 다양한 특징을 가진 한지 기능성 제품입니다.",
        ],
    };
    console.log(productInfo, "얍");
    return (
        <>
            {images.allFile.edges.map(({ node }, idx) => (
                <ProductCard
                    image={node.childImageSharp.fixed}
                    key={idx}
                    name={productInfo[idx][0]}
                    info={productInfo[idx][1]}
                />
            ))}
        </>
    );
}

export default Products;
