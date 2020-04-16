import React from "react";
import Img from "gatsby-image";
function CertificateModal({ modalState, modalClickHandler }) {
    const { isVisible, visibleImage } = modalState;
    return !isVisible ? null : (
        <div
            className="certificateModalBackdrop"
            onClick={() => modalClickHandler(false, null)}
        >
            <div className="certificateModalImg">
                <Img fluid={visibleImage} loading="eager" />
            </div>
        </div>
    );
}

export default CertificateModal;
