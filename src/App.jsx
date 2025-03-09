import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Teachers from './pages/Teachers';
import { MainLayout } from './layouts';

// ------------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
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