// theme.js or wherever your MUI theme is defined
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 12,
        fontFamily: "Helvetica",
 
    body1: {
      fontSize: '0.95rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
    caption: {
      fontSize: '0.7rem',
    },
    captionBig:{
      fontSize :'0.8rem',
    }
    
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // disables ALL CAPS globally
             fontFamily: "Helvetica",
             fontWeight:"500",

        },
      },
    },
   
  },
  palette: {
    primary: {
      main: '#3C3C3C', // Dark brown color used for text
    },
    secondary: {
      main: '#8E8E8E', // Optionally, use a lighter brown for secondary elements
    },
    text: {
      primary: '#3C3C3C', // Text color for primary content
      secondary: '#767676', // Lighter brown for secondary text
      green : '#00635D',
    },
    goodreads :{
      bgBrown :"#f9f7f5",
      bgBrown2 :"#f3f3f3",
      black:"#4f4f4d",
      brown:"#f4f4ea",
      brown2:"#e9e5d3",
    }
  },
  
});
export default theme;