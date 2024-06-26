/*
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppContextWithReducer from "../components/AppContextWithReducer"
import Header from "../components/Header"

import Footer from "../components/Footer"
export default function App({ Component, pageProps }: AppProps) {
  return (

  <>
    <AppContextWithReducer>

      <Header></Header>
      <main className="h-screen">
      <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </AppContextWithReducer>
  </>)
}
*/


import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header"
import Footer from "../components/Footer"

import AppContextWithReducer from "../components/AppContextWithReducer"
import {HydrationBoundary, QueryClient, QueryClientProvider,} from "@tanstack/react-query";
import {useState} from "react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {lazy} from "react";
import { Suspense } from "react";
import {useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());
  // const ReactQueryDevtoolsProduction = lazy(() =>
  //   import('@tanstack/react-query-devtools/build/modern/production.js').then(
  //     (d) => ({
  //       default: d.ReactQueryDevtools,
  //     }),
  //   ),
  // )

  const [showDevtools, setShowDevtools] = useState(false);
  useEffect(() => {
    // @ts-expect-error
    window.toggleDevtools = () => setShowDevtools((old) => !old)
  }, [])
  
  return (
  <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
      <AppContextWithReducer>
          <Header></Header>
          <main >
          <Component {...pageProps} />
          </main>
        <Footer/>
        </AppContextWithReducer>
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen />
      {/* {showDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </Suspense>
      )} */}
</QueryClientProvider>

)
}



