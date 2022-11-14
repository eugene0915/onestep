import { useEffect } from "react";
import "../../../css/LogInPopUp.css";
import MakeAccountPopUp from "./makeAccountPopUp";
import Modal from "@mui/material/Modal";

interface Props {
    visible: boolean;
    setVisible: any;

}

const LogInPopUp = (props: Props) => {
    return (<>
        <Modal open={props.visible} >

            <div className="log-in-pop-up" data-animate-on-scroll>
                <div className="rectangle-div2" />
                <div onClick={() => { props.setVisible(false) }}>x 버튼</div>

                <div className="forgot-your-pasword">비밀번호 찾기</div>
                <img className="icon" alt="" src="../-.svg" />
                <div className="div">
                    <span>{`아직 계정이 없으신가요? `}</span>
                    <span className="span">회원가입</span>
                </div>
                <div className="div1">
                    <input className="rectangle-div3"
                        placeholder="이메일" />

                </div>
                <div className="div3">
                    <input className="rectangle-div3"
                        placeholder="비밀번호" />

                </div>

                <div className="welcome-div">WELCOME</div>

                <img className="logo6-icon" alt="" src="../logo6.svg" />
                <button className="log-in-button2" autoFocus>
                    <div className="log-in-button3">
                        <div className="rectangle-div5" />
                        <b className="log-in-b2">로그인</b>
                    </div>
                </button>
            </div>

        </Modal>
    </>)

};

export default LogInPopUp;