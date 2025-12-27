import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import styles from '../styles/history.module.css'
 
export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext)
  const [meetings, setMeetings] = useState([])
  const routeTo = useNavigate()
 
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser()
        setMeetings(history)
      } catch {
        // snackbar later
      }
    }
    fetchHistory()
  }, [])
 
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB')
  }
 
  return (
    <div className={styles.root}>
      {/* HEADER */}
      <div className={styles.header}>
        <IconButton onClick={() => routeTo('/home')} className={styles.homeBtn}>
          <HomeIcon />
        </IconButton>
        <Typography variant="h5">Meeting History</Typography>
      </div>
 
      {/* CONTENT */}
      <Box className={styles.cardContainer}>
        {meetings.length > 0 ? (
          meetings.map((e, i) => (
            <Card key={i} className={styles.historyCard}>
              <CardContent>
                <Typography className={styles.code}>
                  {e.meetingCode}
                </Typography>
 
                <Typography className={styles.date}>
                  {formatDate(e.date)}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography className={styles.empty}>
            No meetings found
          </Typography>
        )}
      </Box>
    </div>
  )
}