import React from "react";
import { Box, Container } from "@mui/material";
import { Transaction } from "./Transaction";

export const TransactionHistory = ({ record, balance }) => {
  return (
    <Box my={7}>
      <Container>
        <h3>Transaction History</h3>
        <ul className="list">
          {record &&
            record.map((transaction) => (
              <Transaction
                key={transaction.id}
                transaction={transaction}
                balance={balance}
              />
            ))}
        </ul>
      </Container>
    </Box>
  );
};
