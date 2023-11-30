import React, { memo } from "react";
import { useAppDivider } from "./index.hooks";
import { Box } from "@mui/material";

type AppDividerProps = {};

export const AppDivider = memo(({}: AppDividerProps) => {
  const {} = useAppDivider();

  return (
    <Box
      sx={{
        width: "140px",
        margin: "80px auto",
        backgroundColor: "initial",
        height: "4px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {Array(6)
        .fill(1)
        .map((i, index) => {
          return (
            <Box
              sx={{
                width: "4px",
                height: "4px",
                borderRadius: "4px",
                backgroundColor: "#707070",
              }}
              key={index}
            />
          );
        })}
    </Box>
  );
});
AppDivider.displayName = "AppDivider";
