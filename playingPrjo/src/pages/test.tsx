import React from "react";
import '../css/Start.css';
import "../css/global.css";
import "../assets/Rectangle1.png"

const TestPage = () => {

    return (<>

        dsds
        <div className="start-div">
            <img className="rectangle-icon" alt="" src="../assets/Rectangle1.png" />
            <div className="sign-in-button">
                <div className="rectangle-div" />
                <b className="log-in-b">회원가입</b>
            </div>
            <button className="log-in-button" autoFocus>
                <div className="log-in-button1">
                    <div className="rectangle-div" />
                    <b className="log-in-b1">로그인</b>
                </div>
            </button>
            <img className="logo1-icon" alt="" src="../logo1.png" />
        </div>
    </>)

};

export default TestPage;