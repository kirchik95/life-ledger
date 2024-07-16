import { Header } from '@core/components/Header';
import { AppRouter } from '@core/router/AppRouter/AppRouter';

import s from './App.module.css';

function App() {
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
