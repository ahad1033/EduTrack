import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts';
import Analytics from './pages/analytics/analytics-page';
import Teachers from './pages/teachers/teachers-list';

// ------------------------------------------------------------

function App() {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
    }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Analytics />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="classes" element={<Navigate to="/" />} />
          <Route path="settings" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
