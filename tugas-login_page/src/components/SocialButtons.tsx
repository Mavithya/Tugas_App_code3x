import { Box, IconButton } from "@mui/material";
import {
  Google,
  Apple,
  Facebook,
} from "@mui/icons-material";

const SocialButtons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2.2,
        marginTop: 2,
      }}
    >
      <IconButton
        aria-label="Continue with Google"
        sx={{
          width: 52,
          height: 52,
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        <Google />
      </IconButton>

      <IconButton
        aria-label="Continue with Apple"
        sx={{
          width: 52,
          height: 52,
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        <Apple />
      </IconButton>

      <IconButton
        aria-label="Continue with Facebook"
        sx={{
          width: 52,
          height: 52,
          backgroundColor: "#000",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        <Facebook />
      </IconButton>
    </Box>
  )
}

export default SocialButtons