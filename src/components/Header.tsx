import { AppBar, Box, Button, Typography } from "@mui/material";
import HeaderButtons from "./basics/HeaderButtons";

export default function Header() {
  return (
    <AppBar
      sx={{
        position: "relative",
        width: "100%",
        background: "#ffe37a",
        display: "flex",
        direction:"column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        fontSize="3rem"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "#0e1111",
          textDecoration: "none",
        }}
      >
        THE FOIVOS UPDATES
      </Typography>
      <Box sx={{
        background:'black',
        width:'100%',
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        direction:"horizontal"
      }}>
        <HeaderButtons location={"/"} content={"POSTS"} />
        <HeaderButtons location={"/about"} content={"ABOUT"} />
        <HeaderButtons location={"/newPost"} content={"NEW POST"} />
      </Box>
    </AppBar>
  );
}
