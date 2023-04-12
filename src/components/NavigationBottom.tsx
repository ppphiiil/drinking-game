import React, { useState } from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

//Icons
import RestoreIcon from "@mui/icons-material/Restore";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { styled } from "@mui/material";
import { NavLink, useHistory } from "react-router-dom";

const NavigationButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
}));

export default function NavigationBottom() {
  const [page, setPage] = useState("Game");
  const history = useHistory();

  return (
    <NavigationButtonContainer>
      <Box sx={{ width: 375 }}>
        <BottomNavigation
          showLabels
          value={page}
          onChange={(event, newValue) => {
            setPage(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => history.replace("/")}
            label="Karten"
            icon={<DashboardIcon />}
          />
          <BottomNavigationAction label="History" icon={<RestoreIcon />} />

          <BottomNavigationAction
            onClick={() => history.replace("/settings")}
            label="Einstellungen"
            icon={<SettingsIcon />}
          />
        </BottomNavigation>
      </Box>
    </NavigationButtonContainer>
  );
}
