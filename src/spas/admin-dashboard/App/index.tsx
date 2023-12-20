import React, { memo } from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  MenuItem,
  ListItemText,
} from "@mui/material";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { DashboardScene } from "@/spas/admin-dashboard/scenes/DashboardScene";
import MenuIcon from "@mui/icons-material/Menu";
import useAppHooks from "./index.hooks";
import { NewProjectScene, ProjectScene } from "@/spas/admin-dashboard/scenes";

const drawerWidth = 240;
const sections = [
  {
    title: "home",
    to: "/",
  },
  {
    title: "progetti",
    to: "/progetti",
  },
];

const App: React.FC = () => {
  const { theme } = useAppHooks();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/admin">
        <Box sx={{ display: "flex" }}>
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Getapper CMS Dashboard
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
          >
            <List>
              {sections.map((section) => {
                return (
                  <Link to={section.to} key={section.title}>
                    <MenuItem>
                      <ListItemText primary={section.title} />
                    </MenuItem>
                  </Link>
                );
              })}
            </List>
          </Drawer>

          <Box
            component={"main"}
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc (100%-${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<DashboardScene />} />
              <Route path="/progetti" element={<ProjectScene />} />
              <Route path="/nuovo-progetto" element={<NewProjectScene />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default memo(App);
