import { useState, useEffect } from "react";
// import './css/global.css'
import "./css/testfigma.css";
import { db } from "./firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import NaverLoginCallbackPage from "./pages/naverLoginCallback";
import TestPage from "./pages/test";
import DadJokes from "./pages/dadJokes";
import TestFigma from "./pages/testfigma";
import TestFigmaTwo from "./pages/testfigma2";

function App() {
  // this is for checking if google firestore data was connected
  // made fake user data in google firestore and connected it
  useEffect(
    () =>
      onSnapshot(collection(db, "userInfo"), (snapshot) => {
        console.log(snapshot);
      }),
    []
  );

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/navercallback" element={<NaverLoginCallbackPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/jokes" element={<DadJokes />} />
      <Route path="/testfigma" element={<TestFigma />} />
      <Route path="/testfigma2" element={<TestFigmaTwo />} />
    </Routes>
  );
}

export default App;
