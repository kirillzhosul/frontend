import "../styles/globals.css";
import Layout from "../components/layout";
import { Suspense } from "react";

function App({ Component, pageProps }) {
  return (
    <Suspense fallback={`...`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Suspense>
  );
}

export default App;
