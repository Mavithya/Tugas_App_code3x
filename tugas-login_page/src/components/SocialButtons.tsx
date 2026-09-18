import { Box, IconButton, CircularProgress, Tooltip } from "@mui/material";
import {
  Google,
  Apple,
  Facebook,
} from "@mui/icons-material";

import { useState } from "react";


import { signInWithGoogle } from "../services/auth";

const SocialButtons = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const { accessToken } = await signInWithGoogle();

      sessionStorage.setItem(
        "googleAccessToken",
        accessToken
      );

      window.location.href = "/token";
    } catch (error) {
      console.error("Google sign-in failed:", error);
      setError("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2.2,
          marginTop: 2,
        }}
      >
        <Tooltip title="Continue with Google">
          <span>
            <IconButton
              onClick={handleGoogleLogin}
              disabled={loading}
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
              {loading ? (
                <CircularProgress
                  size={22}
                  sx={{ color: "#fff" }}
                />
              ) : (
                <Google />
              )}
            </IconButton>
          </span>
        </Tooltip>


    



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

        {error && (
          <Box
            sx={{
              textAlign: "center",
              marginTop: 2,
              fontSize: 13,
              color: "error.main",
            }}
          >
            {error}
          </Box>
        )}
    </Box>
  )
}

export default SocialButtons