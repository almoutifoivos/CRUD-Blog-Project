import { Box } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RenderPost from "./components/RenderPost";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh"> 
        <Header />
        <Box flex="1" overflow="auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page/:pageNumber" element={<Home />} />
            <Route path="/renderPost/:postId" element={<RenderPost />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/newPost" element={<NewPost />} />
            <Route path="/edit" element={<EditPost />} />
            <Route path="/delete" element={<DeletePost />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
