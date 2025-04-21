import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const OccasionHeader = () => {

    return(
        <AppBar
        position="fixed"
        color="default"
        elevation={1}
        sx={{ backgroundColor: "#b8bffd", px: 2, height: 46 , display:"flex", justifyContent:"center", alignItems:"center", top:0, zIndex: 1000 ,flexDirection:"row", gap:5 }}
      >
       
          <Typography
            variant="h6"
            sx={{ fontWeight: "thin", fontFamily: "Helvetica", alignSelf: "center" }}
          >
            <strong>✮</strong> 100 Years of Beloved Books
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "thin", fontFamily: "Helvetica", alignSelf: "center", fontSize:"0.75rem" }}
          >
            Celebrating the Classics...
          </Typography>
        </AppBar>
    );
};

export default OccasionHeader;