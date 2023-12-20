import React, { memo } from "react";
import { useProjectScene } from "./index.hooks";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
type ProjectSceneProps = {};

export const ProjectScene = memo(({}: ProjectSceneProps) => {
  const { projectsList, getProjectsNumberOfProjects } = useProjectScene();

  return (
    <Box>
      <Link to="/nuovo-progetto">
        <Button variant="outlined">Crea nuovo progetto</Button>
      </Link>
      <Typography variant={"h4"}>
        Progetti attualmente attivi: {getProjectsNumberOfProjects}{" "}
      </Typography>
      <Stack>
        {projectsList.map((project) => (
          <Button key={project.name}>{project.name}</Button>
        ))}
      </Stack>
    </Box>
  );
});
