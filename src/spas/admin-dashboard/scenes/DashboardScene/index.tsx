import React, { memo } from "react";
import { useDashboardScene } from "./index.hooks";
import { Typography } from "@mui/material";

type DashboardSceneProps = {};

export const DashboardScene = memo(({}: DashboardSceneProps) => {
  const {} = useDashboardScene();

  return <Typography>Benvenuti</Typography>;
});

DashboardScene.displayName = "DashboardScene";
