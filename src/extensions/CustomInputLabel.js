import React from "react";
import { InputLabel } from "@mui/material";

export const CustomInputLabel = (props) => {

  return (
    <div>
      {!!props.valueName ? (
        <InputLabel for={props.valueFor} sx={{ color: "red" }}>
          {props.name}
        </InputLabel>
      ) : null}
    </div>
  );
};
