import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/home/home";
import SignIn from "./components/login/signin";
import SignUp from "./components/login/signup";
import { StoryItem } from "./components/story/storyitem";
import { Container } from "@mui/system";
import { Header } from "./components/header/header";
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
    <Container>
      <Header IsLoggedIn={IsLoggedIn} />
      {/* {token? <SignIn />: <SignUp />} */}
      <Home />
    </Container>
  );
};

export default App;
