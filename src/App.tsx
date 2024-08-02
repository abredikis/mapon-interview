import RouteReport from './components/RouteReport/RouteReport';
import styles from '@/App.module.scss';
import logo from '@/assets/logo.svg';

function App() {
  return (
    <>
      <header className={styles.appHeader}>
        <img src={logo} alt='Mapon logo' />
      </header>
      <main className={styles.appLayout}>
        <RouteReport />
      </main>
    </>
  );
}

export default App;
