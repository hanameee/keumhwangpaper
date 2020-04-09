const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
    pathPrefix: "/keumhwangpaper",
    siteMetadata: {
        title: "금황한지산업",
        description: "금황한지산업 홈페이지에 오신 것을 환영합니다.",
        contact: {
            phone: "010-4074-3188",
            email: "geumwhang@gmail.com",
        },
        menuLinks: [
            {
                name: "회사 소개",
                link: "/",
                // link: "/services",
            },
            {
                name: "한지 이야기",
                link: "/",
                // link: "/team",
            },
            {
                name: "비즈니스",
                // link: "/testimonials",
                link: "/",
            },
            {
                name: "Contact",
                // link: "/contact",
                link: "/",
            },
        ],
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-transformer-json",
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
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
