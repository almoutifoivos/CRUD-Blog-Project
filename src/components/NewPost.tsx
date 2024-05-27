import { useEffect, useState } from "react";
import Form from "./basics/Form";
import { getAllPosts } from "./Posts";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    imgLink: "",
    description: "",
    content: "",
    authorName: "",
  });

  const [posts, setPosts] = useState(getAllPosts());

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleFormChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let id =
      Math.random().toString(36).substr(2, 9) + "-" + Date.now().toString(36);
    let newPost = {
      postId: id,
      title: formData.title,
      imgLink: formData.imgLink,
      description: formData.description,
      content: formData.content,
      authorName: formData.authorName,
    };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    navigate('/')
  };

  return (
    <Form
      formData={formData}
      onSubmit={handleSubmit}
      onFormChange={handleFormChange}
    />
  );
}
