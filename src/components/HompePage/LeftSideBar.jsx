import { Box, Typography, Paper, Divider } from "@mui/material";

const SidebarCard = ({ title, children }) => (
  <Paper sx={{ mb: 2, p: 2 }}>
    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
      {title}
    </Typography>
    {children}
  </Paper>
);

const LeftSidebar = () => (
  <>
    <SidebarCard title="Currently Reading">
      {/* Book cover + progress bar */}
    </SidebarCard>
    <Divider sx={{my:2}} />
    <SidebarCard title="Reading Challenge">
      {/* Progress bar + X books out of Y */}
    </SidebarCard>
    <SidebarCard title="Want to Read">
      {/* List of titles/covers */}
    </SidebarCard>
    <SidebarCard title="Your Shelves">
      {/* List of shelf links */}
    </SidebarCard>
  </>
);

export default LeftSidebar;
