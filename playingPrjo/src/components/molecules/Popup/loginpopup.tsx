import { useState, useEffect } from "react";
import "../../../css/LogInPopUp.css";
import MakeAccountPopUp from "./makeAccountPopUp";
import Modal from "@mui/material/Modal";
import { auth } from "../../../firebase";
import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
    GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, RecaptchaVerifier, signInWithPhoneNumber,
} from 'firebase/auth';
import KakaoLogin from "react-kakao-login";

declare global {
    interface Window {
        kakao0: any;
    }
}

interface Props {
    visible: boolean;
    setVisible: any;

}

const LogInPopUp = (props: Props) => {

    // 회원가입 팝업띄우기
    const [makeAccount, setMakeAccount] = useState(false);

    const makeaccount = () => {
        setMakeAccount(true);
        props.setVisible(false);
    };


    // 이메일 로그인
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, loginEmail, loginPassword
            );
            console.log(user.user.email, "로그인한 유저는");
            alert(user.user.email + "님 환영합니다.")

        }
        catch (err) {
            console.log(err.message, "로그인하다 발생한 에러메시지는")
            alert("아이디나 비밀번호가 불일치합니다.")
        }

    };


    // 전화번호로 로그인하기 // 추가 화면 필요. 
    const countryCode = "+82";
    const [phoneNumb, setPhoneNumb] = useState(countryCode);
    const [expandForm, setExpandForm] = useState(false);
    const [OTP, setOTP] = useState("");
    const [proveMsg, setProveMsg] = useState("");


    const loginPhone = () => {
        const inputNumb = prompt(countryCode + "전화번호를 입력해주세요")
        console.log(inputNumb, "inputNumb")
    };



    const jsKey = "29ae17c5f7e438bd91857d0223f1c9a4";

    useEffect(() => {
        console.log("dddd")
        // window.kakao0.init(jsKey);
    }, [])


    const LoginKakao = () => {

        console.log("ssss");

        if (!window.kakao0.isInitialized()) {
            window.kakao0.init(jsKey);
            console.log(window.kakao0.isInitialized());
            console.log("xxxx");

        }
        window.kakao0.Auth.login({

            scope: 'profile_nickname, account_email, gender',
            success: function (authObj: any) {
                console.log(authObj, "autoObj");
                window.kakao0.API.request({
                    url: '/v2/user/me',
                    success: res => {
                        const kakao_account = res.kakao_account;
                        console.log(kakao_account.profile.nickname, "kakao_account");

                    }
                });
            },
            fail: function (err) {
                console.log(err)
            }
        })


    }

    return (<>
        <Modal open={props.visible}>
            <>

                <div onClick={() => { props.setVisible(false) }}>x 버튼</div>
                <div className="sign-up-pop-up">
                    <div className="rectangle-div1" />
                    <div className="welcome-div">WELCOME</div>
                    <img className="logo6-icon" alt="" src="../logo6.svg" />

                    <div className="div2">
                        <input className="rectangle-div2"
                            onChange={(e) => { setLoginPassword(e.target.value) }} />
                        <div className="div1">비밀번호</div>
                    </div>
                    <div className="div4">
                        <input className="rectangle-div2"
                            onChange={(e) => { setLoginEmail(e.target.value) }} />
                        <div className="div5">이메일</div>
                    </div>
                    <a className="forgot-your-pasword">비밀번호 찾기</a>

                    <button className="complete-button-off">
                        <div className="rectangle-div5" />
                        <b className="sign-up-b" onClick={login}>로그인</b>
                    </button>
                    <div className="div8">
                        <div className="phone-icon" onClick={loginPhone} />
                        <div className="apple-icon" />
                        <KakaoLogin token={jsKey} onSuccess={() => { console.log("로그인성공"); }} onFail={(err) => {
                            console.log("로그인실패", err);
                        }}>
                            <div className="kakao-icon" onClick={LoginKakao} />
                        </KakaoLogin>
                        <div className="naver-icon" />
                        <div className="facebook-icon" />
                    </div>
                    <a className="a">
                        <span>{`아직 계정이 없으신가요? `}</span>
                        <span className="span1" onClick={makeaccount}>회원가입</span>
                    </a>
                </div>
            </>
        </Modal>
        <MakeAccountPopUp visible={makeAccount} setVisible={setMakeAccount} />
    </>)

};

export default LogInPopUp;