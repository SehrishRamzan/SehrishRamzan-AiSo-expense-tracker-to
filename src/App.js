import React, { useEffect, useState } from "react";
import axios from "axios";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Balance } from "./components/Balance";
import { AccountSummary } from "./components/AccountSummary";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { url } from "./utils/utils";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let token = localStorage.getItem("token");
    if (token != null) {
      try {
        let resp = await axios.post(url + "/checksession", { token });
        setUser(resp.data);
        setIsAuthenticated(true);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  }, []);
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element={<MainSection />} /> */}
          <Route
            exact
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/"
            element={
              isAuthenticated ? (
                <AddTransaction user={user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route exact path="/allRecord" element={<TransactionHistory />} />
        </Routes>

        <Footer />
      </GlobalProvider>
    </>
  );
}

export default App;
