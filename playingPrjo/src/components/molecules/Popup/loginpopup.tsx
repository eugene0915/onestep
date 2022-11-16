import React, { useState, useEffect, useRef, createRef } from "react";
import "../../../css/LogInPopUp.css";
import MakeAccountPopUp from "./makeAccountPopUp";
import Modal from "@mui/material/Modal";
import { auth } from "../../../firebase";
import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,
    GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, RecaptchaVerifier, signInWithPhoneNumber,
} from 'firebase/auth';
import KakaoLogin from "react-kakao-login";
import NaverLogin from "react-login-by-naver";

declare global {
    interface Window {
        kakao0: any;
        naver0: any;
    }
}

interface Props {
    visible: boolean;
    setVisible: any;

}

const LogInPopUp = (props: Props) => {
    const clickKakao = useRef(0);
    const clickNaver = useRef(0);

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



    // 카카오로 로그인 하기
    const jsKey = "29ae17c5f7e438bd91857d0223f1c9a4";
    const loginKAKAO = () => {
        console.log("카카오 클릭")
        console.log(clickKakao.current, "clickKakao.current")
        clickKakao.current.onButtonClick();

    };


    // 페이스북으로 로그인 하기
    const loginFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((data) => {
                console.log(data, "facebook login")
                alert(data.user.displayName + "님 로그인 되었습니다.")
            }).catch((err) => {
                console.log(err.message, "facebook login err")
            })

    };

    //네이버로 로그인 하기
    // 커다란 네이버 버튼 숨기고, 자체적으로 만든 로고에서 click event가능하게 기능 구현 필요. 
    // ref를 이용해 시도하려고 했으나 아직 해결법을 찾지 못했습니다. 
    const loginNAVER = () => {

        console.log("clickNaver", clickNaver);
        clickNaver.current.click();

        // $(document).on("click", "#naverLogin", function () {
        //     var btnNaverLogin = document.getElementById("naverIdLogin").firstChild
        //     btnNaverLogin.click();
        // });
    };

    //네이버로 로그인 하기
    // function loginNaver() {
    //     return (

    //         // Naver();
    //         // UserProfile();
    //     )
    // };

    // const { naver0 } = window;


    // useEffect(() => {
    //     loginNaver();
    //     console.log("dddd")
    // }, [])
    // function Naver() {
    //     console.log("네이버로 로그인 클릭! ")
    //     const naverLogin = new naver0.LoginWithNaverId({
    //         clientId: "E6hI9nxQBEClyVKXOQ3r",
    //         callbackUrl: "http://localhost:5173",
    //         isPopup: false,
    //         loginButton: { color: 'green', type: 3, height: '50' },
    //         callbackHandle: false
    //     });
    //     console.log(naverLogin, "naverLogin")
    //     naverLogin.init();
    //     console.log("naverLogin 여기까지 왔나")
    // };

    // const UserProfile = () => {
    //     window.location.href.includes('access_token') && GetUser();
    //     function GetUser() {
    //         const location = window.location.href.split('=')[1];
    //         const form_data = new FormData();
    //         const item = {
    //             token: location.split('&')[0],

    //         };

    //         for (const key in item) {
    //             form_data.append(key, item[key]);
    //         }
    //         fetch('https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=E6hI9nxQBEClyVKXOQ3r&client_secret=Ili9WxoOTe&code=' + item, {
    //             method: 'POST',
    //         }).then((res) => res.json())
    //             .then((resjson) => {
    //                 if (resjson.responseCode == '403') {


    //                     // 사용자가 없으니 회원가입 창으로
    //                 } else if (resjson.responseCode == '200') {
    //                     // 로그인이 되었으니 이 후 process 로 이동
    //                 }
    //             }).catch((err) => console.log(err));
    //     }
    // };



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
                        <div className="kakao-icon" onClick={loginKAKAO} >
                            <KakaoLogin style={{ display: "none" }} ref={clickKakao} token={jsKey} onSuccess={() => { console.log("로그인성공"); }} onFail={(err) => {
                                console.log("로그인실패", err);
                            }}>
                            </KakaoLogin>
                        </div>

                        <div id="naverIdLogin">
                            <NaverLogin ref={clickNaver} clientId="E6hI9nxQBEClyVKXOQ3r" callbackUrl="http://localhost:5173"
                                render={(props) => <div className="naver-icon"></div>}
                                onSuccess={(naverUser) => { console.log(naverUser, 'naver'); alert(naverUser.name + "님 로그인 성공하였습니다."); }}
                                onFailure={() => console.log('naver login fail')}></NaverLogin>
                        </div>
                        <div className="naver-icon" onClick={loginNAVER}></div>
                        <div className="facebook-icon" onClick={loginFacebook} />
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