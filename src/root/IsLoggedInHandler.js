import { Home } from "../components/home/home";
import { StoryItem } from "../components/story/storyitem";
import { Header } from "../components/header/header";
import { Route, Routes } from "react-router-dom";
import { NewStory } from "../components/story/newStory";
import { BasicModal } from "../components/modal/modal";
export const IsLoggedInHandler = (props) => {
    return (
      <div>
        <BasicModal/>
        <Header IsLoggedIn={props.IsLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storyitem" element={<StoryItem />} />
          <Route path="/story/create" element={<NewStory />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  };