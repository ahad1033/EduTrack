import toast from 'react-hot-toast';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from '../../hooks';

import TeachersTableRow from './teachers-table-row';
import Iconify from '../../components/iconify/iconify';
import CustomTableHead from '../../components/table/custom-table-head';
import CustomHelmet from '../../components/custom-components/helmet/custom-helmet';
import { TEACHERS_DATA } from '../../_mock/teachersData';
import CustomCardHeader from '../../components/custom-components/card-header/custom-card-header';

// ------------------------------------------------------------

const Teachers = () => {
  const router = useRouter();

  // Define table columns
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'subject', label: 'Subject' },
    { id: 'phone', label: 'Phone' },
    { id: 'email', label: 'Email' },
    { id: 'actions', label: 'Actions', align: 'right' },
  ];

  const handleEdit = (id) => {
    toast.success(`Edit teacher with ID: ${id}`);
  };

  const handleDelete = (id) => {
    toast.error(`Delete teacher with ID: ${id}`);
  };

  const handleAddTeacher = () => {
    router.push('/create-teacher');
  };

  return (
    <Box>
      <CustomHelmet title="Teachers List" />

      <CustomCardHeader
        title="Teachers List"
        action={
          <Button
            variant="outlined"
            startIcon={<Iconify icon="mingcute:add-line" />}
            onClick={handleAddTeacher}
          >
            Add Teacher
          </Button>
        }
      />

      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <TextField
          fullWidth
          placeholder="Search teachers..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: 'text.disabled' }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <CustomTableHead columns={columns} />

          <TableBody>
            {TEACHERS_DATA.map((teacher) => (
              <TeachersTableRow key={teacher.id} tableData={teacher} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Teachers;
