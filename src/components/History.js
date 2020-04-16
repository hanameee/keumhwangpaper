import React from "react";
import "./History.css";
const CompanyTimeline = () => {
    return (
        <ul className="cbp_tmtimeline">
            <li>
                <time className="cbp_tmtime">
                    <span>1988년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-phone"></div>
                <div className="cbp_tmlabel">
                    <p>- 기계한지 제조기 제작 및 설치</p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>1991년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-screen"></div>
                <div className="cbp_tmlabel">
                    <p>
                        - 기계한지 포장지를 시작으로 색한지 및 창호용 건자재용
                        한지 생산
                    </p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>1992년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-mail"></div>
                <div className="cbp_tmlabel">
                    <p>
                        - 전통한지인 수록지를 기계지와 겸용으로 생산하면서
                        전통한지의 노하우를 기계산업한지에 적용
                    </p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>1998년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-mail"></div>
                <div className="cbp_tmlabel">
                    <p>
                        - 여과용 필터지 발명
                        <br />- 기능성 한지황토벽지 및 장판지 특허출원하여 건축
                        자재로 판매 영역 확대
                    </p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>2003년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-mail"></div>
                <div className="cbp_tmlabel">
                    <p>
                        - 항산화물질인 탄화리그닌 개발
                        <br />- 건강 기능성 상품으로 한지제품 영역 확대
                    </p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>2006년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-mail"></div>
                <div className="cbp_tmlabel">
                    <p>- 기름먹는한지 시리즈 개발</p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>2014년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-mail"></div>
                <div className="cbp_tmlabel">
                    <p>
                        - 부직포 접착이 가능한 한지 개발 (황토한지마스크용 한지)
                    </p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>2015년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-mail"></div>
                <div className="cbp_tmlabel">
                    <p>
                        - 마스크용황토한지 방사율, 방사에너지 시험 KIFA
                        <br />
                        - 황토한지(마스크) 항균시험(대장균, 녹농균, 폐렴균) KIFA
                        <br />
                        - 황토마스크용한지 탈취시험 KIFA
                        <br />
                    </p>
                </div>
            </li>
            <li>
                <time className="cbp_tmtime">
                    <span>2020년</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-mail"></div>
                <div className="cbp_tmlabel">
                    <p>
                        - 한지추출물 검은황토 항바이러스시험(H1N1 Human
                        Influenza A) KTR
                    </p>
                </div>
            </li>
        </ul>
    );
};

export default CompanyTimeline;
