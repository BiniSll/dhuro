import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import { BasicModal } from "../../components/modal/modal";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInReq } from "../../api/login";
import { login } from "../../features/loginSlice";
const theme = createTheme();

export function SignIn() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [onError, setOnError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = new FormData(event.currentTarget);

    setUsernameOrEmail(data.get("email"));
    setPassword(data.get("password"));
    try {
      logInReq(dispatch, { usernameOrEmail, password }).then((response) => {
        debugger;
        if (response !== 200) {
          setTitle(response.title);
          setDescription(response.description);
          setOnError(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          //navigate to home page
          nav("/");
        }
      })

      
    } catch (err) {
      debugger;
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {onError?<BasicModal
          title={title}
          description={description}
          open={onError}/>: null}
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="usernameOrEmail"
                label="username or email"
                name="email"
                autoComplete="usernameOrEmail"
                autoFocus
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Fjalekalimi"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
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
