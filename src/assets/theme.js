// theme.js or wherever your MUI theme is defined
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 12, // base size, down from default 14
    body1: {
      fontSize: '0.85rem',
    },
    body2: {
      fontSize: '0.75rem',
    },
    caption: {
      fontSize: '0.7rem',
    },
  },
});
export default theme;