import { Box, Typography, Button } from "@mui/material";
import SlumpBusterCard from "./SlumpBusterCard";
import FeedPost from "./FeedPost";
import { IoIosSettings } from "react-icons/io";
import { FcSettings } from "react-icons/fc";

const FeedHeader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mb: 2,
      width:"520px"
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

const post = 
{
  user: {
    name: "Jane Bookworm",
    avatar: "/avatars/jane.png",
  },
  timestamp: "3w",
  type: "review", // or "general" / "progress"
  bookTitle: "The Book Thief",
  content: "This book broke my heart in the best way. Highly recommend.",
  comments: [
    { user: "Tom", text: "Totally agree!" },
    { user: "Anna", text: "It's on my TBR now!" },
  ],
};
const posts = [{
  user: {
    name: "Jane Bookworm",
    avatar: "/avatars/jane.png",
  },
  timestamp: "3w",
  type: "review", // or "general" / "progress"
  bookTitle: "The Book Thief",
  content: "This book broke my heart in the best way. Highly recommend.",
  comments: [
    { user: "Tom", text: "Totally agree!" },
    { user: "Anna", text: "It's on my TBR now!" },
  ],
},
{
  user: {
    name: "Judy Moody",
    avatar: "/avatars/jane.png",
  },
  timestamp: "1w",
  type: "progress", // or "general" / "progress"
  bookTitle: "The Raven Boys",
  content: "page 119 out of 542",
  comments: [
    { user: "Tom", text: "Totally agree!" },
    { user: "Anna", text: "It's on my TBR now!" },
  ],
},
{
  user: {
    name: "Andy McGue",
    avatar: "/avatars/jane.png",
  },
  timestamp: "1w",
  type: "general", // or "general" / "progress"
  bookTitle: "The Raven Boys",
  content: "Hi. Anyone knows any good bookstores in Kingston?",
  comments: [
    { user: "Tom", text: "Totally agree!" },
    { user: "Anna", text: "It's on my TBR now!" },
  ],
},
]
const Feed = () => (
  <Box>
    <SlumpBusterCard />
    <FeedHeader />
    
      <FeedPost post={post}/>
       <FeedPost post={posts[1]}/>
        <FeedPost post={posts[2]}/>
 
  </Box>
);

export default Feed;


