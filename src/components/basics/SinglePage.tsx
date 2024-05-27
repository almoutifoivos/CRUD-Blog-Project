import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SinglePage({ post }) {
  const navigate = useNavigate();
  const [postId,setPostId] = useState();

  const handleClick = () => {
    setPostId(postId)
    navigate(`/renderPost/${post.postId}`,{ state: { ...post } }); 
  };

  return (
    <Box style={{ position: "relative", maxWidth: 345}} >
      <img
        src={post.imgLink}
        alt={post.title}
        style={{ width: "110%", height: 400, objectFit: "cover" }}
      />
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "20px",
          color: "white",
        }}
      >
        <Button
          sx={{
            background: "none",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            color: "inherit",
            outline: "none",
            "&:hover": {
              color: "#0e1111",
            },
          }}
          onClick={() => handleClick(post.id)}
        >
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
        </Button>
        <Typography
          variant="body2"
          fontSize="1rem"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {post.description}
        </Typography>
        <Typography>By: {post.authorName}</Typography>
      </Box>
    </Box>
  );
}
