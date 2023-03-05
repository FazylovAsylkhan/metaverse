import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { MainPage } from '@pages/main';
import { ParticipatorPage } from '@pages/participator';

export function AppRouter(): React.ReactElement | null {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/main" element={<MainPage />} />
        <Route path="/id/:id" element={<ParticipatorPage />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
