import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EastIcon from '@mui/icons-material/East';

export default function WorkOutCard() {
  return (
    <>
         <Typography color="white" variant="h3" fontWeight={600} >
        Your Home Workout
        <br /> Start Here
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center">
        <PlayCircleIcon sx={{ color: 'white', fontSize: '4rem' }} />
      </Box>

      <Box display="flex"  width="100%" justifyContent={'flex-end'}>
        <Button
          sx={{
            backgroundColor: 'black',
            borderRadius: '2rem',
            padding: '0.5rem 1.5rem',
            fontSize: '1.5rem',
            color: 'white',
            textTransform: 'none',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundColor: '#333',
            },
          }}
        >
          Start Free Trial
          <Box
            component="span"
            sx={{
              marginLeft: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              color: 'black',
              backgroundColor: 'white',
              padding: '0.3rem',
            }}
          >
            <EastIcon />
          </Box>
        </Button>
      </Box>
    </>
  );
}
