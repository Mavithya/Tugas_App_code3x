import { useState, type FormEvent } from "react";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    TextField,
    Link
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";


interface FormErrors {
    email?: string;
    password?: string;
}
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState<FormErrors>({});

    const [showPassword, setShowPassword] = useState(false);

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        return newErrors;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Login form is valid");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 1.4,
            }}
        >
            {/* Email */}
            <TextField
                fullWidth
                placeholder="Email"
                type="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);

                    if (errors.email) {
                        setErrors((prev) => ({
                            ...prev,
                            email: undefined,
                        }));
                    }
                }}
                error={Boolean(errors.email)}
                helperText={errors.email}
                autoComplete="email"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "28px",
                        minHeight: 45,
                        fontSize: "14px",
                    },

                    "& .MuiFormHelperText-root": {
                        marginLeft: 2,
                        marginTop: 0.5,
                    },
                }}
            />

            {/* Password */}
            <TextField
                fullWidth
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);

                    if (errors.password) {
                        setErrors((prev) => ({
                            ...prev,
                            password: undefined,
                        }));
                    }
                }}
                error={Boolean(errors.password)}
                helperText={errors.password}
                autoComplete="current-password"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "28px",
                        minHeight: 45,
                        fontSize: "14px",
                    },

                    "& .MuiFormHelperText-root": {
                        marginLeft: 2,
                        marginTop: 0.5,
                    },
                }}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowPassword((previous) => !previous)
                                    }
                                    edge="end"
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
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

            {/* Forgot password */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: -0.5,
                    marginBottom: 1.5,
                }}
            >
                <Link
                    href="#"
                    underline="none"
                    sx={{
                        fontSize: 12,
                        color: "#222",
                    }}
                >
                    Forgot Password?
                </Link>
            </Box>

            {/* Login button */}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    height: 44,
                    borderRadius: "24px",
                    backgroundColor: "#000",
                    color: "#fff",
                    textTransform: "none",
                    fontSize: 14,
                    fontWeight: 600,
                    boxShadow: "none",

                    "&:hover": {
                        backgroundColor: "#222",
                        boxShadow: "none",
                    },
                }}
            >
                Login
            </Button>
        </Box>
    )
}

export default LoginForm