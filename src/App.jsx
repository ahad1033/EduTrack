import { Toaster } from 'react-hot-toast';
import { ThemeProvider, useThemeMode } from './theme/ThemeProvider';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts';
import { StudentAttendance } from './pages/attendance';
import { StudentsForm, StudentsList } from './pages/students';
import { TeachersForm, TeachersList } from './pages/teachers';

import Analytics from './pages/analytics/analytics-page';
import LoginPage from './pages/auth/login/login-page';
import ChangePassword from './pages/auth/change-password/change-password';

// ------------------------------------------------------------

function App() {
  const { isDarkMode } = useThemeMode();

  return (
    <ThemeProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#333',
          },
          duration: 3000,
        }}
      />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Analytics />} />

            {/* TEACHERS */}
            <Route path="teachers" element={<TeachersList />} />
            <Route path="create-teacher" element={<TeachersForm />} />
            <Route path="edit-teacher/:id" element={<TeachersForm />} />

            {/* STUDENTS */}
            <Route path="students" element={<StudentsList />} />
            <Route path="create-student" element={<StudentsForm />} />
            <Route path="edit-student/:id" element={<StudentsForm />} />

            {/* CLASSES */}
            <Route path="classes" element={<Navigate to="/" />} />

            {/* SETTINGS */}
            <Route path="settings" element={<Navigate to="/" />} />

            {/* ATTENDANCE */}
            <Route path="attendance" element={<StudentAttendance />} />

            {/* 404 */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>

          {/* LOGIN */}
          <Route path="/login" element={<LoginPage />} />

          {/* CHANGE PASSWORD */}
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
