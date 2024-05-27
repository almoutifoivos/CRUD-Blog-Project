import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import initialPosts, { getAllPosts } from "./Posts";

export default function DeletePost() {
  const location = useLocation();
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = getAllPosts();
    setPosts(allPosts);
  }, []);

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.postId !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    console.log(`Deleted post with id: ${id}`);
    navigate('/');
  };

  const handleDelete = () => {
    if (location.state) {
      deletePost(location.state.postId);
    } else {
      console.log("No post data available");
    }
  };

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <Box>
      <Typography variant="h4">Are you sure you want to delete the post?</Typography>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleReturn}>Return</Button>
    </Box>
  );
}
