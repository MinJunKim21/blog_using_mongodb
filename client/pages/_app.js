import TopBar from '../components/TopBar';
import { ContextProvider } from '../context/Context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ContextProvider>
        <TopBar />
        <Component {...pageProps} />
      </ContextProvider>
    </div>
  );
}

export default MyApp;
