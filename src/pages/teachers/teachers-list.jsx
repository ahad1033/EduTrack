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

import CustomTableHead from '../../components/table/custom-table-head';
import CustomHelmet from '../../components/custom-components/helmet/custom-helmet';
import TeachersTableRow from './teachers-table-row';
import Iconify from '../../components/iconify/iconify';

// ------------------------------------------------------------

const Teachers = () => {
  // Mock data for teachers
  const teachers = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Mathematics',
      phone: '(123) 456-7890',
      email: 'john.doe@school.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      subject: 'English',
      phone: '(234) 567-8901',
      email: 'jane.smith@school.com',
    },
    {
      id: 3,
      name: 'Robert Johnson',
      subject: 'Science',
      phone: '(345) 678-9012',
      email: 'robert.johnson@school.com',
    },
    {
      id: 4,
      name: 'Emily Davis',
      subject: 'History',
      phone: '(456) 789-0123',
      email: 'emily.davis@school.com',
    },
    {
      id: 5,
      name: 'Michael Wilson',
      subject: 'Physical Education',
      phone: '(567) 890-1234',
      email: 'michael.wilson@school.com',
    },
  ];

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

  const handleAdd = () => {
    toast.success('Add new teacher');
  };

  return (
    <Box>
      <CustomHelmet title="Teachers List" />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant="h4">Teachers Management</Typography>
        <Button
          variant="outlined"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleAdd}
          sx={{ paddingY: 1, paddingX:2 }}
        >
          Add Teacher
        </Button>
      </Box>

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
            {teachers.map((teacher) => (
              <TeachersTableRow key={teacher.id} tableData={teacher} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Teachers;
