import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { CLASS_OPTIONS, STUDENTS_DATA } from '../../_mock/studentsData';

import AttendanceTable from './attendance-table';
import CustomHelmet from '../../components/custom-components/helmet/custom-helmet';
import CustomCardHeader from '../../components/custom-components/card-header/custom-card-header';

// ----------------------------------------------------------------------

const StudentAttendance = () => {
  const [selectedClass, setSelectedClass] = useState(6);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // const studentsData = STUDENTS_DATA;

  useEffect(() => {
    if (selectedClass) {
      const studentsToset = STUDENTS_DATA.filter(
        (s) => s.class === String(selectedClass)
      );

      setStudents(studentsToset);
    }
  }, [selectedClass]);

  // Handle class change
  const handleClassChange = (event) => {
    const classId = event.target.value;

    setSelectedClass(classId);

    // Load students for selected class
    if (classId) {
      const studentsToset = STUDENTS_DATA.filter(
        (s) => s.class === String(classId)
      );

      setStudents(studentsToset);

      // Initialize attendance data
      const initialAttendance = {};
      studentsToset.forEach((student) => {
        initialAttendance[student.id] = 'present';
      });

      setAttendanceData(initialAttendance);
    } else {
      setStudents([]);
      setAttendanceData({});
    }

    setIsFormSubmitted(false);
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsFormSubmitted(false);
  };

  // Handle attendance status change
  const handleAttendanceChange = (studentId, status) => {
    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!selectedClass) {
      toast.error('Please select a class');
      return;
    }

    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    // Check if all students have attendance marked
    const allMarked = students.every((student) => attendanceData[student.id]);
    if (!allMarked) {
      toast.error('Please mark attendance for all students');
      return;
    }

    // Here you would normally send this data to your backend
    console.log({
      classId: selectedClass,
      date: format(selectedDate, 'yyyy-MM-dd'),
      attendance: attendanceData,
    });

    toast.success('Attendance submitted successfully!');
    setShowSuccess(true);
    setIsFormSubmitted(true);
  };

  return (
    <Box>
      <CustomHelmet title="Student Attendance" />

      <CustomCardHeader
        title="Student Attendance"
        subheader="Record and manage daily student attendance"
      />

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="class-select-label">Select Class</InputLabel>
              <Select
                labelId="class-select-label"
                id="class-select"
                value={selectedClass}
                label="Select Class"
                onChange={handleClassChange}
              >
                {CLASS_OPTIONS.map((cls) => (
                  <MenuItem key={cls.value} value={cls.value}>
                    {cls.lavel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Attendance Date"
                value={selectedDate}
                onChange={handleDateChange}
                slotProps={{ textField: { fullWidth: true } }}
                maxDate={new Date()}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleSubmit}
              disabled={
                !selectedClass ||
                students.length === 0 ||
                isFormSubmitted ||
                selectedDate.toDateString() !== new Date().toDateString()
              }
              sx={{ py: 2 }}
            >
              Submit Attendance
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {showSuccess && (
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            Attendance for{' '}
            {CLASS_OPTIONS.find((c) => c.value === selectedClass)?.lavel} on{' '}
            {format(selectedDate, 'MMMM dd, yyyy')} submitted successfully!
          </Alert>
        </Snackbar>
      )}

      {selectedClass && students.length > 0 && (
        <AttendanceTable
          students={students}
          attendanceData={attendanceData}
          onAttendanceChange={handleAttendanceChange}
          isSubmitted={isFormSubmitted}
          date={format(selectedDate, 'MMMM dd, yyyy')}
          className={
            CLASS_OPTIONS.find((c) => c.value === selectedClass)?.lavel
          }
        />
      )}

      {selectedClass && students.length === 0 && (
        <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            No students found in this class.
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default StudentAttendance;
