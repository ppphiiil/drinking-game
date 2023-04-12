import React, { useContext, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { MyContext } from "../old/MyContextContainer";
import { styled } from "@mui/material";

const NavigationTopContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: "10px 15px 5px 10px",
}));

export default function NavigationTop() {
  return (
    <NavigationTopContainer>
      <HelpOutlineOutlinedIcon />
    </NavigationTopContainer>
  );
}
