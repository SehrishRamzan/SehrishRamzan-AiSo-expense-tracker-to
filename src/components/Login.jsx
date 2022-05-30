import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Container, Box, Avatar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ToastNotify } from "../utils/ToastNotify";
import { useNavigate, Link } from "react-router-dom";
import { url } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "10px 30px",
    borderRadius: "6px",
    color: "#fff",
    fontWeight: 700,
    fontSize: "16px",
    background: "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
    border: "none",
    height: "44px",
    cursor: "pointer",
    "&:hover": {
      background: "#EB3A5A",
    },
  },
  input: {
    width: "100%",
    marginTop: "10px",
    marginBottom: "20px",
    height: "40px",
    border: "1px solid #eee",
    background: "transparent",
    borderRadius: "3px",
    padding: "0px 10px",
    color: "#fff",
  },
}));

function Login({ setIsAuthenticated, checkSession }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let resp = await axios.post(url + "/login", data);
    if (resp.data.msg === "User Found") {
      localStorage.setItem("token", resp.data.token);
      setIsAuthenticated(true);
      navigate("/");
      setAlertState({
        open: true,
        message: "Signed in successfully",
        severity: "success",
      });
      checkSession();
    } else if (resp.data.msg === "User Not Found") {
      setAlertState({
        open: true,
        message: "Please Type valid User Name OR Password...!",
        severity: "error",
      });
    }
  };

  return (
    <Box py={4}>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />

      <Container maxWidth="xs">
        <Box className={classes.paper}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar className={classes.avatar}></Avatar>
          </Box>
          <Typography component="h1" variant="h5" textAlign="center">
            Sign In
          </Typography>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.form}
            id="loginForm"
          >
            <div>
              <Box
                component="label"
                fontSize={{ xs: "12px", sm: "14px" }}
                fontWeight="500"
                for="email"
              >
                Email
              </Box>
              <input
                id="email"
                className={classes.input}
                type="email"
                placeholder="Enter Email"
                required
                {...register("email")}
              />

              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <Box
                component="label"
                fontSize={{ xs: "12px", sm: "14px" }}
                fontWeight="500"
                for="password"
              >
                Password
              </Box>
              <input
                className={classes.input}
                required
                placeholder="Enter Password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            <Box display="flex" justifyContent="center" alignItems="center">
              <input className={classes.submit} type="submit" />
            </Box>
            <Box component="p" mt={2}>
              Already have account? <Link to="/signup">Sign in</Link>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
export default Login;
