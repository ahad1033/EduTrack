import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';

import { MainLayout } from './layouts';
import { StudentsForm, StudentsList } from './pages/students';
import { TeachersForm, TeachersList } from './pages/teachers';

import Analytics from './pages/analytics/analytics-page';

// ------------------------------------------------------------

function App() {
  return (
    <ThemeProvider>
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
            {/* 404 */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
