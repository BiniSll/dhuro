<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
import { Home } from './components/home/home';
import SignIn from './components/login/signin';
import SignUp from './components/login/signup';
import { StoryItem } from './components/story/storyitem';
import { Container } from '@mui/system';
import { Header } from './components/header/header';
=======
import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/home/home";
import SignIn from "./components/login/signin";
import SignUp from "./components/login/signup";
import { StoryItem } from "./components/story/storyitem";
import { Container } from "@mui/system";
import { Header } from "./components/header/header";
>>>>>>> 0accec86ce36d1d01ac39e2808c445d6ca82cdb3
const App = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
    }
  }, []);

  return (
    <Container maxWidth='lg'>
      <Header IsLoggedIn={IsLoggedIn} />
      {/* {token? <SignIn />: <SignUp />} */}
      <Home />
    </Container>
  );
};

export default App;
