import React from "react";
import '../css/Start.css';
import "../css/global.css";
import "../assets/Rectangle1.png"

// declare global {
//     interface Window {
//         kakao0: any;
//     }
// }
const TestPage = () => {
    const jsKey = "29ae17c5f7e438bd91857d0223f1c9a4";
    const LoginKakao = () => {


        console.log(jsKey, "jekey")
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


        <button onClick={LoginKakao}>카카오 로그인</button>

    </>)

};

export default TestPage;