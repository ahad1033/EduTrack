import toast from 'react-hot-toast';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';

import { useTheme } from '@mui/material/styles';

import {
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

import { HEADER, SIDEBAR } from '../../layouts/config-layout';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';

// ------------------------------------------------------------

const Header = ({ open, toggleDrawer, toggleTheme }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isDarkMode = theme.palette.mode === 'dark';

  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());

    toast.success('Logged out successfully!');

    handleClose();

    navigate('/login');
  };

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

          <Avatar
            alt="Admin User"
            src="/avatar.png"
            onClick={handleAvatarClick}
          />

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              '& .MuiPaper-root': {
                borderRadius: '12px',
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
                mt: 1.25,
                p: 3,
              },
            }}
          >
            <MenuItem>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  variant="body1"
                  sx={{ textDecoration: 'none', color: 'inherit', mb: 0.5 }}
                >
                  Home
                </Typography>
              </Link>
            </MenuItem>

            <MenuItem>
              <LoadingButton
                onClick={handleLogout}
                variant="contained"
                color="error"
              >
                Logout
              </LoadingButton>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
