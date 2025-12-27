// import React, { useContext, useState } from 'react'
// import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'
// import "../App.css";
// import { Button, IconButton, TextField } from '@mui/material';
// import RestoreIcon from '@mui/icons-material/Restore';
// import { AuthContext } from '../contexts/AuthContext';
 
// function HomeComponent() {
 
 
//     let navigate = useNavigate();
//     const [meetingCode, setMeetingCode] = useState("");
 
 
//     const {addToUserHistory} = useContext(AuthContext);
//     let handleJoinVideoCall = async () => {
//         await addToUserHistory(meetingCode)
//         navigate(`/${meetingCode}`)
//     }
 
//     return (
//         <>
 
//             <div className="navBar">
 
//                 <div style={{ display: "flex", alignItems: "center" }}>
 
//                     <h2>Apna Video Call</h2>
//                 </div>
 
//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () => {
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>
 
//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
//                     }}>
//                         Logout
//                     </Button>
//                 </div>
 
 
//             </div>
 
 
//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call Just Like Quality Education</h2>
 
//                         <div style={{ display: 'flex', gap: "10px" }}>
 
//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>
 
//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     <img srcSet='/logo3.png' alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }
 
 
// export default withAuth(HomeComponent)
 
import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
  Box,
  Paper
} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import VideocamIcon from '@mui/icons-material/Videocam';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../contexts/AuthContext';
 
function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);
 
  const handleJoinVideoCall = async () => {
    if (!meetingCode.trim()) return;
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };
 
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #1B2345, #0B0F1A)',
        color: '#fff'
      }}
    >
      {/* 🔝 Top Navigation */}
      <AppBar position="static" elevation={0} sx={{ background: 'transparent' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <VideocamIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Apna Video Call
            </Typography>
          </Box>
 
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton
              color="inherit"
              onClick={() => navigate('/history')}
            >
              <RestoreIcon />
            </IconButton>
 
            <Button
              color="inherit"
              startIcon={<LogoutIcon />}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/auth");
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
 
      {/* 🎥 Main Content */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="calc(100vh - 64px)"
        px={2}
      >
        <Paper
          elevation={20}
          sx={{
            p: 5,
            maxWidth: 480,
            width: '100%',
            textAlign: 'center',
            backdropFilter: 'blur(14px)',
            background: 'rgba(20, 25, 45, 0.75)',
            borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <VideocamIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
 
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Join a Meeting
          </Typography>
 
          <Typography sx={{ opacity: 0.75, mb: 4 }}>
            Enter a meeting code to instantly join a video call
          </Typography>
 
          <TextField
            fullWidth
            label="Meeting Code"
            variant="outlined"
            value={meetingCode}
            onChange={(e) => setMeetingCode(e.target.value)}
            sx={{
              mb: 3,
              input: { fontSize: '1.1rem' }
            }}
          />
 
          <Button
            fullWidth
            size="large"
            variant="contained"
            sx={{
              py: 1.4,
              fontSize: '1rem',
              textTransform: 'none'
            }}
            onClick={handleJoinVideoCall}
          >
            Join Meeting
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}
 
export default withAuth(HomeComponent);