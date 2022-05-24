import React, { useState } from 'react';
import { StoryItem } from '../story/storyitem';
import { Container } from '@mui/system';
import { NewStory } from '../story/newStory';

export const Home = () => {
	const [stories, setStories] = useState(persistStory);

	const addNewStory = (story) => {
		//NOTE this method is almost nsecary, but isn't the only way to add new story to the list
		setStories(() => {
			return [story, ...stories];
		});
	};

	return (
		<div>
			{/* <NewStory/> */}
			{stories.map((story) => (
				<StoryItem
					title={story.title}
					username={story.username}
					phone={story.phone}
					description={story.description}
					image={story.image}
				/>
			))}
		</div>
	);
};

const persistStory = [
	{
		title: 'Iguana',
		username: 'Iguana',
		phone: '+38349827909',
		description: 'Iguana is a green iguana',
		image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	},
	{
		title: 'Lizard',
		username: 'Lizard',
		phone: '+38349827909',
		description: 'Lizard is a green lizard',
		image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	},
	{
		title: 'Lizard',
		username: 'Lizard',
		phone: '+38349827909',
		description: 'Lizard is a green lizard',
		image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
	},
];
