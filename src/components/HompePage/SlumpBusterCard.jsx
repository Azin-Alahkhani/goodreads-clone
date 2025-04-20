import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import slumpBusterImage from "../../assets/SlumpBuster.jpg";

const SlumpBusterCard = () => (
  <Card sx={{ mb: 3 , height:"180px" }}>
    <CardMedia
      component="img"
      height="114px"
      image={slumpBusterImage}
      alt="Bust your reading slump"
    />
    <CardContent>
      <Typography variant="h6" fontWeight="bold" fontFamily= "Nimbus Sans Novus" >
        Need Help Busting a Reading Slump?
      </Typography>
      <Typography variant="body1" sx={{fontFamily: "Nimbus Sans Novus" , color:"text.secondary"}}>
        We've got 132 page-turning books to inspire you anew!
      </Typography>
    </CardContent>
  </Card>
);

export default SlumpBusterCard;
