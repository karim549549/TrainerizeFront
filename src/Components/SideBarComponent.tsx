import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  List,
  Divider,
  Avatar,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WestIcon from '@mui/icons-material/West';
import InfoIcon from '@mui/icons-material/Info';
import SideBarItem from './SideBarItem';
import { Padding } from '@mui/icons-material';

interface SideBarProps {
  userAvatar: string;
}

export default function SideBarComponent(props: SideBarProps) {
  const { userAvatar } = props;
  const [collapseToggle, setCollapseToggle] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setCollapseToggle((prev) => !prev);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setCollapseToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#84b900',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#ffffff',
        secondary: '#aaaaaa',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        ref={sidebarRef}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        padding={3}
        sx={{
          backgroundColor: 'background.paper',
          height: '90dvh',
          width: collapseToggle ? '12rem' : '2rem',
          borderRadius: '0 0 1rem 0',
          transition: '0.3s ease', 
          boxShadow: 3,
        }}
      >
        <Box display={'flex'} justifyContent={collapseToggle ? 'flex-end' : 'center'}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={IconStyle} />
          </IconButton>
        </Box>
        
        <Box sx={DisplayStyle}>
          <List sx={DisplayStyle}>
            <SideBarItem
              icon={<HomeIcon sx={IconStyle} />}
              label="Home"
              showLabal={collapseToggle}
            />
            <SideBarItem
              icon={<CalendarMonthIcon sx={IconStyle} />}
              label="Calendar"
              showLabal={collapseToggle}
            />
            <SideBarItem
              icon={<AutoGraphIcon sx={IconStyle} />}
              label="Tracking Progress"
              showLabal={collapseToggle}
            />
          </List>
          <Divider sx={{ backgroundColor: 'primary.main' }} />

          <List sx={DisplayStyle}>
            <SideBarItem
              icon={<NotificationsActiveIcon sx={IconStyle} />}
              label="Notifications"
              showLabal={collapseToggle}
            />
            <SideBarItem
              icon={<SettingsIcon sx={IconStyle} />}
              label="Settings"
              showLabal={collapseToggle}
            />
          </List>
        </Box>

        <List sx={DisplayStyle}>
          <SideBarItem
            icon={<WestIcon sx={IconStyle} />}
            label="Exit"
            showLabal={collapseToggle}
          />
          <Divider />
          <SideBarItem
            icon={<InfoIcon sx={IconStyle} />}
            label="Info"
            showLabal={collapseToggle}
          />

          <Box display="flex" justifyContent="center">
            {userAvatar ? (
              <Avatar src={userAvatar} alt="User Avatar" />
            ) : (
              <Avatar sx={{ color: '#84b900' }}>U</Avatar>
            )}
          </Box>
        </List>
      </Box>
    </ThemeProvider>
  );
}

const IconStyle = {
  color: 'primary.main',
  fontSize: '1.7rem',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.2)',
    color: '#84b900',
  },
};

const DisplayStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.7rem',
};
