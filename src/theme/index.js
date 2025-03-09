import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1B5E20',
      light: '#4C8C4A',
      dark: '#003D00',
    },
    secondary: {
      main: '#2E7D32',
      light: '#60AD5E',
      dark: '#005005',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1B5E20',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ ownerState, theme }) => ({
          boxShadow: theme.shadows[5],
          borderRadius: theme.shape.borderRadius * 2,
          ...(!ownerState.fullScreen && {
            margin: theme.spacing(2),
          }),
        }),
        paperFullScreen: {
          borderRadius: 0,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0 24px',
        },
        dividers: {
          borderTop: 0,
          borderBottomStyle: 'dashed',
          paddingBottom: 24,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 24,
          '& > :not(:first-of-type)': {
            marginLeft: 12,
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#424242',
      light: '#6D6D6D',
      dark: '#1B1B1B',
    },
    secondary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#212121',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ ownerState, theme }) => ({
          boxShadow: theme.shadows[5],
          borderRadius: theme.shape.borderRadius * 2,
          backgroundColor: '#1E1E1E',
          ...(!ownerState.fullScreen && {
            margin: theme.spacing(2),
          }),
        }),
        paperFullScreen: {
          borderRadius: 0,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0 24px',
        },
        dividers: {
          borderTop: 0,
          borderBottomStyle: 'dashed',
          paddingBottom: 24,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 24,
          '& > :not(:first-of-type)': {
            marginLeft: 12,
          },
        },
      },
    },
  },
});
