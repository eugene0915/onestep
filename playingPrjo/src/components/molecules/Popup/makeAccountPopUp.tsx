import { useEffect, useState } from "react";
import "../../../css/LogInPopUp.css";
import Modal from "@mui/material/Modal";
import { auth } from "../../../firebase";
import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
    GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, RecaptchaVerifier, signInWithPhoneNumber,
} from 'firebase/auth';

interface Props {
    visible: boolean;
    setVisible: any;

}

const MakeAccountPopUp = (props: Props) => {

    // 이메일 회원가입
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            alert("회원가입이 완료되었습니다.")
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }

    };


    return (<>
        <Modal open={props.visible} >
            <>
                <div onClick={() => { props.setVisible(false) }}>x 버튼</div>
                <div className="sign-up-pop-up">
                    <div className="rectangle-div1" />
                    <div className="welcome-div">WELCOME</div>
                    <img className="logo6-icon" alt="" src="../logo6.svg" />
                    <div className="div">
                        <input className="rectangle-div2" />
                        <div className="div1">비밀번호 확인</div>
                    </div>
                    <div className="div2">
                        <input className="rectangle-div6"
                            type="text"
                            id="password"
                            name="password"
                            onChange={(e) => { setRegisterPassword(e.target.value) }} />
                        <div className="div1">비밀번호</div>
                    </div>
                    <div className="div4">
                        <input className="rectangle-div2"
                            type="text"
                            id="email"
                            name="email"
                            onChange={(e) => { setRegisterEmail(e.target.value) }} />
                        <div className="div5">이메일</div>
                    </div>
                    <div className="div6">
                        <span>*</span>
                        <span className="span">
                            문자와 숫자를 포함하여 8자리 이상으로 비밀번호를 만드세요.
                        </span>
                    </div>
                    <button className="complete-button-off">
                        <div className="rectangle-div5" />
                        <b className="sign-up-b" onClick={register}>완료</b>
                    </button>
                </div>
            </>
        </Modal>
    </>)

};

export default MakeAccountPopUp;