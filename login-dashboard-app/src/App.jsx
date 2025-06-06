import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './router/routes.jsx';

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}

export default App;