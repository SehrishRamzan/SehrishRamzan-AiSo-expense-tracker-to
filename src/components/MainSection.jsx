import React, { useState, useEffect } from "react";
import { Box, Container, Button, Grid, useMediaQuery } from "@mui/material";

function MainSection() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <Box py={10}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent={{ xs: "center", sm: "space-between" }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Box pr={{ xs: 0, sm: 2 }}>
              <Box
                fontWeight={700}
                fontSize={{ xs: "30px", sm: "44px" }}
                color="text.primary"
                lineHeight={{ xs: "auto", sm: "55px" }}
              >
                Opportunity to stake and get HIGH ROI on{" "}
                <Box
                  component="span"
                  fontWeight={700}
                  sx={{
                    background:
                      "linear-gradient(90deg, #E93C51 22%, #F806EF 63.67%)",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  AVAX
                </Box>
              </Box>
              <Box
                fontWeight={400}
                fontSize={{ xs: "16px", sm: "20px" }}
                color="text.primary"
                my={1}
              >
                (invest from{" "}
                <Box component="span" fontWeight={700} color="secondary.main">
                  0.1 AVAX
                </Box>
                .{" "}
                <Box component="span" fontStyle="italic">
                  No max limit
                </Box>{" "}
                )
              </Box>

              <Box
                fontSize={{ xs: "12px", sm: "15px" }}
                fontWeight={600}
                letterSpacing="1%"
                textTransform="uppercase"
                color="text.primary"
                mt={4}
                mb={1.5}
              >
                Return on investment:
              </Box>
              <Box
                display="flex"
                bgcolor="rgba(255, 255, 255, 0.05)"
                borderRadius="6px"
                px={4}
                py={1}
                width={{ xs: "auto", sm: "90%" }}
                height="95px"
                alignItems="center"
              >
                <Box pr={1}>
                  <Box
                    fontSize={{ xs: "16px", sm: "22px" }}
                    fontWeight={700}
                    color="secondary.main"
                  >
                    125% to 659%
                  </Box>
                  <Box
                    fontSize={{ xs: "13px", sm: "18px" }}
                    fontWeight={400}
                    color="text.primary"
                  >
                    10 - 26 days
                  </Box>
                </Box>
                <hr
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    height: "60px",
                  }}
                />
                <Box pl={1}>
                  <Box
                    fontSize={{ xs: "16px", sm: "22px" }}
                    fontWeight={700}
                    color="secondary.main"
                  >
                    11.27% to 24.56%
                  </Box>
                  <Box
                    fontSize={{ xs: "13px", sm: "18px" }}
                    fontWeight={400}
                    color="text.primary"
                  >
                    daily
                  </Box>
                </Box>
              </Box>

              <Box
                mt={8}
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "center", sm: "start" }}
              >
                <Box
                  fontSize={{ xs: "13px", sm: "16px" }}
                  fontWeight={600}
                  letterSpacing="1%"
                  sx={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  ml={2}
                >
                  Welcome Youtubers! An exciting challenge awaits you.
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Box display="flex" mt={{ xs: 5, sm: 0 }}>
              <Box
                py={1.5}
                px={{ xs: 1.5, sm: 3 }}
                bgcolor="rgba(255, 255, 255, 0.05)"
                borderRadius="6px"
                mr={2}
              >
                <Box
                  fontSize={{ xs: "12px", sm: "17px" }}
                  fontWeight={400}
                  color="text.primary"
                >
                  Current AVAX price
                </Box>
                <Box
                  fontSize={{ xs: "16px", sm: "22px" }}
                  fontWeight={700}
                  color="secondary.main"
                >
                  $ "0.00"
                </Box>
              </Box>
              <Box
                py={1.5}
                px={{ xs: 1.5, sm: 3 }}
                bgcolor="rgba(255, 255, 255, 0.05)"
                borderRadius="6px"
              >
                <Box
                  fontSize={{ xs: "12px", sm: "17px" }}
                  fontWeight={400}
                  color="text.primary"
                >
                  Total Staked AVAX so far
                </Box>
                <Box
                  fontSize={{ xs: "16px", sm: "22px" }}
                  fontWeight={700}
                  color="secondary.main"
                >
                  $00.00
                </Box>
              </Box>
            </Box>

            <Box
              mt={4}
              fontSize={{ xs: "13px", sm: "15px" }}
              fontWeight={600}
              color="text.primary"
              letterSpacing="1%"
            >
              <Box component="span" color="#EA3A56">
                *
              </Box>
              Note:
            </Box>

            <ol style={{ paddingInlineStart: "20px" }}>
              <li
                style={{
                  fontSize: matches ? "12px" : "15px",
                  fontWeight: 400,
                  letterSpacing: "1%",
                  lineHeight: "24px",
                  margin: "4px 0px",
                }}
              >
                For all plans everyday 0.2% is added to the "daily earning".
                (The changes are only for new deposits).
              </li>
              <li
                style={{
                  fontSize: matches ? "12px" : "15px",
                  fontWeight: 400,
                  letterSpacing: "1%",
                  lineHeight: "24px",
                  margin: "4px 0px",
                }}
              >
                Force withdraw available for locked 21 and 26 days plan.
              </li>
              <li
                style={{
                  fontSize: matches ? "12px" : "15px",
                  fontWeight: 400,
                  letterSpacing: "1%",
                  lineHeight: "24px",
                  margin: "4px 0px",
                }}
              >
                If you don't withdraw everyday, you will get a hold bonus of
                0.2% every 2 days. Maximum up to 2%. If you withdraw, hold bonus
                will reset to 0.
              </li>
              <li
                style={{
                  fontSize: matches ? "12px" : "15px",
                  fontWeight: 400,
                  letterSpacing: "1%",
                  lineHeight: "24px",
                  margin: "4px 0px",
                }}
              >
                Access to Audit, Whitepaper and Contract will be enabled in a
                short while.
              </li>
              <li
                style={{
                  fontSize: matches ? "12px" : "15px",
                  fontWeight: 400,
                  letterSpacing: "1%",
                  lineHeight: "24px",
                  margin: "4px 0px",
                }}
              >
                We recommend staking 60% in 26 days locked plan and 40% in 21
                days locked plan.
              </li>
            </ol>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MainSection;
