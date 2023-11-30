import React, { memo, ReactNode } from "react";
import { useProjectCard } from "./index.hooks";
import { Avatar, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

type ProjectCardProps = {
  index: number;
  title: string;
  description: ReactNode;
};

export const ProjectCard = memo(
  ({ index, title, description }: ProjectCardProps) => {
    const {} = useProjectCard();

    return (
      <Grid item lg={3} md={6} sm={12}>
        <Grid
          container
          alignItems="center"
          sx={{
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              width: "80px",
              height: "80px",
              border: "2px solid #78a1B7",
              color: "#78a1B7",
              background: "#fff",
              fontWeight: 900,
              fontSize: 30,
            }}
          >
            {index}
          </Avatar>

          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            {title}
          </Typography>

          {description}
        </Grid>
      </Grid>
    );
  },
);
ProjectCard.displayName = "ProjectCard";
