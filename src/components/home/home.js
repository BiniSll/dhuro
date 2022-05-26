import React, { useState, useEffect } from "react";
import { StoryItem } from "../story/storyitem";
import CircularProgress from "@mui/material/CircularProgress";

export const Home = () => {
  const [stories, setStories] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setStories(persistStory);
    setIsLoading(false)
  }, []);

  return (
    <div>
      {IsLoading ? (
        <CircularProgress
          size={40}
          left={-20}
          style={{ marginLeft: "50%" }}
          sx={{ marginTop: "10px" }}
        />
      ) : (
        stories.map((story) => <StoryItem story={story} />)
      )}
    </div>
  );
};

const persistStory = [
  {
    title: "Iguana",
    username: "Iguana",
    phone: "+38349827909",
    description: "Iguana is a green iguanasdasdasa aisudhasiuhdi auhsd iuahsiasfago'dskgosdk[gdsok[gspdkspokpodskpsdokgpsodkgpdsokgspokdgpodsgpoksdgpoksdgokd uhasiudhasiudh aiudha iuhdasi uhdisauhdiaasda slkjd LASIjdoais jdoasa dpoksa doaks dpoaks pokaspdok apsokd paoskpdok aspokd psakpasokdpaoskdpaoskdpoksa dksapokisjd oiasd lajsid jaosid joaisj dosaij doisajoi jasoidj sajaso idjasoi jdoaisj doiajsodij asoij dajois doiajs oidjasu hdiusah ",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Lizard",
    username: "Lizard",
    phone: "+38349827909",
    description: "Lizard is a green lizard",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Lizard",
    username: "Lizard",
    phone: "+38349827909",
    description: "Lizard is a green lizard",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Mace",
    username: "Luan",
    phone: "+38349827909",
    description: "Lizard is a green lizard",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];
