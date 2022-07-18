import React, { useState } from "react";
import axios from "axios";
import { url } from "../utils/utils";
import Loading from "../utils/loading";

export const Transaction = ({ transaction, balance }) => {
  console.log(transaction);
  const [loading, setloading] = useState(false);
  const sign = transaction.amount > 0 ? "+" : "-";
  const transactionType = transaction.amount > 0 ? "plus" : "minus";

  return (
    <>
      <Loading loading={loading} />
      <li className={transactionType} >
        {transaction.description}
        <span style={{ float: "right" }}>{sign}${Math.abs(transaction.amount)}</span>
        <button
          className="delete-btn"
          onClick={async () => {
            setloading(true);
            const res = await axios.post(url + "/delete", {
              id: transaction._id,
            });
            if (res.data.msg === "deleted") {
              balance();
              setloading(false);
            } else {
              setloading(false);
            }
          }}
        >
          X
        </button>
      </li>


    </>
  );
};
