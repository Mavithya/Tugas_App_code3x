import {
  Box,
  Divider,
  Link,
  Typography,
} from "@mui/material";

import LoginForm from "../components/LoginForm";
import SocialButtons from "../components/SocialButtons";
import IllustrationPanel from "../components/IllustrationPanel";

const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "0.85fr 1.15fr",
          },
          gap: { xs: 4, md: 6 },
          alignItems: "stretch",
        }}
      >
        {/* LEFT SIDE */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            maxWidth: 460,
            margin: "0 auto",
            padding: { xs: 1, md: 3 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: 36, sm: 44, md: 48 },
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#000",
              marginBottom: 1.5,
            }}
          >
            Welcome back!
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#666",
              lineHeight: 1.5,
              marginBottom: 5,
            }}
          >
            Simplify your workflow and boost your productivity
            <br />
            with <strong>Tuga&apos;s App.</strong> Get started for free.
          </Typography>

          <LoginForm />


          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              marginTop: 4,
            }}
          >
            <Divider sx={{ flex: 1 }} />

            <Typography
              sx={{
                fontSize: 13,
                color: "#333",
                whiteSpace: "nowrap",
              }}
            >
              or continue with
            </Typography>

            <Divider sx={{ flex: 1 }} />
          </Box>
          {/* SOCIAL BUTTONS */}
          <SocialButtons />

          <Box
            sx={{
              textAlign: "center",
              marginTop: { xs: 6, md: 10 },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: 13,
                color: "#222",
              }}
            >
              Not a member?{" "}
            </Typography>

            <Link
              href="#"
              underline="none"
              sx={{
                fontSize: 13,
                color: "#668b58",
                fontWeight: 500,
              }}
            >
              Register now
            </Link>
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <IllustrationPanel />
      </Box>
    </Box>
  )
}

export default LoginPage