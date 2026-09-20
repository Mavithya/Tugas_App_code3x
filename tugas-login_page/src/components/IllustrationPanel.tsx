import { Box, Typography } from "@mui/material";

const IllustrationPanel = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: { xs: 350, md: 600 },
        borderRadius: "22px",
        backgroundColor: "#f3f8ee",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 3, md: 5 },
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src="/illustration.svg"
        alt="illustration"
        sx={{
          width: { xs: "70%", sm: "65%", md: "82%" },
          maxWidth: 430,
          height: "auto",
          objectFit: "contain",
        }}
      />

      <Box sx={{ marginTop: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: 20, md: 24 },
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          Make your work easier and organized
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: 20, md: 24 },
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          with Tuga’s App
        </Typography>
      </Box>
    </Box>
  )
}

export default IllustrationPanel