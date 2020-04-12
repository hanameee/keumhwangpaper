const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
    pathPrefix: "/keumhwangpaper",
    siteMetadata: {
        title: "금황한지산업",
        description: "금황한지산업 홈페이지에 오신 것을 환영합니다.",
        siteUrl: "http://www.koreanpaper.kr",
        contact: {
            ceo: "이관모",
            address: "경기도 평택시 청북읍 고잔5길 67-46",
        },
        menuLinks: [
            {
                name: "회사 소개",
                link: "/",
            },
            {
                name: "한지 이야기",
                link: "/story",
            },
            {
                name: "비즈니스",
                link: "/business",
            },
            {
                name: "Contact",
                link: "/contact",
            },
        ],
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-transformer-json",
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/data`,
                name: "data",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/images`,
                name: "images",
            },
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: guid ? guid : "UA-XXX-1",
                // Puts tracking script in the head instead of the body
                head: false,
            },
        },
    ],
};
