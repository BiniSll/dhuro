import { Box, Container } from "@mui/system";
import { useDispatch } from "react-redux";
import { createStory } from "../../redux/actions/storyAct";
import React, { useState, useEffect } from "react";
import {
  CardMedia,
  ImageList,
  ImageListItem,
  TextField,
  Button,
  Input,
  MenuItem,
  InputLabel,
  Select,
  FormControl
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./style/newStory.scss";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export const NewStory = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [storyType, setStoryType] = useState("Dhuro");
  const [storyTypeCategory, setStoryTypeCategory] = useState("Ndihma");
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

  const handleStoryTypeCategoryChange = (e) => {
    setStoryTypeCategory(e.target.value)
  }
  const handleStoryTypeChange = (e) => {
    setStoryType(e.target.value)
  }

  useEffect(() => {
    let fileReader,
      isCancel = false;

    if (image) {
      setImages((images) => [...images, image]);
      console.log({ images });
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ second: images });
    const formData = new FormData();
    formData.append("Name", title);
    formData.append("Description", description);
    formData.append("StoryType", storyType);
    formData.append("StoryCategoryType", storyTypeCategory);

    images.map((item) => {
      formData.append("files", item);
    });

    createStory(dispatch, formData);
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
        image={require("../../assets/images/dhurologo.png")}
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

          <InputLabel id="demo-simple-select-label">Lloji i postimit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={storyType}
            label="Age"
            onChange={handleStoryTypeChange}
            fullWidth
          >
            <MenuItem value={"Dhuro"}>Dhuro</MenuItem>
            <MenuItem value={"Ndihmo"}>Ndihmo</MenuItem>
          </Select>

          <InputLabel id="demo-simple-select-label">Kategoria postimit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={storyTypeCategory}
            label="Age"
            onChange={handleStoryTypeCategoryChange}
            fullWidth
          >
            <MenuItem value={"Ndihma"}>Ndihma</MenuItem>
            <MenuItem value={"Veshmbathje"}>Veshmbathje</MenuItem>
            <MenuItem value={"Pare"}>Pare</MenuItem>
          </Select>

        <label className="lblImage" for="image">
          <span>Shto fotografi</span>
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
          Posto
        </Button>
      </Box>
    </Container>
  );
};
