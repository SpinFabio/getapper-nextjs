import React, { memo } from "react";
import { useAdminAppBar } from "./index.hooks";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

type AdminAppBarProps = {};

export const AdminAppBar = memo(({}: AdminAppBarProps) => {
  const elementi = ["home", "progetti"];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Getapper CMS dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
});

AdminAppBar.displayName = "AdminAppBar";
