import { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1.4,
      }}
    >
      <TextField
        fullWidth
        placeholder="Username"
        variant="outlined"
        size="medium"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "28px",
            height: 45,
            fontSize: "14px",
          },
        }}
      />

      <TextField
        fullWidth
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        size="medium"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "28px",
            height: 45,
            fontSize: "14px",
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                  aria-label="toggle password visibility"
                >
                  {showPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  )
}

export default LoginForm