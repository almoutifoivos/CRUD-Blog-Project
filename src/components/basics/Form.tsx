import { Button, Container, TextField } from "@mui/material";

export default function NewPost({ formData, onSubmit, onFormChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "15px" }}>
      <form onSubmit={onSubmit}>
        <TextField
          required
          fullWidth
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ marginTop: "2px" }}
          fullWidth
          label="Image Link"
          name="imgLink"
          value={formData.imgLink}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ marginTop: "2px" }}
          fullWidth
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ marginTop: "2px" }}
          fullWidth
          label="Content"
          name="content"
          multiline
          rows={8}
          value={formData.content}
          onChange={handleChange}
        />
        <TextField
          required
          sx={{ marginTop: "2px" }}
          fullWidth
          label="Author Name"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
