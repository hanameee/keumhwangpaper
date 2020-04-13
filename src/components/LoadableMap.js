import React from "react";
import loadable from "@loadable/component";

const LoadableMap = loadable(() => import("./ContactMap"));

function LoadableNaverMap() {
    return (
        <div>
            <LoadableMap />
        </div>
    );
}

export default LoadableNaverMap;
