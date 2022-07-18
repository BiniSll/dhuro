
import { Home } from "../components/home/home";
import { SignIn } from "../components/login/signin";
import { SignUp } from "../components/login/signup";
import { StoryItem } from "../components/story/storyitem";
import { Header } from "../components/header/header";
import { Route, Routes } from "react-router-dom";
import { BasicModal } from "../components/modal/modal";

export const IsNotLoggedInHandler = (props) => {
    return (
      <div>
        <BasicModal/>
        <Header IsLoggedIn={props.IsLoggedIn} />
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