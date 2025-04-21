import {
  Box,
  Avatar,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  Divider,
} from "@mui/material";

const FeedPost = ({ post }) => {
  return (
    <Card
      sx={{
        position: "relative",
        mb: 3,
        p: 2,
        boxShadow: 1,
        overflow: "visible",
        width:"520px"
      }}
    >
      {/* Avatar outside the card */}
      <Avatar
        src={post.user.avatar}
        alt={post.user.name}
        sx={{
          position: "absolute",
          top: 10,
          left: -20,
          width: 40,
          height: 40,
          border: "2px solid white",
        }}
      />

      {/* Main Content Box */}
      <Box sx={{ pl: 7 }}>
        {/* Name & timestamp */}
        <Typography variant="subtitle2" fontWeight="bold">
          {post.user.name}
        </Typography>
        <Typography variant="caption" color="text.secondary" gutterBottom>
          {post.timestamp}
        </Typography>

        {/* Post Content */}
        <Box sx={{ mt: 1 }}>
          {post.type === "review" && (
            <Typography variant="body2">📚 “{post.content}”</Typography>
          )}
          {post.type === "progress" && (
            <Typography variant="body2">
              🔄 Progress update on <strong>{post.bookTitle}</strong>: {post.content}
            </Typography>
          )}
          {post.type === "general" && (
            <Typography variant="body2">💭 {post.content}</Typography>
          )}
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          <Button variant="text" size="small" sx={{ p: 0, minWidth: 0 }}>
            👍 Like
          </Button>
          <Button variant="text" size="small" sx={{ p: 0, minWidth: 0 }}>
            💬 Comment
          </Button>
        </Box>

        {/* Divider */}
        <Divider sx={{ my: 1 }} />

        {/* Comment Box (basic demo) */}
        <Box sx={{ mt: 1 }}>
          {post.comments?.map((c, idx) => (
            <Typography key={idx} variant="caption" display="block">
              <strong>{c.user}</strong>: {c.text}
            </Typography>
          ))}
          <TextField
            variant="standard"
            placeholder="Write a comment..."
            fullWidth
            sx={{ mt: 1 }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default FeedPost;
