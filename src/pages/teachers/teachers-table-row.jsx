import { useCallback } from 'react';
import toast from 'react-hot-toast';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';

import { useBoolean, useRouter } from '../../hooks';

import Iconify from '../../components/iconify/iconify';
import ConfirmDialog from '../../components/confirm-dialog/confirm-dialog';
import { ListItemText } from '@mui/material';

// ------------------------------------------------------------

const TeachersTableRow = ({ tableData }) => {
  const { name, subject, phone, email, gender, id } = tableData;

  const confirmDelete = useBoolean();

  const router = useRouter();

  const handleDelete = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      toast.success('Teacher deleted successfully');
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleEdit = useCallback(() => {
    router.push(`/edit-teacher/${id}`);
  }, []);

  return (
    <>
      <TableRow>
        <TableCell>
          <ListItemText
            primary={name}
            secondary={email}
            primaryTypographyProps={{ variant: 'body1' }}
            secondaryTypographyProps={{
              color: 'text.disabled',
              variant: 'body2',
              sx: { paddingLeft: 0.5, marginTop: 0.5 },
            }}
          />
        </TableCell>

        <TableCell>{gender === 'male' ? 'Male' : 'Female'}</TableCell>

        <TableCell>{subject}</TableCell>

        <TableCell>{phone}</TableCell>

        <TableCell align="right">
          <Box display="flex" justifyContent="flex-end">
            <Tooltip title="Edit Details" placement="top">
              <IconButton color="inherit" onClick={handleEdit}>
                <Iconify icon="solar:pen-bold" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete" placement="top">
              <IconButton color="error" onClick={confirmDelete.onTrue}>
                <Iconify icon="solar:trash-bin-trash-bold" />
              </IconButton>
            </Tooltip>
          </Box>
        </TableCell>
      </TableRow>

      {/* Confirm Dialog */}
      <ConfirmDialog
        open={confirmDelete.value}
        onClose={confirmDelete.onFalse}
        title="Delete"
        message="Are you want to sure delete this item?"
        action={
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        }
      />
    </>
  );
};

export default TeachersTableRow;
