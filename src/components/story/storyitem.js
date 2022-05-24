import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const StoryItem = (props) => {
  return (
    <Card sx={{minHeight: 350, marginTop: 7 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
            <hr />
            Shperndaresi: <span>{props.username}</span>
            
          </Typography>
          <Typography variant="caption">
            Telefoni: <span>{props.phone}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Shiko me shume
        </Button>
      </CardActions>
    </Card>
  );
}