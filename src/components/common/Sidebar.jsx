import { useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { useTheme, useMediaQuery } from '@mui/material';
import { useThemeMode } from '../../theme/ThemeProvider';

import {
  Menu as MenuIcon,
  Close as CloseIcon,
  School as SchoolIcon,
  People as TeachersIcon,
  MenuBook as ClassesIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
} from '@mui/icons-material';

// ------------------------------------------------------------

const Sidebar = ({
  open,
  drawerWidth = 240,
  miniDrawerWidth = 65,
  toggleDrawer,
}) => {
  const navigate = useNavigate();

  const location = useLocation();

  const theme = useTheme();

  const { isDarkMode } = useThemeMode();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Analytics', icon: <DashboardIcon />, path: '/' },
    { text: 'Teachers', icon: <TeachersIcon />, path: '/teachers' },
    { text: 'Students', icon: <TeachersIcon />, path: '/students' },
    { text: 'Classes', icon: <ClassesIcon />, path: '/classes' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  // Different drawer styles based on screen size and open state
  const getDrawerStyle = () => {
    if (isMobile) {
      return {
        // display: open ? 'block' : 'none',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          transform: !open && `translateX(-100%)`,
        },
      };
    } else {
      // Desktop - either full width or mini width
      return {
        width: open ? drawerWidth : miniDrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : miniDrawerWidth,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      };
    }
  };

  // Use temporary drawer for mobile, persistent for desktop
  const drawerVariant = isMobile ? 'temporary' : 'permanent';

  return (
    <Drawer
      variant={drawerVariant}
      anchor="left"
      open={isMobile ? open : true}
      sx={getDrawerStyle()}
    >
      <Box
        sx={{
          p: 2,
          gap: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: open ? 'flex-start' : 'center',
          transition: 'justify-content 0.3s ease',
        }}
      >
        <SchoolIcon color="success" sx={{ marginY: 0.5 }} />
        {open && (
          <Typography variant="h6" fontWeight="bold">
            EduTrack
          </Typography>
        )}

        {/* Toggle button for mobile view */}
        {isMobile && (
          <IconButton onClick={toggleDrawer} sx={{ marginLeft: 'auto' }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Box>

      <Divider />

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                '&.Mui-selected': {
                  borderRight: '3px solid',
                  borderColor: 'success.main',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: location.pathname === item.path && 'success.main',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && (
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      color: location.pathname === item.path && 'success.main',
                      fontWeight: location.pathname === item.path && 600,
                    },
                  }}
                  primary={item.text}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
