import React, { memo } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

type AppTopBarProps = {};

export const AppTopBar = memo(({}: AppTopBarProps) => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img
              src="https://www.getapper.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.e4e20352.png&w=128&q=75"
              alt="Logo"
              style={{ width: 40, height: 40 }} // Regola le dimensioni dell'immagine
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "Gray" }}
          >
            Getapper | Sviluppatori JavaScript di professione
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Other components or content */}
    </Box>
  );
});

AppTopBar.displayName = "AppTopBar";
