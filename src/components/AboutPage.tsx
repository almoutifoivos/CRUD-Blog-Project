import { Box, Divider, Typography } from "@mui/material";
import CustomTypography from "./basics/CustomTypography";
import dividerImg from "../images/dividerImg.png";

export default function AboutPage() {
  //todo styling
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        justifyContent={"center"}
        alignItems={"center"}
        variant={"h3"}
      >
        About THE FOIVOS UPDATE
      </Typography>
      <Typography
        sx={{
          maxWidth: "90ch",
          wordBreak: "break-word",
        }}
      >
        Welcome to THE FOIVOS UPDATE! Our Mission At THE FOIVOS UPDATE, is to
        provide insightful, timely, and engaging content that keeps our readers
        informed about the latest trends, events, and stories from around the
        world. We believe in the power of information and strive to be your
        go-to source for news, analysis, and perspectives on the issues that
        matter most.
      </Typography>

      <Typography
        justifyContent={"center"}
        alignItems={"center"}
        variant={"h4"}
      >
        What We Cover
      </Typography>

      <Typography
        sx={{
          maxWidth: "90ch",
          wordBreak: "break-word",
        }}
      >
        Our blog covers a wide range of topics, including: Current Events: Stay
        up-to-date with breaking news and in-depth coverage of the most
        important happenings globally. Culture and Lifestyle: Explore articles
        on art, music, travel, and lifestyle trends that enrich and inspire.
        Technology and Innovation: Discover the latest advancements in
        technology, from groundbreaking startups to cutting-edge research.
        Health and Wellness: Learn about new health trends, wellness tips, and
        medical breakthroughs that can improve your quality of life. Opinion and
        Analysis: Read thought-provoking opinion pieces and analysis from our
        team of expert writers and guest contributors.
      </Typography>

      <Typography
        justifyContent={"center"}
        alignItems={"center"}
        variant={"h4"}
      >
        Our Team
      </Typography>

      <Typography
        sx={{
          maxWidth: "90ch",
          wordBreak: "break-word",
        }}
      >
        Our team at THE FOIVOS UPDATE is composed of passionate writers,
        editors, and researchers dedicated to delivering high-quality content.
        We bring together a diverse group of voices and perspectives to ensure a
        well-rounded view on each topic we cover. Our commitment to journalistic
        integrity and excellence drives everything we do. Why THE FOIVOS UPDATE?
        Trusted Source: We prioritize accuracy and reliability in all our
        reporting. Engaging Content: Our articles are designed to be informative
        and engaging, ensuring you not only learn but also enjoy reading.
        Diverse Perspectives: We believe in the importance of diverse viewpoints
        and strive to present balanced and comprehensive coverage. Join Our
        Community We invite you to join our growing community of readers. Follow
        us on social media, subscribe to our newsletter, and engage with our
        content by leaving comments and sharing your thoughts. Your feedback and
        participation help us to continually improve and provide the content you
        care about most.
      </Typography>
      <Typography
        sx={{
          marginTop: "1vh",
          maxWidth: "90ch",
          wordBreak: "break-word",
        }}
      >
        Thank you for visiting THE FOIVOS UPDATE. We hope you enjoy our blog and
        find it a valuable resource for staying informed and inspired. Contact
        Us Have questions, comments, or suggestions? We'd love to hear from you!
        Reach out to us at contact@thefoivosupdate.com or connect with us on our
        social media channels. Welcome to the conversation, and thank you for
        making THE FOIVOS UPDATE part of your daily reading!
      </Typography>
    </Box>
  );
}
