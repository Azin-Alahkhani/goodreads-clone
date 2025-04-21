import { Box, Typography, InputBase } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const CurrentlyReadingWidget = ({ books = [] }) => {
  const hasBooks = books.length > 0;
  const firstBook = books[0];

  return (
    <Box
      sx={{
       
        mb: 2,
      }}
    >
      <Typography
        variant="body1"
        sx={{ mb: 1, mt:2, fontWeight: "bold", color: "text.primary",textTransform: "uppercase" }}
      >
        Currently Reading
      </Typography>

      {hasBooks ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="img"
            src={firstBook.cover || "/placeholder.jpg"}
            alt={firstBook.title}
            sx={{
              width: 40,
              height: 60,
              objectFit: "cover",
              borderRadius: 0.5,
              boxShadow: 1,
            }}
          />
          <Link
            to={`/book/${firstBook.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {firstBook.title}
          </Link>
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <MenuBookIcon fontSize="small" color="primary" />
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ fontSize: "14px" }}
            >
              What are you reading?
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 1,
              py: 0.5,
              border: "1px solid #ccc",
              borderRadius: 1,
            }}
          >
            <SearchIcon fontSize="small" sx={{ mr: 1, color: "gray" }} />
            <InputBase
              placeholder="Search books"
              sx={{ fontSize: 14, width: "100%" }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CurrentlyReadingWidget;
