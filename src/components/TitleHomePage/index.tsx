import React, { memo } from "react";
import { useTitleHomePage } from "./index.hooks";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

type TitleHomePageProps = {};

export const TitleHomePage = memo(({}: TitleHomePageProps) => {
  const {} = useTitleHomePage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            margin: "0 auto",
            textAlign: "right",
            textTransform: "uppercase",
          }}
        >
          Siamo <br />
          <strong>Getapper</strong>.<br />
          Sviluppatori <br />
          <strong>JavaScript</strong> di <br />
          <strong>
            Applicazioni <br />
            Web
          </strong>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "calc(50% - 50px)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          Ciao utente, benvenuto/a nel sito ufficiale di{" "}
          <strong>Getapper</strong>. La <strong>strategia aziendale</strong> che
          ci contraddistingue da sempre è molto semplice: Sviluppare codice per
          applicazioni web utilizzando uno stack tecnologico{" "}
          <strong>ben definito e completo</strong>, basato su linguaggi di
          programmazioni e tool <strong>affermati e affidabili</strong>.
        </Typography>
      </Box>
    </Box>
  );
});

TitleHomePage.displayName = "TitleHomePage";
