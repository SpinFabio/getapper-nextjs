import React, { memo } from "react";
import { useNewProjectScene } from "./index.hooks";
import { Box, Typography } from "@mui/material";
import { NewProjectForm } from "@/components/_admin/NewProjectForm";

type NewProjectSceneProps = {};

export const NewProjectScene = memo(({}: NewProjectSceneProps) => {
  const {} = useNewProjectScene();

  return (
    <Box>
      <Typography>Creazione nuovo progetto</Typography>
      <NewProjectForm />
    </Box>
  );
});

NewProjectScene.displayName = "NewProjectScene";
