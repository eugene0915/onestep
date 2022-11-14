import React, { useState } from "react";
import "../css/Start.css";
import LogInPopUp from "../components/molecules/Popup/loginpopup";
import MakeAccountPopUp from "../components/molecules/Popup/makeAccountPopUp";

const LoginPage = () => {
    const [popup, setPopup] = useState(false);
    const [makePopup, setMakePopup] = useState(false);


    const login = () => {
        setPopup(true);
    }
    const makeAccount = () => {
        setMakePopup(true);
    }

    return (<>
        <span>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            <div className="start-div">
                <img className="rectangle-icon" alt="" src="../Rectangle1.png" />
                <div className="sign-in-button">
                    <div className="rectangle-div" />
                    <b className="log-in-b" onClick={makeAccount}>회원가입</b>
                </div>
                <button className="log-in-button" autoFocus>
                    <div className="log-in-button1">
                        <div className="rectangle-div" />
                        <b className="log-in-b1" onClick={login}>로그인</b>
                    </div>
                </button>
                <img className="logo1-icon" alt="" src="../logo1.png" />
            </div>

        </span>
        <LogInPopUp visible={popup} setVisible={setPopup} />
        <MakeAccountPopUp visible={makePopup} setVisible={setMakePopup} />

    </>
    );
};

export default LoginPage;
