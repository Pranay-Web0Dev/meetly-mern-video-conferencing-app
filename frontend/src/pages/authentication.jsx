// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar } from '@mui/material';
 
// // Default MUI theme
// const defaultTheme = createTheme();
 
// export default function Authentication() {
//   // ✅ Initialize all inputs with empty strings
//   const [username, setUsername] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [name, setName] = React.useState("");
//   const [error, setError] = React.useState("");
//   const [message, setMessage] = React.useState("");
 
//   const [formState, setFormState] = React.useState(0); // 0 = login, 1 = register
//   const [open, setOpen] = React.useState(false);
 
//   const { handleRegister, handleLogin } = React.useContext(AuthContext);
 
//   let handleAuth = async () => {
//     try {
//       if (formState === 0) {
//         // Login
//         await handleLogin(username, password);
//       }
//       if (formState === 1) {
//         // Register
//         let result = await handleRegister(name, username, password);
//         console.log(result);
//         setUsername("");
//         setPassword("");
//         setMessage(result);
//         setOpen(true);
//         setError("");
//         setFormState(0); // switch back to login after signup
//       }
//     } catch (err) {
//       console.log(err);
//       let message = err.response?.data?.message || "Something went wrong";
//       setError(message);
//     }
//   };
 
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
 
//             {/* Toggle Buttons */}
//             <div>
//               <Button
//                 variant={formState === 0 ? "contained" : "outlined"}
//                 onClick={() => setFormState(0)}
//                 sx={{ mr: 1 }}
//               >
//                 Sign In
//               </Button>
//               <Button
//                 variant={formState === 1 ? "contained" : "outlined"}
//                 onClick={() => setFormState(1)}
//               >
//                 Sign Up
//               </Button>
//             </div>
 
//             {/* Auth Form */}
//             <Box component="form" noValidate sx={{ mt: 1 }}>
//               {formState === 1 && (
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="fullname"
//                   label="Full Name"
//                   name="fullname"
//                   value={name}
//                   autoFocus
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               )}
 
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
 
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 id="password"
//               />
 
//               {error && <Typography color="error">{error}</Typography>}
 
//               <Button
//                 type="button"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={handleAuth}
//               >
//                 {formState === 0 ? "Login" : "Register"}
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
 
//       {/* Snackbar for success messages */}
//       <Snackbar
//         open={open}
//         autoHideDuration={4000}
//         onClose={() => setOpen(false)}
//         message={message}
//       />
//     </ThemeProvider>
//   );
// }
 
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Snackbar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import { AuthContext } from '../contexts/AuthContext';
 
/* 🎨 Dark Zoom-like theme */
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2D8CFF', // Zoom blue
    },
    background: {
      default: '#0B0F1A',
      paper: 'rgba(20, 25, 45, 0.75)',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
});
 
export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
 
  const { handleRegister, handleLogin } = React.useContext(AuthContext);
 
  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setFormState(0);
        setUsername("");
        setPassword("");
        setName("");
        setError("");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
 
      <Grid
        container
        sx={{
          minHeight: '100vh',
          background: 'radial-gradient(circle at top, #1B2345, #0B0F1A)',
        }}
      >
        {/* Left Branding Section */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            justifyContent: 'center',
            px: 8,
            color: '#fff',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Video Meetings.
          </Typography>
          <Typography variant="h3" gutterBottom>
            Reimagined.
          </Typography>
          <Typography sx={{ opacity: 0.8, maxWidth: 420 }}>
            Secure, fast and reliable video conferencing for modern teams.
          </Typography>
        </Grid>
 
        {/* Right Auth Card */}
        <Grid item xs={12} md={5} display="flex" alignItems="center" justifyContent="center">
          <Paper
            elevation={20}
            sx={{
              p: 5,
              width: '100%',
              maxWidth: 420,
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ mb: 2, bgcolor: 'primary.main', width: 56, height: 56 }}>
                <VideocamIcon />
              </Avatar>
 
              <Typography variant="h4" gutterBottom>
                {formState === 0 ? "Sign In" : "Create Account"}
              </Typography>
 
              {/* Toggle */}
              <Box mb={2}>
                <Button
                  onClick={() => setFormState(0)}
                  variant={formState === 0 ? "contained" : "text"}
                  sx={{ mr: 1 }}
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => setFormState(1)}
                  variant={formState === 1 ? "contained" : "text"}
                >
                  Sign Up
                </Button>
              </Box>
 
              <Box width="100%">
                {formState === 1 && (
                  <TextField
                    fullWidth
                    label="Full Name"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
 
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
 
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
 
                {error && (
                  <Typography color="error" sx={{ mt: 1 }}>
                    {error}
                  </Typography>
                )}
 
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{
                    mt: 3,
                    py: 1.4,
                    fontSize: '1rem',
                    textTransform: 'none',
                  }}
                  onClick={handleAuth}
                >
                  {formState === 0 ? "Join Meeting" : "Create Account"}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
 
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </ThemeProvider>
  );
}