import React from "react";
import Layout from "../layouts/index";

class NotFoundPage extends React.Component {
    render() {
        return (
            <Layout>
                <h1>404 Not Found</h1>
                <p>해당 페이지는 없는 주소입니다.</p>
            </Layout>
        );
    }
}

export default NotFoundPage;
