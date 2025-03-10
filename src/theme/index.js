import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#1B5E20',
    //   light: '#4C8C4A',
    //   dark: '#003D00',
    // },
    // secondary: {
    //   main: '#2E7D32',
    //   light: '#60AD5E',
    //   dark: '#005005',
    // },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
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
    MuiButton: {
      styleOverrides: {
        root: {
          paddingRight: 20,
          paddingLeft: 20,
          borderRadius: 8,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#424242',
    //   light: '#6D6D6D',
    //   dark: '#1B1B1B',
    // },
    // secondary: {
    //   main: '#212121',
    //   light: '#484848',
    //   dark: '#000000',
    // },
    background: {
      default: '#141A21',
      paper: '#1C252E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // backgroundColor: '#141A21',
          backgroundColor: '#1B5E20',
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
    MuiButton: {
      styleOverrides: {
        root: {
          paddingRight: 20,
          paddingLeft: 20,
          borderRadius: 8,
        },
      },
    },
  },
});
