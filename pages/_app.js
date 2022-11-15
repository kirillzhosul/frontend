import "../styles/globals.css";
import Layout from "../components/layout";
import { AuthProvider } from "../contexts/auth";
import { Suspense } from "react";

function App({ Component, pageProps }) {
  return (
    <Suspense fallback={`...`}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
