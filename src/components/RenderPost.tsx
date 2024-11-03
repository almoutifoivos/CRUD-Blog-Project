import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function RenderPost() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEdit = () => {
    navigate("/edit", { state: location.state });
  };

  const handleDelete = () => {
    navigate("/delete", {
      state: { title: location.state.title, postId: location.state.postId },
    });
  };

  if (!location.state) {
    return (
      <Box>
        <Typography>You have strayed from the path...</Typography>
        <Typography>This post is no longer available</Typography>
      </Box>
    );
  }
  return (
    <Box
      marginTop="10px"
      display="flex"
      justifyContent="center"
      alignContent="center"
    >
      <Box>
        <Box display="flex" justifyContent="center" alignContent="center">
          <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
            {location.state.title}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          marginTop="10px"
        >
          <Typography
            sx={{
              maxWidth: "90ch",
              wordBreak: "break-word",
            }}
          >
            {location.state.content}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          width="100%"
          padding="10px"
        >
          <ButtonGroup>
            <Button
              sx={{
                border: "none",
                backgroundColor: "#0e1111",
                color: "#ffe37a",
                marginRight: "3px",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#b2a070",
                },
              }}
              onClick={handleEdit}

            >
              Edit post
            </Button>
            <Button
              sx={{
                border: "none",
                backgroundColor: "#0e1111",
                color: "#ffe37a",
                "&:hover": {
                  border: "none",
                  backgroundColor: "#b2a070",
                },
              }}
              onClick={handleDelete}
            >
              Delete post
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}
