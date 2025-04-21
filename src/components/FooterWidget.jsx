import { Button, Box, Typography } from "@mui/material";

const FooterWidget = () => {
  return (
  <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: 1,
      }}>
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
    <Box>
         <Typography
          variant="body1"
          sx={{
            mb: 1,
            fontWeight: "bold",
            color: "text.primary",
            textTransform: "uppercase",
          }}
        >
          Connext
        </Typography>
        <Box>social icons</Box>
    </Box>
    <Typography color="grey" variant="body2">© 2025 Goodreads, Inc.</Typography>
  </Box>
  );
};

export default FooterWidget;
