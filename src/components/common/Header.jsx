import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useTheme } from '@mui/material/styles';

import {
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

import { HEADER, SIDEBAR } from '../../layouts/config-layout';

// ------------------------------------------------------------

const Header = ({ open, toggleDrawer, toggleTheme }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          sm: `calc(100% - ${open ? SIDEBAR.drawerWidth : SIDEBAR.miniDrawerWidth}px)`,
        },
        height: HEADER.headerHeight,
        ml: { sm: `${open ? 240 : 0}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="toggle drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" sx={{ mr: 1 }}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={toggleTheme} sx={{ mr: 2 }}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Avatar alt="Admin User" src="/avatar.png" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
