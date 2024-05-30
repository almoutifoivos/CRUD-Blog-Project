import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "./basics/Form";
import { useEffect, useState } from "react";
import initialPosts, { getAllPosts } from "./Posts";

export default function EditPost() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = location.state || {};
  const [formData, setFormData] = useState({
    title: initialState.title || "",
    id: initialState.postId || "",
    imgLink: initialState.imgLink || "",
    description: initialState.description || "",
    content: initialState.content || "",
    authorName: initialState.authorName || "",
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = getAllPosts();
    setPosts(allPosts);
  }, []);

  const editPost = (id, updatedData) => {
    const index = posts.findIndex((post) => post.postId === id);
    if (index !== -1) {
      const updatedPosts = [...posts];
      updatedPosts[index] = { ...posts[index], ...updatedData };
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      console.log("Updated post with id: ", id);
      navigate('/');
    } else {
      console.log("Post not found");
    }
  };

  const updatePost = (e) => {
    e.preventDefault();
    editPost(formData.id, formData);
  };

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Typography variant="h4">Edit Post</Typography>
      <Form formData={formData} onSubmit={updatePost} onFormChange={handleFormChange} />
    </Box>
  );
}
