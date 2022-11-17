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
    // connected MakeAccount pop up window inside the Log in pop up window
    // when you click "Don't you have an account yet?" links, MakeAccount pop up window shows
    const [makeAccount, setMakeAccount] = useState(false);

    const makeaccount = () => {
        setMakeAccount(true);
        props.setVisible(false);
    };


    // 이메일 로그인
    // connected with firebase Authentication, we can connect our user account, and manage it.
    // when user make account by using MakeAccountPopup, they can log in here, 
    // simply input their email and password 
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, loginEmail, loginPassword
            );
            console.log("user Information is --> " + user.user.email);
            alert("Hello " + user.user.email + ", welcome! ")

        }
        catch (err) {
            console.log(err.message)
            alert("ID or Password is incorrect.")
        }

    };


    // 전화번호로 로그인하기 // 추가 화면 필요. 
    // Waiting to make "Log in with Phone Number" pop up UI 
    // when click a phone button with a pink background, user can make account using their phone number
    // and it will store in the firebase authentication.
    const countryCode = "+82";
    const [phoneNumb, setPhoneNumb] = useState(countryCode);
    const [expandForm, setExpandForm] = useState(false);
    const [OTP, setOTP] = useState("");
    const [proveMsg, setProveMsg] = useState("");


    const loginPhone = () => {
        const inputNumb = prompt(countryCode + "전화번호를 입력해주세요")
        console.log(inputNumb, "inputNumb")
    };



    // 페이스북으로 로그인 하기
    // when click facebook button, they show us their own log in pop up
    const loginFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
            .then((data) => {
                console.log(data, "facebook login")
                alert("Hi!" + data.user.displayName + ", you are logged in.")
            }).catch((err) => {
                console.log(err.message, "facebook login err")
            })

    };


    // 카카오로 로그인 하기
    // when click yellow kakao button, kakao shows their own log in pop up 
    // https://developers.kakao.com/
    // Below, jsKey is the Javascript key kakao developers page give us.
    // this part connected with <script>code inside the index.html file (you can check the 17th,18th line)

    // kakao authenticaion give us their own button, but that is hard to custom, 
    // so using ref, hided its kakao button and changed into our own custom button.

    // also installed npm i react-login-by-naver
    //https://www.npmjs.com/package/react-kakao-login 

    const jsKey = "29ae17c5f7e438bd91857d0223f1c9a4";
    const loginKAKAO = () => {
        console.log("카카오 클릭")
        console.log(clickKakao.current, "clickKakao.current")
        clickKakao.current.onButtonClick();

    };



    //네이버로 로그인 하기
    // 커다란 네이버 버튼 숨기고, 자체적으로 만든 로고에서 click event가능하게 기능 구현 필요. 
    // ref를 이용해 시도하려고 했으나 아직 해결법을 찾지 못했습니다. 

    // when click green naver button, naver shows their own log in pop up 
    // like kakao button, I tried hide big unsuitable naver button and replace into our own custom button, 
    // but it was hard to solve the problem.
    // that is why you can check two green button, left one is unchangable naver button the one that i want to hide, 
    // right one is the our own custome button 

    // this part connected with <script>code inside the index.html file (you can check the 14th,15th line)

    // also installed npm i react-kakao-login
    //https://www.npmjs.com/package/react-login-by-naver 

    // there is another problem relate to callback 

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
                {/* for close the pop-up window, a temporary button. you can check above the pop up window  */}
                <div onClick={() => { props.setVisible(false) }}>CLOSE BUTTON X</div>

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
                            <KakaoLogin style={{ display: "none" }} ref={clickKakao} token={jsKey} onSuccess={() => { console.log("Log in Success!"); }} onFail={(err) => {
                                console.log("Log in fail", err);
                            }}>
                            </KakaoLogin>
                        </div>

                        <div id="naverIdLogin">
                            <NaverLogin ref={clickNaver} clientId="E6hI9nxQBEClyVKXOQ3r" callbackUrl="http://localhost:5173"
                                render={(props) => <div className="naver-icon"></div>}
                                onSuccess={(naverUser) => { console.log('naver login user Infomation-->', naverUser); alert("hi!" + naverUser.name + ", success login."); }}

                                onFailure={() => console.log('naver login fail')}></NaverLogin>
                        </div>
                        <div className="naver-icon" onClick={loginNAVER}></div>
                        <div className="facebook-icon" onClick={loginFacebook} />
                    </div>
                    <a className="a">
                        {/* "Don't you have an account yet?" */}
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