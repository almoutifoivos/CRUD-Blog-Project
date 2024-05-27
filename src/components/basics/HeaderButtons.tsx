import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function HeaderButtons({location,content}) {
  return (
    <Button
    component={Link}
    to={location}
    variant="text"
    color="primary"
    disableElevation
    disableTouchRipple
    sx={{
      color: "#C2B280",
      marginLeft: "3px",
      marginRight: "3px",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "transparent",
      },
    }}
  >
    <Typography
      fontSize="1.5rem"
      sx={{
        mr: 2,
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "#ffe37a",
        textDecoration: "none",
      }}
    >
      {content}
    </Typography>
  </Button>
)
}
