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
      sx={{ ...sx, mb: 3 }}
      title={title}
      action={action}
      subheader={subheader}
      titleTypographyProps={{ variant: 'h4' }}
    />
  );
};

export default CustomCardHeader;
