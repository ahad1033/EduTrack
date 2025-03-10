import CardHeader from '@mui/material/CardHeader';

// ----------------------------------------------------------------------

const CustomCardHeader = ({
  title = '',
  subheader = '',
  action = null,
  sx = {},
}) => {
  return (
    <CardHeader
      title={title}
      action={action}
      subheader={subheader}
      sx={{ ...sx, mb: 3, color: 'success.main' }}
      titleTypographyProps={{ variant: 'h4', fontWeight: 500 }}
    />
  );
};

export default CustomCardHeader;
