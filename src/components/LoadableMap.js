import loadable from "@loadable/component";

const LoadableMap = loadable(() => import("./NaverMap"));

function LoadableMap() {
    return (
        <div>
            <LoadableMap />
        </div>
    );
}

export default LoadableMap;
