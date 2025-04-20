import { Box, Typography, Paper } from "@mui/material";

const SidebarSection = ({ title, children }) => (
  <Paper sx={{ mb: 2, p: 2 }}>
    <Typography variant="subtitle1" fontWeight="bold" mb={1}>
      {title}
    </Typography>
    {children}
  </Paper>
);

const RightSidebar = () => (
  <>
    <SidebarSection title="Friend Recommendations" />
    <SidebarSection title="Quotes of the Day" />
    <SidebarSection title="Promoted Books" />
    <SidebarSection title="Explore More Books" />
    <SidebarSection title="Footer">
      <Typography variant="caption">© 2025 BookVibe Inc.</Typography>
    </SidebarSection>
  </>
);

export default RightSidebar;
