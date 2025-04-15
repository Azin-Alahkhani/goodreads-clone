import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import SearchBar from "./SearchBar"; // Make sure this component exists
import { BsPeople } from "react-icons/bs";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { GrChatOption } from "react-icons/gr";
import Avatar from "boring-avatars";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:1200px)");

  const navLinks = (
    <>
      <Button color="inherit">Home</Button>
      <Button color="inherit">My Books</Button>
      <Button color="inherit">Browse</Button>
      <Button color="inherit">Community</Button>
    </>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{ backgroundColor: "#f5f1e9", px: 2, height: 64 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "thin", fontFamily: "monospace" }}>
              My Good
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "monospace" }}>
              reads
            </Typography>
          </Box>

          {/* Center: Nav (only shows on wide screens) */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              '@media (max-width:1200px)': {
                display: 'none',
              },
            }}
          >
            {navLinks}
          </Box>

          {/* SearchBar in center regardless of screen size */}
          <Box sx={{ flexGrow: 1, mx: 2 }}>
            <SearchBar />
          </Box>

          {/* Right: Icons + Avatar */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton sx={{ height: 40, width: 40 }} title="Notifications">
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton sx={{ height: 40, width: 40 }} title="Group conversations">
              <GrChatOption />
            </IconButton>
            <IconButton sx={{ height: 40, width: 40 }} title="Messages">
              <MailOutlineIcon />
            </IconButton>
            <IconButton sx={{ height: 40, width: 40 }} title="Settings">
              <BsPeople />
            </IconButton>
            <IconButton sx={{ height: 40, width: 40 }} title="Profile">
              <Avatar name="Miss Blue" variant="beam" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Second Row Nav (Only on mobile: screen < 1200px) */}
      {isMobile && (
        <Box
          sx={{
            mt: 8, // push below AppBar
            display: "flex",
            justifyContent: "center",
            gap: 1,
            backgroundColor: "#f5f1e9",
            py: 1,
            borderBottom: "1px solid #ccc",
          }}
        >
          {navLinks}
        </Box>
      )}
    </>
  );
};

export default Header;
