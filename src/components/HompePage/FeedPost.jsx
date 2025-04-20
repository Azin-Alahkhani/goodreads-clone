import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";

const Post = ({ user, text, timestamp }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent sx={{ display: "flex", gap: 2 }}>
      <Avatar src={user.avatar} />
      <Box>
        <Typography variant="body1" fontWeight="bold">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
        <Typography variant="caption" color="text.disabled">
          {timestamp}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Post;
