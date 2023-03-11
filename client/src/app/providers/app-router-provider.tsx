import React, { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { MainPage } from '@pages/main';
import { ParticipatorDetailsPage } from '@pages/participator-details';

export function AppRouterProvider(): React.ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/main" element={<MainPage />} />
        <Route path="/id/:id" element={<ParticipatorDetailsPage />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
