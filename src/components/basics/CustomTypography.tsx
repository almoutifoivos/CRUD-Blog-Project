import { Typography } from "@mui/material";

export default function CustomTypography({text}) {
  return (
    <Typography
      fontSize="3rem"
      sx={{
        mr: 2,
        fontFamily: "cursive",
        fontWeight: 700,
      }}
    >
      {text}
    </Typography>
  );
}
