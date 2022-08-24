import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { url } from "./utils/utils";
import Loading from "./utils/loading";
import UpdateProfile from "./components/UpdateProfile";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [totalExpense, settotalExpense] = useState();
  const [totalIncome, settotalIncome] = useState();
  const [totalBalance, setTotalBalance] = useState();
  const [record, setRecord] = useState();
  const [loading, setloading] = useState(false);
  const [status,setStatus] = useState(false)

  const checkSession = async () => {
    let token = localStorage.getItem("token");
    if (token != null) {
      try {
        let resp = await axios.post(url + "/checksession", { token });
        console.log(resp.data);
        setUser(resp.data);
        setIsAuthenticated(true);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const balance = async () => {
    setloading(true);
    let { data } = await axios.post(url + "/getRecord", { id: user._id });
    setRecord(data);
    let expense = 0;
    let income = 0;
    for (let x of data) {
      if (x.amount > 0) {
        income += x.amount;
      } else {
        expense += x.amount;
      }
    }
    settotalExpense(expense);
    settotalIncome(income);
    setTotalBalance(expense + income);
    setTimeout(function () {
      setloading(false);
    }, 1500);
  };
  useEffect(() => {
    checkSession();
  }, []);
  useEffect(() => {
    if (user) {
      balance();
    }
  }, [user]);
  return (
    <>
      <Loading loading={loading} />
      <GlobalProvider>
        <Navbar status={status} setStatus={setStatus}  user={user}/>
        <Routes>
        <Route  path="/updateProfile" element={<UpdateProfile user={user}/>}/>

          <Route
            exact
            path="/login"
            element={
              <Login
                setIsAuthenticated={setIsAuthenticated}
                checkSession={checkSession}
                setStatus={setStatus}
              />
            }
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/"
            element={
              isAuthenticated ? (
                <AddTransaction
                  balance={balance}
                  totalExpense={totalExpense}
                  totalIncome={totalIncome}
                  user={user}
                  totalBalance={totalBalance}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/allRecord"
            element={<TransactionHistory balance={balance} record={record} />}
          />
        </Routes>
        <Footer />
      </GlobalProvider>
    </>
  );
}

export default App;
