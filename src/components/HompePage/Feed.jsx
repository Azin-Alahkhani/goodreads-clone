import { Box, Typography, Button } from "@mui/material";
import SlumpBusterCard from "./SlumpBusterCard";
import Post from "./FeedPost";
import { IoIosSettings } from "react-icons/io";
import { FcSettings } from "react-icons/fc";

const FeedHeader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
    }}
  >
    <Typography variant="body" fontWeight="bold">
      UPDATES
    </Typography>
    <Button variant="text" fontSize="14px" fontWeight="bold" sx={{":hover":{textTransform:"none", bgcolor:"inherit"}, display:"flex",justifyContent:"center", gap:0.5}} >
        <FcSettings color="grey" size={18}/>
         <Typography variant="body" color="text.secondary" fontWeight="bold">
      CUSTOMIZE
    </Typography>
    </Button>
  </Box>
);

const dummyPosts = [
  {
    user: { name: "Alice", avatar: "/avatars/alice.png" },
    text: "Finished reading *The Night Circus* — 5 stars!",
    timestamp: "2 hours ago",
  },
  {
    user: { name: "Bob", avatar: "/avatars/bob.png" },
    text: "Started *Project Hail Mary*. So far, so awesome.",
    timestamp: "Yesterday",
  },
];

const Feed = () => (
  <Box>
    <SlumpBusterCard />
    <FeedHeader />
    {dummyPosts.map((post, idx) => (
      <Post key={idx} {...post} />
    ))}
  </Box>
);

export default Feed;


