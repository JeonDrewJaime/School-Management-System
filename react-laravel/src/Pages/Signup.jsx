import { createTheme, ThemeProvider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState, useEffect, useRef } from "react";
//Assets
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//Animation
import Box from "@mui/material/Box";
//CSS
import "../App.css";
//Components
//Axios
import axiosClient from "../axios-client";
import { useStateContext } from "../Context/ContextAPI";

export default function Signup() {
    const [loading, setLoading] = useState(false);
    const theme = createTheme({
        typography: {
            fontFamily: ["Quicksand", "sans-serif"].join(","),
        },
    });

    //start of passing data from front -> back
    const [studentName, setStudentName] = useState("");
    const [studentPassword, setStudentPass] = useState("");
    const { setStudent, setToken } = useStateContext();
    const { errors, setErrors } = useState(null);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const credentials = {
            student_name: studentName,
            student_pass: studentPassword,
        };
        //posting the data to the api
        axiosClient
            .post("/register", credentials)
            .then(({ data }) => {
                setStudent(data.user);
                setToken(data.token);
            })
            .catch((error) => {
                const response = error.response;
                if (response && response.status == 422) {
                    //422 = validation error code
                    if (response.data.errors) {
                        console.log(response.data.errors);
                    } else {
                        // console.log([response.data.message])
                    }
                }
            });
    };
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <div className="App">
            {loading ? (
                <div class="puff-in-center">
                    <Box sx={{ mt: "29vmin", mb: "31vmin" }}>
                        <img
                            src="https://i.ibb.co/j4ZtgdF/804.gif"
                            width="400vw"
                            salt="804"
                        ></img>
                    </Box>
                </div>
            ) : (
                <ThemeProvider theme={theme}>
                    <Grid
                        id="backgroundImage"
                        container
                        spacing={0}
                        rowGap={3.8}
                        sx={{ pt: "12vmin" }}
                    >
                        <Grid item xs={3.9}>
                            <img
                                src="https://i.ibb.co/vQh9cs8/sti-logo.png"
                                class="fade-in"
                                alt="sti-logo"
                                border="0"
                                width="90%"
                                height="90%"
                                style={{ objectFit: "contain" }}
                            ></img>
                        </Grid>
                        <Grid item xs={0.8}>
                            <img
                                src="https://i.ibb.co/g6m1hXd/DIVIDER.png"
                                class="slide-in-blurred-left"
                                alt="DIVIDER"
                                border="0"
                            ></img>
                        </Grid>
                        <Grid item xs={5} sx={{ mt: "5.5vmin" }}>
                            <Grid
                                container
                                rowSpacing={4}
                                rowGap={1}
                                method="post"
                            >
                                <Grid item xs={12}>
                                    <div class="fade-in-left">
                                        <h1>TEMPORARY SHIT LANG TO</h1>
                                        <TextField
                                            style={{
                                                backgroundColor: "white",
                                            }}
                                            sx={{
                                                borderRadius: 1,
                                                boxShadow: 4,
                                                width: "100%",
                                            }}
                                            id="demo-helper-text-misaligned"
                                            label="Student Name"
                                            value={studentName}
                                            onChange={(e) =>
                                            setStudentName(e.target.value)
                                            }
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div class="fade-in-left">
                                        <TextField
                                            style={{
                                                backgroundColor: "white",
                                            }}
                                            sx={{
                                                borderRadius: 1,
                                                boxShadow: 4,
                                                width: "100%",
                                            }}
                                            id="demo-helper-text-misaligned"
                                            type="password"
                                            label="Set Default Pass (stud will change)"
                                            value={studentPassword}
                                            onChange={(e) =>
                                            setStudentPass(e.target.value)
                                            }
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div class="fade-in-top">
                                        <Button
                                            onClick={handleSubmit}
                                            variant="contained"
                                            sx={{
                                                borderRadius: "16px",
                                                width: "100%",
                                                height: 50,
                                            }}
                                        >
                                            <Typography
                                                fontWeight={700}
                                                fontSize={20}
                                            >
                                                REGISTER STUDENT
                                            </Typography>
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div class="fade-in">
                                        <a>
                                            <Typography
                                                color="primary.dark"
                                                fontWeight={800}
                                                sx={{
                                                    mt: "-3vmin",
                                                    textAlign: "center",
                                                }}
                                            ></Typography>
                                        </a>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ mt: "15.5vmin" }}>
                            <div class="fade-in-bottom">
                            </div>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            )}
        </div>
    );
}
