import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { db } from "./firebase"
import { collection, getDocs, onSnapshot } from "firebase/firestore"



function App() {
  const [count, setCount] = useState(0)

  // const userCollectionRef = collection(db, "userInfo");
  useEffect(() =>
    onSnapshot(collection(db, "userInfo"), (snapshot) => {
      console.log(snapshot)
    })
    , [])

  // useEffect(() => {
  //   const data = getDocs(userCollectionRef);

  //   console.log(data)
  // }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>playing with me</h1>
      <div>데이터 불러오는 자리</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
