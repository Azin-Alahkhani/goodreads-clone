import { Typography, Grid } from "@mui/material";
import BookCard from "./BookCard";

const ShelfSection = ({ title }) => {
  return (
    <>
      <Typography variant="h5" sx={{ mt: 4 }}>{title}</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {/* Replace with dynamic data later */}
        <BookCard title="Dune" author="Frank Herbert" />
        <BookCard title="1984" author="George Orwell" />
      </Grid>
    </>
  );
};

export default ShelfSection;
