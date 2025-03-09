import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { useTheme, useMediaQuery, IconButton } from '@mui/material';

import {
  Dashboard as DashboardIcon,
  People as TeachersIcon,
  School as SchoolIcon,
  MenuBook as ClassesIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

// ------------------------------------------------------------

const Sidebar = ({ open, drawerWidth = 240, miniDrawerWidth = 65, toggleDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Analytics', icon: <DashboardIcon />, path: '/' },
    { text: 'Teachers', icon: <TeachersIcon />, path: '/teachers' },
    { text: 'Classes', icon: <ClassesIcon />, path: '/classes' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  // Different drawer styles based on screen size and open state
  const getDrawerStyle = () => {
    if (isMobile) {
      return {
        display: open ? 'block' : 'none',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
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
          transition: 'justify-content 0.3s ease', // Add transition for justify content
        }}
      >
        <SchoolIcon color="primary" sx={{ marginY: 0.5 }} />
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
                  borderColor: 'primary.main',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
