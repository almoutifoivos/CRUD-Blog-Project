import {
  BottomNavigation,
  Box,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      sx={{
        mt: "auto",
        display: "flex",
        flexWrap: "wrap",
        bottom: "0",
        width: "100%",
        backgroundColor: "black",
        color: "white",
        justifyContent:"space-evenly",
        alignItems:"center"
      }}
    >
      <Typography variant="body1" align="center">
        <Chip
          sx={{
            color: "white",
          }}
          icon={<CopyrightIcon />}
          label={"FOIVOS ALMOUTI"}
        />
        <Chip
          sx={{
            color: "white",
          }}
          icon={<ContactPhoneIcon />}
          label={"6938342926"}
        />
        <Chip
          sx={{
            color: "white",
          }}
          icon={<EmailIcon />}
          label={"almoutifoivos@gmail.com"}
        />
      </Typography>
    </Box>
  );
}
