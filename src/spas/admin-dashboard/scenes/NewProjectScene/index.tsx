import React, { memo } from "react";
import { useNewProjectScene } from "./index.hooks";
import { Box, Typography } from "@mui/material";

type NewProjectSceneProps = {};

export const NewProjectScene = memo(({}: NewProjectSceneProps) => {
  const {} = useNewProjectScene();

  return (
    <Box>
      <Typography>Creazione nuovo progetto</Typography>
      <NewProjectScene />
    </Box>
  );
});

NewProjectScene.displayName = "NewProjectScene";
