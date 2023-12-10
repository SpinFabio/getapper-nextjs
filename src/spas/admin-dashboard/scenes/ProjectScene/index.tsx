import React, { memo } from "react";
import { useProjectScene } from "./index.hooks";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
type ProjectSceneProps = {};

export const ProjectScene = memo(({}: ProjectSceneProps) => {
  const {} = useProjectScene();
  return (
    <Box>
      <Link to="/nuovo-progetto">
        <Button variant="outlined">Crea nuovo progetto</Button>
      </Link>

      <Typography>Progetti</Typography>
    </Box>
  );
});
