import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoryItem } from "../story/storyitem";
import CircularProgress from "@mui/material/CircularProgress";
import { getStories } from "../../redux/actions/storyAct";

export const Home = () => {
  const stories = useSelector((state) => state.story.story);
  const [IsLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getStories(dispatch, 1);
    window.addEventListener("scroll", handleScroll);
    if (!!stories && stories.length > 0) {
      setIsLoading(false);
    }
  }, []);

  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      setIsLoading(true);
      getStories(dispatch, stories.next);
      setIsLoading(false);
    }
  };

  return (
    <div>
      {!!stories && stories.items.length
        ? stories.items.map((story) => <StoryItem story={story} />)
        : null}
    </div>
  );
};
