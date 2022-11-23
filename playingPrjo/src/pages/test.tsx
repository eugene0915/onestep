

const TestPage = () => {

    const WholeData = [{ name: 1, uid: 1 }, { name: 2, uid: 2 }, { name: 3, uid: 3 },
    { name: "ball", uid: 100 }, { name: "lina", uid: 200 }, { name: "ppp", uid: 700 }]

    const dayone = [{ name: "ball", uid: 100 }, { name: "lina", uid: 200 }, { name: "ppp", uid: 700 }, { name: 7, uid: 7 }]

    const result = dayone.filter(one => WholeData.some(whole => whole.uid === one.uid));
    console.log(result, "result");




    return (<>
        {WholeData.map(wholeList =>
            <div>모든 데이터를 돌리면 : {wholeList.name}</div>
        )}

        {result.map(list =>
            <div className="c(red)">겹치는 데이터는 :{list.name}</div>
        )
        }

    </>)

};

export default TestPage;