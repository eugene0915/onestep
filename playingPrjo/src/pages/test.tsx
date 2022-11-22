import React, { useState, useEffect } from "react";

const TestPage = () => {

    const [getResult, setResult] = useState([])

    const WholeData = [{ name: 1, uid: 1 }, { name: 2, uid: 2 }, { name: 3, uid: 3 }, { name: 4, uid: 4 }, { name: 5, uid: 5 }, { name: 6, uid: 6 }, { name: "ball", uid: 100 }, { name: "lina", uid: 200 }, { name: "ppp", uid: 700 }]

    const dayone = [{ name: "ball", uid: 100 }, { name: "lina", uid: 200 }, { name: "ppp", uid: 700 }, { name: 7, uid: 7 }]
    // const daytwo = [{ name: "ball", uid: 1 }, { name: "lina", uid: 2 }, { name: "zzz", uid: 3 }, { name: "hannah", uid: 4 }]

    const result = dayone.filter(one => WholeData.some(whole => whole.uid === one.uid));
    console.log(result, "result");


    useEffect(() => {
        sameUid();
        console.log(getResult, "getResult")
    },)

    function sameUid() {
        result.map(list =>
            // <div>겹치는 데이터는 :{list.name}</div>
            setResult(list.name)
        )

    }



    return (<>
        {WholeData.map(wholeList =>

            <div>모든 데이터를 돌리면 : {wholeList.name}</div>
        )}


    </>)

};

export default TestPage;