import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  useMediaQuery,
  Grid,
  Hidden,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Paper } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: "70px",
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#000 !important",
    justifyContent: "space-between",
  },
  hover: {
    "&:hover": {
      color: "#EB3A5A",
    },
  },
});

function Navbar({ status, setStatus, user }) {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const matches = useMediaQuery("(max-width:960px)");
  const [token, setToken] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, [location, status]);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mb={5} display="flex" justifyContent="center">
        <Box
          fontFamily="Roboto"
          fontWeight={300}
          fontSize={matches ? "25px" : "30px"}
        >
          <Box
            component="span"
            fontWeight={700}
            sx={{
              background: "linear-gradient(90deg, #E93C51 0%, #F806EF 40.67%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            AiSo{" "}
          </Box>
          Tracker
        </Box>
      </Box>

      <Box mt={5} display="flex" justifyContent="center">
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="column"
        >
          {token ? (
            <Box
              onClick={() => {}}
              zIndex={1}
              sx={{
                background: "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                cursor: "pointer",
                "&:hover": {
                  background: "#EB3A5A",
                },
              }}
              ml={1}
              width="100px"
              height="44px"
              fontWeight="700"
              borderRadius="6px"
              fontSize="18px"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
              letterSpacing="1%"
            >
              History
            </Box>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Box
                zIndex={1}
                sx={{
                  background:
                    "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#EB3A5A",
                  },
                }}
                ml={1}
                width="100px"
                height="44px"
                fontWeight="700"
                borderRadius="6px"
                fontSize="18px"
                color="#ffffff"
                display="flex"
                justifyContent="center"
                alignItems="center"
                letterSpacing="1%"
              >
                Sign In
              </Box>
            </Link>
          )}

          {token ? (
            {}
          ) : (
            <Link
              to="/signup"
              style={{ textDecoration: "none", marginTop: "20px" }}
            >
              <Box
                zIndex={1}
                sx={{
                  background:
                    "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#EB3A5A",
                  },
                }}
                ml={1}
                width="100px"
                height="44px"
                fontWeight="700"
                borderRadius="6px"
                fontSize="18px"
                color="#ffffff"
                display="flex"
                justifyContent="center"
                alignItems="center"
                letterSpacing="1%"
              >
                Sign Up
              </Box>
            </Link>
          )}
        </Box>
      </Box>
    </div>
  );

  return (
    <Box position="relative">
      <Box
        bgcolor="#000"
        height="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Container maxWidth="lg">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexBasis={matches ? "100%" : "26%"}
            >
              <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
              >
                <Grid item>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <Box
                      fontFamily="Roboto"
                      fontWeight={300}
                      fontSize={matches ? "25px" : "30px"}
                    >
                      <Box
                        className="text-rainbow-animation"
                        component="span"
                        fontWeight={700}
                        sx={{
                          background:
                            "linear-gradient(90deg, #E93C51 22%, #F806EF 63.67%)",
                          backgroundClip: "text",
                          textFillColor: "transparent",
                        }}
                      >
                        AiSo{" "}
                      </Box>
                      Tracker
                    </Box>
                  </Link>
                </Grid>
              </Grid>
            </Box>

            <Box display={{ xs: "none", sm: "block" }}>
              <Hidden mdDown>
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  {token ? (
                    <Box
                      onClick={() => {
                        navigate("/allRecord");
                      }}
                      zIndex={1}
                      sx={{
                        background:
                          "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                        cursor: "pointer",
                        "&:hover": {
                          background: "#EB3A5A",
                        },
                      }}
                      ml={1}
                      width="100px"
                      height="44px"
                      fontWeight="700"
                      borderRadius="6px"
                      fontSize="18px"
                      color="#ffffff"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      letterSpacing="1%"
                    >
                      History
                    </Box>
                  ) : (
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <Box
                        zIndex={1}
                        sx={{
                          background:
                            "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                          cursor: "pointer",
                          "&:hover": {
                            background: "#EB3A5A",
                          },
                        }}
                        ml={1}
                        width="100px"
                        height="44px"
                        fontWeight="700"
                        borderRadius="6px"
                        fontSize="18px"
                        color="#ffffff"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        letterSpacing="1%"
                      >
                        Sign In
                      </Box>
                    </Link>
                  )}

                  {token ? (
                    <Box ml={1}>
                      {user?.name && (
                        <Avatar
                          id="basic-button"
                          aria-controls="basic-menu"
                          aria-haspopup="true"
                          aria-expanded={openn ? "true" : undefined}
                          onClick={handleClick}
                          sx={{
                            background:
                              "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                          }}
                        >
                          {user?.name.split(" ")[0][0]}
                        </Avatar>
                      )}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openn}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        sx={{
                          "& .css-kltcmi-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                            {
                              backgroundColor: "#111",
                              border: "1px solid #727272",
                            },
                        }}
                      >
                        <Link
                          to="/updateProfile"
                          style={{ textDecoration: "none", color: "#fff" }}
                        >
                          <MenuItem
                            onClick={() => {
                              handleClose();
                            }}
                            sx={{
                              borderBottom: "1px solid #727272",
                              cursor: "pointer",
                            }}
                          >
                            Profile Settings
                          </MenuItem>
                        </Link>
                        <MenuItem
                          sx={{ cursor: "pointer" }}
                          onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/login");
                            setStatus(true);
                          }}
                        >
                          Logout
                        </MenuItem>
                      </Menu>
                    </Box>
                  ) : (
                    // <Box
                    //   onClick={() => {
                    //     localStorage.removeItem("token");
                    //     navigate("/login");
                    //     setStatus(true)
                    //   }}
                    //   zIndex={1}
                    //   sx={{
                    //     background:
                    //       "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                    //     cursor: "pointer",
                    //     "&:hover": {
                    //       background: "#EB3A5A",
                    //     },
                    //   }}
                    //   ml={1}
                    //   width="100px"
                    //   height="44px"
                    //   fontWeight="700"
                    //   borderRadius="6px"
                    //   fontSize="18px"
                    //   color="#ffffff"
                    //   display="flex"
                    //   justifyContent="center"
                    //   alignItems="center"
                    //   letterSpacing="1%"
                    // >
                    //   Sign out
                    // </Box>
                    <Link to="/signup" style={{ textDecoration: "none" }}>
                      <Box
                        zIndex={1}
                        sx={{
                          background:
                            "linear-gradient(90deg, #EA3B55 0%, #F808E7 100%)",
                          cursor: "pointer",
                          "&:hover": {
                            background: "#EB3A5A",
                          },
                        }}
                        ml={1}
                        width="100px"
                        height="44px"
                        fontWeight="700"
                        borderRadius="6px"
                        fontSize="18px"
                        color="#ffffff"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        letterSpacing="1%"
                      >
                        Sign Up
                      </Box>
                    </Link>
                  )}
                </Box>
              </Hidden>
            </Box>
            <Hidden mdUp>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    style={{ zIndex: 1, justifyContent: "end", width: "100%" }}
                  >
                    <MenuIcon
                      style={{
                        fontSize: "38px",
                        cursor: "pointer",
                        color: "#fff",
                      }}
                    ></MenuIcon>
                  </Button>
                  <Paper style={{ background: "#1C0D38" }}>
                    <SwipeableDrawer
                      classes={{ paper: classes.paper }}
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </Paper>
                </React.Fragment>
              ))}
            </Hidden>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Navbar;
