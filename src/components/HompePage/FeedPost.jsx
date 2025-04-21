import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  TextareaAutosize,
  Divider,
  Rating,
} from "@mui/material";
import Avatar from "boring-avatars";
import { useState } from "react";
import { Link } from "react-router-dom";

const FeedPost = ({ post }) => {
    const [showCommentBtn,setShowCommentBtn]=useState(false);
    const [userNewComment, setUserNewComment]=useState("");

  return (
    <Card
      sx={{
        position: "relative",
        mb: 3,
        //p: 2,
        boxShadow: 0,
        overflow: "visible",
        border:"1px solid rgb(205, 196, 196)",
        borderRadius:0.7,
        width:"520px"
      }}
    >
      {/* Avatar outside the card */}
      <Box sx={{
          position: "absolute",
          top: 10,
          left: -20,
          width: 40,
          height: 40,
         
        }}>

      <Avatar
        size={34}
        name={post.user.name}
        variant="beam"
        //colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
      </Box>
     

      {/* Main Content Box */}
      <Box sx={{ px: 2, m:1 }}>
        {/* Name & timestamp */}
        <Box display={"flex"} sx={{display:"flex", flexDirection:"row" , width:"100%", justifyContent:"space-between" , mt:2}}>
             <Box sx={{display:"flex", flexDirection:"row",gap:1,justifyContent:"flex-start"}}> 
                <Typography variant="body1" fontWeight="bold" >
          {post.user.name}
        </Typography>
        {post.type === "review" && (
            <Typography variant="body1" fontWeight="thin" >reviewed <strong>{post.bookTitle}</strong></Typography>
          )}</Box>
         
        <Typography variant="caption" color="text.secondary" gutterBottom>
          {post.timestamp}
        </Typography>
        </Box>
            {post.type === "review" && <Box sx={{display:"flex", flexDirection:"row",gap:1,justifyContent:"flex-start", alignItems:"center"}}> 
            <Typography variant="caption" color="grey">Rating</Typography>
            <Rating value={4} size="small"/> <Button component={Link} sx={{color:"text.green", ":hover":{textDecoration:"underline", backgroundColor:"inherit", color:"text.green"}}}>
                Read {post.user.name}'s review
            </Button>
          </Box>}

        {/* Post Content */}
        <Box sx={{  }}>
          {post.type === "review" && (
            <Typography >{post.content}</Typography>
          )}
          {post.type === "progress" && (
            <Typography variant="body1">
              {post.user.name} is currently reading <strong>{post.bookTitle}</strong> : {post.content}
            </Typography>
          )}
          {post.type === "general" && (
            <Typography variant="body1"> {post.content}</Typography>
          )}
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          <Button variant="text" size="large" sx={{ p: 0, minWidth: 0 , color:"text.green", ":hover":{textDecoration:"underline" , backgroundColor:"inherit", color:"text.green"} }}>
            Like 
          </Button>•
          <Button variant="text" size="large" sx={{ p: 0, minWidth: 0 , color:"text.green", ":hover":{textDecoration:"underline" , backgroundColor:"inherit"} }}>
            Comment
          </Button>
        </Box>

        {/* Divider */}
       
      </Box>

      <Box sx={{backgroundColor:"goodreads.bgBrown2", borderTop:"1px solid rgb(205, 196, 196)",}}>
         
          <Box sx={{mt:1, mx:0.9}}><Typography variant="body1" fontWeight="bold">BlackPanda and 106 others liked this</Typography></Box>
        {/* Comment Box (basic demo) */}
        <Box sx={{ mt: 1 , p:1, borderTop:"1px solid rgb(205, 196, 196)" , display:"flex", flexDirection:"row", gap:1, alignItems:"start" }}>
         <Avatar size={34}  name="Azin Alahkhani" variant="beam"/>
          <Box sx={{display:"flex", flexDirection:"column", width:"480px", gap:1, mb:1}}>
            <TextareaAutosize
            variant="outlined"
            placeholder="Write a comment..."
            onFocus={()=>setShowCommentBtn(true)}
            onBlur={()=>setShowCommentBtn(false)}
            value={userNewComment}
            onChange={(e)=>setUserNewComment(e.target.value)}
            sx={{ mt: 1 ,backgroundColor:"white"}}
                style={{width:"100%", fontFamily: "Nimbus Sans Novus", resize: 'vertical', }}
          />
          {showCommentBtn && 
          <Button variant="outlined" disabled={userNewComment.length=== 0 } sx={{width:"110px" , height:"20px"}}>Comment</Button>}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default FeedPost;
