import React from "react";
import "./About.css";

function About(props) {
    return (
        <div className="about__container">
            <h1>
                도서 검색 테스트용 with React.
            </h1>
            <h3>
                출처: 노마드코더, 네이버 API, Lotts Blog 참조
            </h3>
            <span>lee jaekwun 2021</span>
        </div>
    );
}

export default About;