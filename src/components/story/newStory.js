import { Box, Container } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  CardMedia,
  ImageList,
  ImageListItem,
  TextField,
  Button,
  Input,
} from "@mui/material";
import { Image } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { InputAdornment } from "@mui/material";
import "./newStory.scss";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const NewStory = (props) => {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  //
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [imagesToPreview, setImagesToPreview] = useState([]);

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

  useEffect(() => {
    let fileReader,
      isCancel = false;

    if (image) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setImagesToPreview((imagesToPreview) => [...imagesToPreview, result]);
        }
      };
      fileReader.readAsDataURL(image);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [image]);

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setImage(file);
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
      images,
    };

    setStory(newStory);
  };
  return (
    <Container>
      <CardMedia
        component="img"
        sx={{
          marginTop: 8,
          marginLeft: "43.5%",
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
        <label className="lblImage" for="image">
          <AddIcon className="add-icon" />
          <Input
            type="file"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageInput}
          />
        </label>

        <ImageList cols={2}>
          {imagesToPreview.map((item) => (
            <ImageListItem>
              <img src={item} alt={item.name} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>

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
