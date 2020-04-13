import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

const ContactMap = () => {
    return (
        <RenderAfterNavermapsLoaded ncpClientId={process.env.GATSBY_MAP_ID}>
            <NaverMap
                mapDivId={"maps-getting-started-uncontrolled"}
                style={{
                    width: "100%",
                    height: "400px",
                }}
                defaultCenter={{
                    lat: 37.042577,
                    lng: 126.884917,
                }}
                defaultZoom={20}
                draggable={false}
                zoomControl={true}
            />
        </RenderAfterNavermapsLoaded>
    );
};

export default ContactMap;
