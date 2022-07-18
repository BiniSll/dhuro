import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress, InputLabel } from "@mui/material";

//extension
import { ValidateEmail } from "../../extensions/Validate";
import { onError } from "../../redux/features/errorSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpReq } from "../../redux/actions/loginAct";

const theme = createTheme();

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    if (ValidateEmail(event.target.value)) {
      setEmail(event.target.value);
      setIsEmailValid(null);
    } else {
      setIsEmailValid("Kerkohet email valid! Shembull filani@gmail.com");
    }
  };

  const handlePasswordChange = (event) => {
    if (event.target.value.length >= 6) {
      setPassword(event.target.value);
      setIsPasswordValid(null);
    } else {
      setIsPasswordValid("Fjalekalimi duhet te jete me shume se 6 karaktere");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    if (event.target.value === password) {
      setConfirmPassword(event.target.value);
      setIsConfirmPasswordValid(null);
    } else {
      setIsConfirmPasswordValid("Fjalekalimet nuk perputhen");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const unFilledFields = [];

    if (name === "") {
      unFilledFields.push("Emri, ");
    }

    if (lastName === "") {
      unFilledFields.push("Mbiemri, ");
    }

    if (email === "") {
      unFilledFields.push("Email, ");
    }

    if (password === "") {
      unFilledFields.push("Fjalekalimi, ");
    }

    if (confirmPassword === "") {
      unFilledFields.push("Konfirmo fjalekalimin");
    }

    if (unFilledFields.length > 0) {
      dispatch(
        onError({
          statusText: "Te gjitha fushat duhët të plotesohen!",
          data: unFilledFields,
        })
      );
    } else {
      setIsLoading(true);
      const user = {
        name,
        lastName,
        email,
        password,
        confirmPassword,
      };
      signUpReq(nav, dispatch, user).then((res)=>{
        setIsLoading(false);
      }).catch((err)=>{
        console.log(err);
        setIsLoading(false);
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <CircularProgress
          size={40}
          left={-20}
          style={{ marginLeft: "50%" }}
          sx={{ marginTop: "10px" }}
        />
      ) : (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Krijo llogari të re
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Emri"
                    autoFocus
                    onChange={handleNameChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Mbiemri"
                    name="lastName"
                    autoComplete="family-name"
                    autoFocus
                    onChange={handleLastNameChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  {!!isEmailValid ? (
                    <InputLabel for="email" sx={{ color: "red" }}>
                      {isEmailValid}
                    </InputLabel>
                  ) : null}
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  {!!isPasswordValid ? (
                    <InputLabel for="password" sx={{ color: "red" }}>
                      {isPasswordValid}
                    </InputLabel>
                  ) : null}
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Fjalekalimi"
                    type="password"
                    id="password"
                    onChange={handlePasswordChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  {!!isConfirmPasswordValid ? (
                    <InputLabel for="confirmPassword" sx={{ color: "red" }}>
                      {isConfirmPasswordValid}
                    </InputLabel>
                  ) : null}
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Konfirmo fjalekalimin"
                    type="password"
                    id="confirmPassword"
                    onChange={handleConfirmPasswordChange}
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Krijo llogari të re
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Keni llogari ekzistuese? Kyçu
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      )}
    </ThemeProvider>
  );
}
