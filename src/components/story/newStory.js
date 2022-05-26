import { Box, Container } from "@mui/system";
import {useSelector, useDispatch} from 'react-redux'
import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import {CardMedia} from "@mui/material";
import { Input } from '@mui/material';

export const NewStory = (props) => {
  const count = useSelector((state) => state.counter.value)

  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };
  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };
  const handleDescriptionInput = (e) => {
    setDescription(e.target.value);
  };
  
  const handleImageInput = (e) => {
    e.preventDefault();
    setImage(...image, e.target.files);
    debugger;
  };

  const [story, setStory] = useState({
    title: "",
    username: "",
    phone: "",
    description: "",
    image: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newStory = {
      title,
      username,
      phone,
      description,
      image,
    };

    setStory(newStory);
  };
  return (
    <Container>
      <CardMedia
        component="img"
        sx={{
          marginTop: 8,
          marginLeft: '43.5%',
          width: [60, 80, 100, 120],
        }}
        image={require("../assets/dhurologo.png")}
        alt="green iguana"
      />
      <Box component="form" onSubmit={onSubmitHandler}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Titulli"
          name="title"
          onChange={handleTitleInput}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Përshkrimi"
          name="description"
          onChange={handleDescriptionInput}
          autoFocus
        />
        <input type="file" multiple onChange={handleImageInput} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
};
