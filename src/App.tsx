import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@core/components/Header';
import { AppRouter } from '@core/router/AppRouter/AppRouter';
import { authRoutes } from '@core/router/routeConfig';

import { getAuthIsAuthenticatedSelector } from '@pages/Auth/store/selectors';

import s from './App.module.css';

function App() {
  const isAuthenticated = useSelector(getAuthIsAuthenticatedSelector);

  if (!isAuthenticated) {
    return (
      <Routes>
        {authRoutes?.map((route) => <Route key={route.path} path={route.path} element={<route.element />} />)}
      </Routes>
    );
  }

  return (
    <div className={s.root}>
      <Header />
      <main className={s.main}>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
