import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';

import { useRouter } from '../../hooks';

import StudentsTableRow from './students-table-row';
import Iconify from '../../components/iconify/iconify';
import CustomTableHead from '../../components/table/custom-table-head';
import CustomHelmet from '../../components/custom-components/helmet/custom-helmet';
import CustomCardHeader from '../../components/custom-components/card-header/custom-card-header';

import { STUDENTS_DATA } from '../../_mock/studentsData';

// ------------------------------------------------------------

const StudentsList = () => {
  const router = useRouter();

  // Define table columns
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'gender', label: 'Gender' },
    { id: 'class', label: 'Class' },
    { id: 'fathersName', label: 'Fathers name' },
    { id: 'mothersName', label: 'Mothers name' },
    { id: 'address', label: 'Address' },
    { id: 'actions', label: 'Actions', align: 'right' },
  ];

  const handleAddStudent = () => {
    router.push('/create-student');
  };

  return (
    <Box>
      <CustomHelmet title="Teachers List" />

      <CustomCardHeader
        title="Students List"
        action={
          <Button
            color="inherit"
            variant="outlined"
            onClick={handleAddStudent}
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            Add Student
          </Button>
        }
      />

      <Card sx={{ p: 3 }}>
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
          sx={{ mb: 3 }}
        />

        <TableContainer>
          <Table>
            <CustomTableHead columns={columns} />

            <TableBody>
              {STUDENTS_DATA.map((teacher) => (
                <StudentsTableRow key={teacher.id} tableData={teacher} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default StudentsList;
