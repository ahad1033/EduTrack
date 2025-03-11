import CardHeader from '@mui/material/CardHeader';

import { useMediaQuery, useTheme } from '@mui/material';

// ----------------------------------------------------------------------

const CustomCardHeader = ({
  title = '',
  subheader = '',
  action = null,
  sx = {},
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <CardHeader
      title={title}
      action={action}
      subheader={subheader}
      sx={{ ...sx, mb: 3, color: 'success.main' }}
      titleTypographyProps={{
        variant: isMobile ? 'h5' : 'h4',
        fontWeight: 500,
      }}
      subheaderTypographyProps={{ variant: 'p', ml: 0.5, mt: 0.5 }}
    />
  );
};

export default CustomCardHeader;
