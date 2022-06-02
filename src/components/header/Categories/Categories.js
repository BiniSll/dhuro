import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
// import { getCategories } from "../../redux/actions/header";

export const Categories = () => {
  const [categories, setCategories] = useState(["rroba", "mobilje", "para"]);

  //   useEffect(() => {
  //     //get categories
  //     // getCategories().then((response) => {
  //     //     setCategories(categories => [...categories, response]);
  //     // });
  //     console.log("Categories");
  //   }, []);

  return (
    <div>
      {categories.map((category) => {
        return (
          <Button
            style={{ backgroundColor: "#213123", color: "white" }}
            color="inherit"
            variant="contained"
            sx={{
              flexGrow: 1,
              borderRadius: 10,
              marginX: 1,
            }}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
};
