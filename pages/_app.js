import Layout from "../components/layout";
import { AuthProvider } from "../contexts/auth";
import { Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
function App({ Component, pageProps }) {
  return (
    <Suspense fallback={`...`}>
      <AuthProvider>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
