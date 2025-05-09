import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { Icon } from '@iconify/react/dist/iconify.js';

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 24, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    className="component-iconify"
    icon={icon}
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

export default Iconify;
