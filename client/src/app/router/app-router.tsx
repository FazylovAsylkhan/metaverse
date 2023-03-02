import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { AuthPage } from '@pages/auth';

export function AppRouter(): React.ReactElement | null {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="auth" replace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
