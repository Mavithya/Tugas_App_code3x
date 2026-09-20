import { Box, Typography, Button, Paper } from "@mui/material";
import { useEffect, useState } from "react";


const TokenPage = () => {

  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem(
      "googleAccessToken"
    );

    if (token) {
      setAccessToken(token);
    }
  }, []);

  const handleCopy = async () => {
    if (!accessToken) {
      return;
    }

    await navigator.clipboard.writeText(accessToken);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        backgroundColor: "#f7f7f7",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 900,
          padding: { xs: 3, md: 5 },
          borderRadius: 3,
        }}
      >
        <Typography variant="h4"
         sx={{
            fontWeight: 700,
            marginBottom: 2,
          }}>
          Authentication Successful
        </Typography>
        <Typography
          sx={{
            color: "#666",
            marginBottom: 3,
          }}
        >
          Your Google access token:
        </Typography>

        {accessToken ? (
          <>
            <Box
              sx={{
                padding: 2,
                borderRadius: 2,
                backgroundColor: "#f1f1f1",
                overflow: "auto",
                wordBreak: "break-all",
                fontFamily: "monospace",
                fontSize: 13,
                lineHeight: 1.6,
              }}
            >
              {accessToken}
            </Box>

            <Button
              variant="contained"
              onClick={handleCopy}
              sx={{
                marginTop: 3,
                backgroundColor: "#000",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
              Copy Access Token
            </Button>
          </>
        ) : (
          <Typography color="error">
            No access token found.
          </Typography>
        )}
      </Paper>
    </Box>
  )
}

export default TokenPage