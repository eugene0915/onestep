import { useEffect, useState, useRef } from "react";
import _ from "lodash";


const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        console.log(element.current);
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }

        return () => {
            if (element.current) {
                element.current.removeEventLister("click", onClick);
            }
        };
    }, []);

    return element;
};

const TestPage = () => {


    const dayone = [
        { name: 1, uid: 1 },
        { name: 2, uid: 2 },
        { name: 3, uid: 3 },
        { name: "ball", uid: 100 },
        { name: "lina", uid: 200 },
        { name: "ppp", uid: 700 },
    ];

    const daytwo = [
        { name: "ball", uid: 100, title: "aaa" },
        { name: "lina", uid: 200, title: "aaa" },
        { name: "ppp", uid: 700 },
        { name: 7, uid: 7 },
    ];

    const total = dayone.concat(daytwo);

    // const newUnion = _.union(dayone, daytwo);
    // console.log(JSON.stringify(newUnion), "newUnion Json");
    // console.log(newUnion, "newUnion");
    // console.log(total, "total");

    // const groupbylODASH = _.groupBy(total, "uid")

    // //uid로 묶어서, 공통인거 뺐고 --> 이제 바구니에 2개 이상 든 애들을 골라서 --> 삭제만 하면 된다.
    // // const filerGroup = _.countBy(groupbylODASH, 'length')

    // // console.log(filerGroup, "filterGroup")

    // Object.keys(groupbylODASH).forEach(key => {
    //     if (groupbylODASH[key].length < 2) {
    //         delete groupbylODASH[key];
    //     }
    // });

    // console.log(groupbylODASH, "groupbylODASH")

    let uniqueList = [];
    let dupList = [];

    Array.prototype.contains = function (item) {
        let filtered_item = this.filter((i) => {
            return i.uid === item.uid
        });
        return !!filtered_item.length;
    }

    function contains(list, item) {
        let filtered_item = list.filter((i) => {
            return i.uid === item.uid
        });
        return !!filtered_item.length;
    }

    function pushToUniqueList(item) {
        if (!uniqueList.contains(item)) uniqueList.push(item);
    }

    function pushToDuplicateList(item) {
        if (!dupList.contains(item)) dupList.push(item);
    }

    for (let i = 0; i < total.length; i++) {
        if (uniqueList.contains(total[i])) {
            pushToDuplicateList(total[i]);
        } else {
            pushToUniqueList(total[i]);
        }
    }

    console.log('Duplicate list is ', dupList);
    console.log('Unique list is ', uniqueList);


    function isCherries(fruit) {
        return fruit.uid !== dupList.uid;
    }

    console.log(dayone.filter(isCherries), "test!!!");
    // { name: 'cherries', quantity: 5 }

    // const unique = total.reduce((acc, item) => {
    //   const index = _.findIndex(acc, item.name);
    //   console.log(index, "index");
    //   console.log(acc, "acc");
    //   console.log(item.name, "item.name");

    //   if (index === -1) {
    //     acc.push(item.name);
    //   }
    //   return acc;
    // }, []);

    // console.log(unique, "unique");

    // let duplicationArray = total.filter((uid, i, arr) => {
    //     let ind = total.lastIndexOf(total.arr);
    //     console.log(ind, "ind")

    //     if (ind !== -1 && ind !== i) return true;
    //     else return false;
    // })
    // console.log(duplicationArray, "duplicationArray")

    //okky에서 달아준 답변.. 대박
    //   const result = total
    //     .reduce((arr, now) => {
    //       const nowStr = JSON.stringify(now);
    //       console.log(nowStr, "nowStr");
    //       const idx = arr.indexOf(nowStr);
    //       console.log(idx, "idx");
    //       idx > -1 ? arr.splice(idx, 1) : arr.push(nowStr);
    //       return arr;
    //     }, [])
    //     .map((j) => JSON.parse(j));

    //   console.log(result, "result");

    // const result = total.reduce((fanalArray, cur) => {

    //     const obj = fanalArray.find((item) => item.uid === cur.uid)
    //     console.log(obj, "obj")

    //     if (obj == undefined) {
    //         return
    //     }
    //     return fanalArray

    // }, [])

    // console.log(result, "result")

    // let duplicationArray = total.filter((e, i, arr) => {
    //     const lastIndex = arr.lastIndexOf(e);

    //     console.log(lastIndex, "lastindex")
    //     if (lastIndex !== -1 && lastIndex !== i) return true;
    //     else return false;
    // })
    // duplicationArray = [...new Set(duplicationArray)]
    // const newArray = total.filter((e) => {
    //     if (duplicationArray.indexOf(e) === -1) return true;
    //     else return false;
    // });

    // console.log(duplicationArray, "duplicationArray"); // [100, 80]
    // console.log(newArray, "newArray");     // [70, 90, 71]

    // const unique = [
    //     ...new Map(total.map((item) => [item["uid"], item])).values(),
    // ];
    // console.log("original items", total.length, total)
    // console.log("unique items", unique.length, unique)

    // const result = total.filter((item, idx) => total.indexOf(item) !== idx)
    //     .reduce((prev, curr) => prev.filter(item => item !== curr), total)

    // console.log(result, "result")

    // const depArray = [100, 100, 80, 80, 70, 90, 71];
    // const resultNumber = depArray.filter((item, idx) => depArray.indexOf(item) !== idx)
    //     .reduce((prev, curr) => prev.filter(item => item !== curr), depArray)

    // console.log(resultNumber, "resultNumber")

    //https://okky.kr/articles/1359719
    //https://stackoverflow.com/questions/74556019/react-question-how-to-omit-duplicate-data-in-array
    const sayHello = () => console.log("hello");
    const title = useClick(sayHello);

  return <h1 ref={title}>dddd</h1>;
};

export default TestPage;
