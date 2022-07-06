import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  Paper,
} from "@mui/material";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { signUpAction } from "../../../actions/authAction";
const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const SignupPage = () => {
  const dispatch = useDispatch();
  const [signInfo, setSignInfo] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setSignInfo({ ...signInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signUpAction(signInfo));
  };

  return (
    <Container
      component={Paper}
      maxWidth="xs"
      sx={{ backgroundColor: "#f5f7fa" }}
    >
      <Box
        sx={{
          marginTop: 6,
          paddingTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                value={signInfo.firstName}
                onChange={onChange}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={signInfo.lastName}
                onChange={onChange}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={signInfo.email}
                onChange={onChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={signInfo.password}
                onChange={onChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                placeholder="Input the password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EnhancedEncryptionIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 3, paddingBottom: 3 }} />
    </Container>
  );
};

export default SignupPage;
