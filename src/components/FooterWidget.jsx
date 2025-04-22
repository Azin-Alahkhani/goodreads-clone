import { Button, Box, Typography } from "@mui/material";
import instaIcon from "../assets/footer_instagram.svg"
import twitterIcon from "../assets/footer_twitter.svg"
import facebookIcon from "../assets/footer_facebook.svg"
import linkedinIcon from "../assets/footer_linkedin.svg"
import googleplay from "../assets/googleplay.png"
import appstore from "../assets/appstore.svg"



const FooterWidget = ({isHome = true}) => {
  return (
  <Box sx={{
        display:"flex",
        flexDirection: isHome ?  "column" :"row",
        justifyContent: isHome ? "flex-start" :"space-between",
        gap: 1,
        mt: isHome ? 2 : 5,
        mb:2,
        mx: isHome ? 1 : 9,
      }}>
       <Box sx={{gap:5 , display:"flex", flexDirection: isHome?"column":"row" , mx:!isHome ? 10 :"10px"}}>
         {/* company & work with us */}
      <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontWeight: "bold",
            color: "text.primary",
            textTransform: "uppercase",
          }}
        >
          Company
        </Typography>
        {[
          "About us",
          "Careers",
          "Terms",
          "Privacy",
          "Interested based ads",
          "Ad preference",
          "Help",
        ].map((text) => (
          <Typography
            variant="captionB"
            key={text}
            sx={{
              fontWeight: "thin",
              mb: "3px",
              color: "text.primary",
              ":hover": { textDecoration: "underline", cursor: "pointer" },
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontWeight: "bold",
            color: "text.primary",
            textTransform: "uppercase",
          }}
        >
          Work with us
        </Typography>
        {["Authors", "Advertise", "Authors and ads blog"].map((text) => (
          <Typography
            variant="captionB"
            key={text}
            sx={{
              fontWeight: "thin",
              mb: "3px",
              color: "text.primary",
              ":hover": { textDecoration: "underline", cursor: "pointer" },
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
    {/*connect */}
    <Box >
         <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontWeight: "bold",
            color: "text.primary",
            textTransform: "uppercase",
          }}
        >
          Connet
        </Typography>
        <Box sx={{display:"flex",flexDirection:"row", gap:1}}>
          <img src={instaIcon} />
          <img src={twitterIcon} />
          <img src={facebookIcon} />
          <img src={linkedinIcon} />
        </Box>
    </Box>
       </Box>
    {/*appstore & googleplay & version */}
    <Box sx={{mx : isHome ? 1 : 10}}>
      <Box sx={{display:"flex", flexDirection:"row", gap:2, mt:1}}>
          <img src={appstore} width={120} height={40}/>
          <img src={googleplay} width={120} height={40}/>
    </Box>
    <Typography variant="body1" sx={{my:1}}>Mobile Version</Typography>
    <Typography color="grey" variant="body2">© 2025 Goodreads, Inc.</Typography>
    </Box>
  </Box>
  );
};

export default FooterWidget;
