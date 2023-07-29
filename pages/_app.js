import "../styles/globals.css";
import { Suspense } from "react";

function App({ Component, pageProps }) {
  return (
    <Suspense fallback={`...`}>
      <Component {...pageProps} />
    </Suspense>
  );
}

export default App;
