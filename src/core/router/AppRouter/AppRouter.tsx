import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '../routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        {routes?.map((route) => <Route key={route.path} path={route.path} element={<route.element />} />)}
      </Routes>
    </Suspense>
  );
};
