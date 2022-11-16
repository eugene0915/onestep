
import { useState, useEffect } from 'react'

import './css/global.css'
import { db } from "./firebase"
import { collection, getDocs, onSnapshot } from "firebase/firestore"

import { Route, Routes } from "react-router-dom"
import LoginPage from './pages/login';
import NaverLoginCallbackPage from './pages/naverLoginCallback'

function App() {

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
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/navercallback" element={<NaverLoginCallbackPage />} />


    </Routes>
  )
}

export default App
