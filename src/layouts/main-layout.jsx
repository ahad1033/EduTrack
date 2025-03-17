import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { HEADER, SIDEBAR } from './config-layout';
import { Header, Sidebar } from '../components/common';
import { useThemeMode } from '../theme/ThemeProvider';

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const { isDarkMode, toggleTheme } = useThemeMode();

  const drawerWidth = SIDEBAR.drawerWidth;
  const miniDrawerWidth = SIDEBAR.miniDrawerWidth;

  const theme = useTheme();

  // Check if we're on mobile
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Auto-close sidebar on mobile
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
      }}
    >
      <Header
        open={open}
        toggleDrawer={toggleDrawer}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <Sidebar
        open={open}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
        miniDrawerWidth={miniDrawerWidth}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            xs: '100%',
            sm: `calc(100% - ${open ? drawerWidth : miniDrawerWidth}px)`,
          },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            margin: 'auto',
            maxWidth: '1400px',
            mt: `${HEADER.headerHeight}px`,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
