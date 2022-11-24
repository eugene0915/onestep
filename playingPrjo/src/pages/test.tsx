import { useEffect } from "react";


const TestPage = () => {

    const WholeData = [{ name: 1, uid: 1 }, { name: 2, uid: 2 }, { name: 3, uid: 3 },
    { name: "ball", uid: 100 }, { name: "lina", uid: 200 }, { name: "ppp", uid: 700 }]

    const dayone = [{ name: "ball", uid: 100 }, { name: "lina", uid: 200 }, { name: "ppp", uid: 700 }, { name: 7, uid: 7 }]

    const total = WholeData.concat(dayone)


    // const result = total.filter((item, idx) => total.indexOf(item) !== idx)
    //     .reduce((prev, curr) => prev.filter(item => item !== curr), total)

    // console.log(result, "result")


    // const depArray = [100, 100, 80, 80, 70, 90, 71];
    // const resultNumber = depArray.filter((item, idx) => depArray.indexOf(item) !== idx)
    //     .reduce((prev, curr) => prev.filter(item => item !== curr), depArray)

    // console.log(resultNumber, "resultNumber")

    // const depArray = [100, 100, 80, 80, 70, 90, 71, 80];
    let duplicationArray = total.filter((e, i, arr) => {
        const lastIndex = arr.lastIndexOf(e);

        console.log(lastIndex, "lastindex")
        if (lastIndex !== -1 && lastIndex !== i) return true;
        else return false;
    })
    // duplicationArray = [...new Set(duplicationArray)]
    // const newArray = total.filter((e) => {
    //     if (duplicationArray.indexOf(e) === -1) return true;
    //     else return false;
    // });

    console.log(duplicationArray, "duplicationArray"); // [100, 80]
    // console.log(newArray, "newArray");     // [70, 90, 71]

    //https://okky.kr/articles/1359719
    //https://stackoverflow.com/questions/74556019/react-question-how-to-omit-duplicate-data-in-array
};

export default TestPage;