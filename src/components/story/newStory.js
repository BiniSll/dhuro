import { Box, Container } from "@mui/system";
import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

export const NewStory = (props) => {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

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
    setImage(e.target.value);
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
    console.log("story: ", story);
  };
  return (
    <Container>
      <Box component="form" onSubmit={onSubmitHandler}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          onChange={handleTitleInput}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          onChange={handleUsernameInput}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Phone"
          name="phone"
          onChange={handlePhoneInput}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          onChange={handleDescriptionInput}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="image"
          label="Image"
          name="image"
          onChange={handleImageInput}
          autoFocus
        />
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
