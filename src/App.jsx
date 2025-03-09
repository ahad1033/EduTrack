import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MainLayout } from './layouts';
import Analytics from './pages/analytics/analytics-page';
import { TeachersForm, TeachersList } from './pages/teachers';

// ------------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Analytics />} />
          <Route path="teachers" element={<TeachersList />} />
          <Route path="create-teacher" element={<TeachersForm />} />
          <Route path="edit-teacher/:id" element={<TeachersForm />} />
          <Route path="classes" element={<Navigate to="/" />} />
          <Route path="settings" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
