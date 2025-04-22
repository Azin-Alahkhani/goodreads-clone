import { Box, Typography, Button, LinearProgress } from "@mui/material";
import readingChallengImg from "../assets/readingCh.png"
const ReadingChallengeWidget = ({ challenge = { goal: 20, read: 8 } , empty=true }) => {
  const percent = Math.min((challenge.read / challenge.goal) * 100, 100);

  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: "bold", color: "text.primary", textTransform: "uppercase" }}
      >
        Reading Challenge
      </Typography>

     {!empty && <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body2" fontWeight="bold">
          You have read {challenge.read} of {challenge.goal} books
        </Typography>

        <LinearProgress
          variant="determinate"
          value={percent}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#00635D", // Goodreads green
            },
          }}
        />

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="text" sx={{ color: "#00635D", fontSize: "14px" }}>
            View Challenge
          </Button>
          <Button variant="text" sx={{ color: "#00635D", fontSize: "14px" }}>
            Update Progress
          </Button>
        </Box>
      </Box>}
      {empty &&   <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        Challenge yourself to read more this year!
          <Box sx={{ display: "flex", alignItems: "start",mt:0.6, gap: 1 ,mb:1}}>
            
            <Box component="img" src={readingChallengImg} sx={{
              width: 110,
              height: 131,
              objectFit: "cover",
            }} />
            <Button variant="outlined" sx={{width:"115px",borderRadius:0.7, height:"20px"}}>Start challenge</Button>
          </Box>
        </Box>}
    </Box>
  );
};

export default ReadingChallengeWidget;
