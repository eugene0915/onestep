
import { useState, useEffect } from 'react'
import './css/global.css'
import { db } from "./firebase"
import { collection, getDocs, onSnapshot } from "firebase/firestore"

import { Route, Routes } from "react-router-dom"
import LoginPage from './pages/login';
import NaverLoginCallbackPage from './pages/naverLoginCallback'

function App() {

  // this is for checking if google firestore data was connected 
  // made fake user data in google firestore and connected it
  useEffect(() =>
    onSnapshot(collection(db, "userInfo"), (snapshot) => {
      console.log(snapshot)
    })
    , [])


  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/navercallback" element={<NaverLoginCallbackPage />} />


    </Routes>
  )
}

export default App
