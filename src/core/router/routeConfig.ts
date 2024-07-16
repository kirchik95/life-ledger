import * as React from 'react';

type RouteConfig = {
  element: React.LazyExoticComponent<React.FC>;
  path: string;
};

export const routes: RouteConfig[] = [
  {
    element: React.lazy(() => import('@pages/Home')),
    path: '/',
  },
  {
    element: React.lazy(() => import('@pages/Settings')),
    path: '/settings',
  },
];
