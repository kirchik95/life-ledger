import { Header } from '@core/components/Header';

import s from './App.module.css';

function App() {
  return (
    <div className={s.root}>
      <Header />
      <main className={s.main}></main>
    </div>
  );
}

export default App;
