import { Box , Typography , Button } from "@mui/material";
import newsImg from "../assets/news.jpg";

const NewsWidget = ()=>{

    return(
         <Box sx={{display:"flex", flexDirection:"column"}}>
      <Typography
        variant="body1"
        sx={{ mb: 1, fontWeight: "bold", color: "text.primary",textTransform: "uppercase" }}
      >
        News  & Interviews
      </Typography>
      <Button variant="text" sx={{mb: 1,p:0, fontSize:"15px" ,justifyContent:"flex-start", fontWeight: "bold",textAlign:"left", color:"text.green", ":hover":{textDecoration:"underline", backgroundColor:"inherit"}}}>63 New Paperbacks to Throw in Your Bag Today</Button>
      <img width={300} height={127} src={newsImg} />

      <Typography variant="captionB" color="grey" sx={{mt:1}}>123 likes</Typography>
      </Box>
    )
}

export default NewsWidget;