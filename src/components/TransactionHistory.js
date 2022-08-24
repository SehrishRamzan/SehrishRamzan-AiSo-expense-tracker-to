import React from "react";
import { Box, Button, Container } from "@mui/material";
import JsPDF from 'jspdf';
import { Transaction } from "./Transaction";

export const TransactionHistory = ({ record, balance }) => {
  const generatePDF = () => {
    const report = new JsPDF('portrait', 'pt', 'a2');
    report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
    });
  }
  return (
    <Box my={7}>
      <Container>
        <h3>Transaction History</h3>
        <Box display='flex' justifyContent='end'>
          <Button variant="contained" onClick={generatePDF}>Download as PDF</Button>
        </Box>
        <ul className="list" id="report">
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
