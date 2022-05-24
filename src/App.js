import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/home/home";
import {SignIn} from "./components/login/signin";
import {SignUp} from "./components/login/signup";
import { StoryItem } from "./components/story/storyitem";
import { Container } from "@mui/system";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { NewStory } from "./components/story/newStory";

const App = () => {
	const [IsLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setIsLoggedIn(true);
		} else {
		}
	}, []);

  return (
    <Container maxWidth='lg'>
      <Header IsLoggedIn={IsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/storyitem" element={<StoryItem />} />
        <Route path="/story/create" element={<NewStory />} />
      </Routes>
    </Container>
  );
};

export default App;
