import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/home/home";
import { SignIn } from "./components/login/signin";
import { SignUp } from "./components/login/signup";
import { StoryItem } from "./components/story/storyitem";
import { Container } from "@mui/system";
import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { NewStory } from "./components/story/newStory";
import LinearProgress from '@mui/material/LinearProgress';
import { BasicModal } from "./components/modal/modal";

import {logoutReq, authenticateReq} from './redux/actions/loginAct'
import { getStories } from "./redux/actions/storyAct";
import axiosIntance from './api/index'

import { IsNotLoggedInHandler } from "./root/IsNotLoggedInHandler";
import { IsLoggedInHandler } from "./root/IsLoggedInHandler";

const App = () => {
  const dispatch = useDispatch()
  const IsLoggedIn = useSelector((state)=> state.login.isLoggedIn);
  const [IsLoading, setIsLoading] = useState(true);

  axiosIntance.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response.status === 401) {
				//handled promise
				console.log({ error });
				logoutReq(dispatch);
			} else {
				return Promise.reject(error);
			}
		}
	);

  useEffect(()=> {
    if(IsLoggedIn == true){
      authenticateReq(dispatch)
      setIsLoading(false)
    }
    else{
      setIsLoading(false)
    }
    
  }, [IsLoggedIn])

  return IsLoading ? (
    <LinearProgress />
  ) : (
    <Container maxWidth="lg">
        {IsLoggedIn ? <IsLoggedInHandler IsLoggedIn={true}/> : <IsNotLoggedInHandler IsLoggedIn ={false}/>}
    </Container>
  );
};

export default App;
