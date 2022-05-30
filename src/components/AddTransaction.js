import React, { useState, useContext, useEffect } from "react";
import { Container, Box, Button } from "@mui/material";
import { AccountSummary } from "./AccountSummary";
import { Balance } from "./Balance";
import axios from "axios";
import { ToastNotify } from "../utils/ToastNotify";
import { url } from "../utils/utils";
import Loading from "../utils/loading";

// Import the Global State
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = ({
  balance,
  totalBalance,
  totalExpense,
  totalIncome,
}) => {
  const [description, setDescription] = useState("");
  const [transactionAdded, settransactionAdded] = useState();
  const [transactionAmount, setTransactionAmount] = useState("");
  const [loading, setloading] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    let token = localStorage.getItem("token");

    const newTransaction = {
      id: new Date().getTime(),
      token: token,
      description,
      transactionAmount: +transactionAmount,
    };
    try {
      let resp = await axios.post(url + "/addExpense", newTransaction);
      if (resp.data.msg === "success") {
        addTransaction(newTransaction);
        settransactionAdded(newTransaction);
        setAlertState({
          open: true,
          message: "Record added successfully!",
          severity: "success",
        });
      } else {
        setAlertState({
          open: true,
          message: resp.data.msg,
          severity: "error",
        });
      }
      setloading(false);
    } catch (e) {
      console.log(e.response.data);
      setloading(false);
    }
  };

  useEffect(() => {
    balance();
  }, [transactionAdded]);

  return (
    <Box my={7}>
      <Loading loading={loading} />
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box width="70%">
            <Balance totalBalance={totalBalance} />
            <AccountSummary
              totalExpense={totalExpense}
              totalIncome={totalIncome}
            />
            <Box component="h3" mt={5}>
              Add New Transaction
            </Box>
            <form style={{ width: "100%" }} onSubmit={onSubmit}>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detail of Transaction"
                  required="required"
                />
              </div>
              <div className="form-control">
                <label htmlFor="transactionamount">Transaction Amount</label>
                <input
                  type="number"
                  id="transactionamount"
                  value={transactionAmount}
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  placeholder="Dollar Value of Transaction"
                  required="required"
                />
              </div>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  type="submit"
                  className="btn"
                  sx={{
                    marginTop: "30px",
                    "&:hover": {
                      backgroundColor: "#EB3A5A",
                    },
                  }}
                  width={{ xs: "70%", sm: "60%" }}
                >
                  Add Transaction
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
