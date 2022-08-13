import TopBar from '../components/TopBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TopBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
