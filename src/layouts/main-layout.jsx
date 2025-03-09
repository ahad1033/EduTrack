import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, useTheme } from '@mui/material/styles';

import { HEADER, SIDEBAR } from './config-layout';
import { Header, Sidebar } from '../components/common';
import { lightTheme, darkTheme } from '../theme/index.js';

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box sx={{ display: 'flex' }}>
        <Header
          open={open}
          toggleDrawer={toggleDrawer}
          toggleTheme={toggleTheme}
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
            transition: (theme) =>
              theme.transitions.create(['margin', 'width'], {
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
              backgroundColor: theme.palette.background.default
            }}
          >
            <Outlet />
          </Box>
        </Box>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: isDarkMode ? '#333' : '#fff',
              color: isDarkMode ? '#fff' : '#333',
            },
            duration: 3000,
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
