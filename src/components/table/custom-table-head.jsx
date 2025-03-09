import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

import { visuallyHidden } from '@mui/utils';

// ----------------------------------------------------------------------

const CustomTableHead = ({
  columns = [],
  order,
  orderBy,
  onRequestSort = null,
  sx = {},
}) => {
  const createSortHandler = (property) => (event) => {
    if (onRequestSort) {
      onRequestSort(event, property);
    }
  };

  return (
    <TableHead sx={{ ...sx }}>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align || 'left'}
            sortDirection={orderBy === column.id ? order : false}
            sx={{
              width: column.width || 'auto',
              minWidth: column.minWidth || 'auto',
              ...column.sx,
            }}
          >
            {onRequestSort ? (
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
                {orderBy === column.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              column.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default CustomTableHead;
