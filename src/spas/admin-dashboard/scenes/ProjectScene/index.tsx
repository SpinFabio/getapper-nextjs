import React, { memo } from "react";
import { useProjectScene } from "./index.hooks";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
type ProjectSceneProps = {};

export const ProjectScene = memo(({}: ProjectSceneProps) => {
  const { projectsList } = useProjectScene();

  return (
    <Box>
      <Link to="/nuovo-progetto">
        <Button variant="outlined">Crea nuovo progetto</Button>
      </Link>
      <Typography variant={"h2"}>Progetti</Typography>
      {projectsList.map((project) => (
        <Paper key={project.name}>{project.name}</Paper>
      ))}
    </Box>
  );
});
