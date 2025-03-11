import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TableContainer from '@mui/material/TableContainer';

// ----------------------------------------------------------------------

const AttendanceTable = ({
  students,
  attendanceData,
  onAttendanceChange,
  isSubmitted,
  date,
  className,
}) => {
  return (
    <Card sx={{ mt: 3, p: 3 }}>
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
        <Typography variant="h6" fontWeight="medium">
          Class: {className} - Attendance for {date}
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Roll No.</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Attendance Status</TableCell>
              {isSubmitted && <TableCell>Submitted Status</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} hover>
                <TableCell>{student.roll}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell sx={{ width: '200px' }}>
                  {isSubmitted ? (
                    <AttendanceStatusChip status={attendanceData[student.id]} />
                  ) : (
                    <FormControl fullWidth size="small">
                      <Select
                        value={attendanceData[student.id] || 'present'}
                        onChange={(e) =>
                          onAttendanceChange(student.id, e.target.value)
                        }
                      >
                        <MenuItem value="present">Present</MenuItem>
                        <MenuItem value="absent">Absent</MenuItem>
                        <MenuItem value="late">Late</MenuItem>
                        <MenuItem value="excused">Excused</MenuItem>
                      </Select>
                    </FormControl>
                  )}
                </TableCell>
                {isSubmitted && (
                  <TableCell>
                    <Chip
                      label="Submitted"
                      color="success"
                      size="small"
                      variant="outlined"
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

// Helper component for displaying attendance status as a colored chip
const AttendanceStatusChip = ({ status }) => {
  const getChipProps = () => {
    switch (status) {
      case 'present':
        return { label: 'Present', color: 'success' };
      case 'absent':
        return { label: 'Absent', color: 'error' };
      case 'late':
        return { label: 'Late', color: 'warning' };
      case 'excused':
        return { label: 'Excused', color: 'info' };
      default:
        return { label: 'Unknown', color: 'default' };
    }
  };

  const { label, color } = getChipProps();

  return <Chip label={label} color={color} size="small" />;
};

export default AttendanceTable;
