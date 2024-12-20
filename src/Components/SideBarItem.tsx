import React from 'react';
import { Box, Typography } from '@mui/material';

interface SideBarItemProps {
  icon: React.ReactNode; 
  label: string; 
  showLabal: boolean; 
}

export default function SideBarItem({ icon, label, showLabal }: SideBarItemProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={showLabal ? 2 : 0} 
      sx={{
        cursor: 'pointer',
        justifyContent: showLabal ? 'flex-start' : 'center',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '0.5rem',
        },
        padding: '0.5rem 1rem',
        transition: 'background-color 0.3s ease',
      }}
    >
      {icon}

      {showLabal && (
        <Typography variant="body1" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
          {label}
        </Typography>
      )}
    </Box>
  );
}
