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
import Avatar from "boring-avatars";
import { PiChatsCircleBold } from "react-icons/pi";
import { Link } from 'react-router-dom';



const Header = ({setGlobalSearchTerm}) => {
  const isMobile = useMediaQuery("(max-width:1200px)");

  const navLinks = (
    <Box>
      <Button
      color="inherit"
      sx={{ color: "black",fontFamily: "Helvetica", textTransform: "none", '&:hover': { color: "black" }, fontSize: "1rem" }}
      component={Link} to={`/`}
      >
        Home
      </Button>
      <Button
      color="inherit" 
      sx={{  color: "black", textTransform: "none",fontFamily:"Helvetica",  fontSize: "1rem", '&:hover': { color: "black" } }}
      component={Link} to={`/my-books`}
      >
        My Books
        </Button>
      <Button
      sx={{ color: "black", textTransform: "none",fontFamily:"Helvetica",  fontSize: "1rem", '&:hover': { color: "black" } }}
      component={Link} to={`/browse`}
      color="inherit"
      >
        Browse</Button>
      <Button 
      color="inherit"
      sx={{ color: "black", textTransform: "none",fontFamily:"Helvetica",  fontSize: "1rem", '&:hover': { color: "black" } }}
      component={Link} to={`/community`}
      >Community</Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{ backgroundColor: "#f5f1e9",  height: 46 , top:46, display:"flex", justifyContent:"center", alignItems:"center", zIndex: 1000 ,flexDirection:"row", gap:3, px:18 }}
      >
       
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: "100", fontFamily: "Helvetica" }}>
              Mygood
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "normal", fontFamily: "Helvetica" }}>
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
              flexGrow: 1,
              justifyContent: "center", 
              
            }}
          >
            {navLinks}
          </Box>

          {/* SearchBar in center regardless of screen size */}
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            <SearchBar setGlobalSearchTerm={setGlobalSearchTerm}  />
          </Box>

          {/* Right: Icons + Avatar */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 , justifyItems:"flex-start" }}>
            <IconButton sx={{ height: 30, width: 30 , bgcolor:"#beb9b1" }} title="Notifications">
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton sx={{ height: 30, width: 30 , bgcolor:"#beb9b1" }} title="Group conversations">
              <PiChatsCircleBold size={40}  />
            </IconButton>
            <IconButton sx={{ height: 30, width: 30 , bgcolor:"#beb9b1"}} title="Messages">
              <MailOutlineIcon />
            </IconButton>
            <IconButton sx={{ height: 30, width: 30 , bgcolor:"#beb9b1" }} title="Settings">
              <BsPeople />
            </IconButton>
            <IconButton sx={{ height: 30, width: 30 , bgcolor:"#beb9b1" }} title="Profile">
              <Avatar name="Miss Blue" variant="beam" />
            </IconButton>
          </Box>
      
       
      </AppBar>

      {/* Second Row Nav (Only on mobile: screen < 1200px) */}
          {isMobile && (
        <Box
          sx={{
            height: "46px",
            display: "flex",
            justifyContent: "center",
            gap: 1,
            backgroundColor: "#f5f1e9",    
            width: "inherit",
            position: "fixed",
            top: 92,
            borderBottom: "solid #ccc",
          }}
        >
          {navLinks}
        </Box>
      )}
    </>
  );
};

export default Header;
