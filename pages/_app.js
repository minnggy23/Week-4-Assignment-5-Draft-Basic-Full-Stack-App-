// pages/_app.js
import '../styles/bootstrap.min.css';
import '../styles/globals.css'; // Your custom styles if you have any

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
