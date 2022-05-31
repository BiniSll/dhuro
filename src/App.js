import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/home/home";
import { SignIn } from "./components/login/signin";
import { SignUp } from "./components/login/signup";
import { StoryItem } from "./components/story/storyitem";
import { Container } from "@mui/system";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import {useSelector} from 'react-redux'
import { NewStory } from "./components/story/newStory";
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from "@mui/material";
import { BasicModal } from "./components/modal/modal";

const App = () => {
  const IsLoggedIn = useSelector((state)=> state.login.isLoggedIn);
  const [IsLoading, setIsLoading] = useState(false);
  
  
  const isLoggedInHandler = () => {
    return (
      <div>
        <BasicModal/>
        <Header IsLoggedIn={IsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storyitem" element={<StoryItem />} />
          <Route path="/story/create" element={<NewStory />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  };

  const isNotLoggedInHandler = () => {
    return (
      <div>
        <BasicModal/>
        <Header IsLoggedIn={IsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storyitem" element={<StoryItem />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  };
  return IsLoading ? (
    <LinearProgress />
  ) : (
    <Container maxWidth="lg">
      {IsLoggedIn ? isLoggedInHandler() : isNotLoggedInHandler()}
    </Container>
  );
};

export default App;
