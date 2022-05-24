import { useState } from 'react';
import './App.css';
import { Home } from './components/home/home';
import SignIn from './components/login/signin';
import SignUp from './components/login/signup';
import { StoryItem } from './components/story/storyitem';
import { Container } from '@mui/system';
import { Header } from './components/header/header';
const App = () => {
	const token = localStorage.getItem('token') != null ? true : false;

	return (
		<Container maxWidth='lg'>
			<Header />
			{/* {token? <SignIn />: <SignUp />} */}
			<Home />
		</Container>
	);
};

export default App;
