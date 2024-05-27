import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import worldMap from "../images/map.png";
import SinglePage from "./basics/SinglePage";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import { getAllPosts } from "./Posts";

const POSTS_PER_PAGE = 4;

export default function Home() {
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const initialPage = pageNumber ? parseInt(pageNumber, 10) : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [posts, setPosts] = useState([]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  useEffect(() => {
    const allPosts = getAllPosts();
    setPosts(allPosts);
  }, []);

  useEffect(() => {
    if (pageNumber) {
      const newPage = parseInt(pageNumber, 10);
      if (!isNaN(newPage)) {
        setCurrentPage(newPage);
      }
    } else {
      setCurrentPage(1);
    }
  }, [pageNumber]);

  const handlePageChange = (pageNumber) => {
    navigate(`/page/${pageNumber}`);
  };

  const getPaginatedPosts = () => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return posts.slice(startIndex, endIndex);
  };

  const getPostContainerWidth = () => {
    const currentPagePosts = getPaginatedPosts();
    if (currentPagePosts.length < POSTS_PER_PAGE && currentPagePosts.length === 1) {
      return "100%";
    } else {
      return "calc(40% - 10px)";
    }
  };

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <img src={worldMap} alt="World Map" />
      </Box>
      <Box>
        <Typography display="flex" fontSize="3rem" justifyContent="center">
          The latest news from around the world
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        padding="3px"
        justifyContent="space-around"
      >
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap="20px"
          maxWidth="800px"
          marginX="auto"
        >
          {getPaginatedPosts().map((post) => (
            <Box
              key={post.postId}
              width={getPostContainerWidth()}
              padding="30px"
            >
              <SinglePage post={post} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            sx={{
              marginBottom: "10px",
              textDecoration: "underline",
              margin: "0 5px",
            }}
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            variant={index + 1 === currentPage ? "outlined" : "text"}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
