import TopBar from '../components/TopBar';
import { ContextProvider } from '../context/Context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <div>
        <TopBar />
        <Component {...pageProps} />
      </div>
    </ContextProvider>
  );
}

export default MyApp;
