import { Typography , Box } from "@mui/material"
import BookHorizontalCard from "./BookHorizontalCard"
import recCover from "../assets/bookcover.webp"


const RecommendationWidget = ()=>{
const currentBook = "The Way of Kings";
const recBook = {
    id:23,
    cover:recCover,
    title:"The Book",
    author:"Miranda Allen",
    avgRating:3.5,
};

    return (
          <Box sx={{display:"flex", flexDirection:"column"}}>
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: "bold", color: "text.primary",textTransform: "uppercase" }}
      >
        Recommendations
      </Typography>
      <Typography variant="body2">Beacuse youre reading {currentBook}: </Typography>
      <BookHorizontalCard isBig={false}  book={recBook}/>
      </Box>
    )
}

export default RecommendationWidget