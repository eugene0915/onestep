import React from "react";
import '../css/Start.css';
import "../css/global.css";
import "../assets/Rectangle1.png"
import NaverLogin from "react-login-by-naver";


// there is unsolved problem with naver login connecting, 
// this is the test page for it.

const NaverLoginCallbackPage = () => {

    const popup = () => {

        window.close();
        <NaverLogin clientId="E6hI9nxQBEClyVKXOQ3r" callbackUrl="http://localhost:5173"
            render={(props) => <div className="naver-icon" ></div>}
            onSuccess={(naverUser) => { console.log(naverUser.name, 'naver11'); alert(naverUser.name + " 님 로그인 성공하였습니다."); }}
            onFailure={() => console.log('naver login fail')}></NaverLogin>

    };

    return (<>

        <button onClick={popup}>네이버 아이디 연동에 동의</button>


    </>)

};

export default NaverLoginCallbackPage;