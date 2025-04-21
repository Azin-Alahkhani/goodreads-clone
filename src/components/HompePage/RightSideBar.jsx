import { Box, Typography, Paper, Divider } from "@mui/material";
import NewsWidget from "../NewsWidget";
import RecommendationWidget from "../RecommendationWidget";
import FooterWidget from "../FooterWidget";


const SidebarSection = ({ title, children }) => (
  <Paper sx={{ mb: 2, p: 2 , backgroundColor:"inherit"}}>
    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
      {title}
    </Typography>
    {children}
  </Paper>
);

const RightSidebar = () => (
  <Box
        sx={{
          width: "300px",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          backgroundColor:"inherit",
          gap:1,
          ml:1,
        }}
      >
    <NewsWidget />
    <Divider sx={{my:1}}/>
    <RecommendationWidget />
     <Divider sx={{my:1}}/>
     <FooterWidget />
    
  </Box>
);

export default RightSidebar;
