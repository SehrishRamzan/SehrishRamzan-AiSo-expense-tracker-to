import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Container } from "@mui/material";
import { url } from "../utils/utils";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
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

function UpdateProfile({ user }) {
  const classes = useStyles();
  let [updatevalues, setUpdateValues] = useState({});

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ name, email, password, contact }) => {
    let data = {
      id: user._id,
      name,
      email,
      password,
      contact,
    };
    let resp = await axios.post(url + "/updateProfile", data);
    navigate("/");
  };
  return (
    <Box py={4}>
      <Container maxWidth="xs">
        <div>
          <center>
            <h3>Update Profile</h3>
          </center>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
          id="reg-form"
        >
          <div>
            <Box
              component="label"
              fontSize={{ xs: "12px", sm: "14px" }}
              fontWeight="500"
              for="name"
            >
              Name
            </Box>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className={classes.input}
              defaultValue={user?.name}
              onChange={(evt) => {
                setUpdateValues({
                  ...updatevalues,
                  [evt.target.name]: evt.target.value,
                });
              }}
              {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
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
              defaultValue={user?.email}
              onChange={(evt) => {
                setUpdateValues({
                  ...updatevalues,
                  [evt.target.name]: evt.target.value,
                });
              }}
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
              minLength="6"
              required
              defaultValue={user?.password}
              onChange={(evt) => {
                setUpdateValues({
                  ...updatevalues,
                  [evt.target.name]: evt.target.value,
                });
              }}
              placeholder="Enter Password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <Box
              component="label"
              fontSize={{ xs: "12px", sm: "14px" }}
              fontWeight="500"
              for="contact"
              pt={3}
            >
              Contact No.
            </Box>
            <input
              id="contact"
              type="tel"
              name="contact"
              placeholder="03127654321"
              pattern="[0-9]{11}"
              className={classes.input}
              required
              defaultValue={user?.contact}
              onChange={(evt) => {
                setUpdateValues({
                  ...updatevalues,
                  [evt.target.name]: evt.target.value,
                });
              }}
              {...register("contact")}
            />
          </div>
          <Box display="flex" justifyContent="center" alignItems="center">
            <input className={classes.submit} type="submit" />
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default UpdateProfile;
