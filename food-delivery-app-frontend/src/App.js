import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./container/Login";
import Main from "./container/Main";
import { app } from "./config/firebase-config";
import { setUserDetails } from "./context/actions/userAction";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { validateJWTToken } from "./api/url";

function App() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const firebaseAuth = getAuth(app)
  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
        });
      }
    });
  }, []);
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
