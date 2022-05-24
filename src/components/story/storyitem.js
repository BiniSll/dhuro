import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const StoryItem = (props) => {
	return (
		<Card
			sx={{
				minHeight: 350,
				marginY: 5,
				marginX: [0, 4, 7, 15],
				border: 7,
				borderColor: 'rgba(0, 0, 0, 0.2)',
				borderRadius: 10,
				overflow: 'hidden',
			}}
		>
			<CardActionArea>
				<CardMedia
					component='img'
					sx={{
						height: [200, 300, 400, 500],
						borderColor: 'rgba(0, 0, 0, 0.2)',
						// borderBottomRightRadius: 10,
						// borderBottomLeftRadius: 10,
					}}
					image={props.image}
					alt='green iguana'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						textAlign={'center'}
					>
						{props.title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						textAlign={'center'}
					>
						{props.description}
						<hr />
						Shperndaresi: {props.username}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						textAlign={'center'}
					>
						Telefoni: {props.phone}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions textAlign='center'>
				<Button
					style={{
						backgroundColor: '#213123',
						color: 'white',
						marginBottom: 10,
					}}
					color='inherit'
					variant='contained'
					sx={{
						flexGrow: 1,
						borderRadius: 10,
						marginX: 1,
					}}
				>
					Shiko me shume
				</Button>
			</CardActions>
		</Card>
	);
};
