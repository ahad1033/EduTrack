import toast from 'react-hot-toast';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';

import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

import CustomHelmet from '../components/custom-components/helmet/custom-helmet';

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
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
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
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.phone}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(teacher.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(teacher.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Teachers;
