import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layouts/Layout";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Provider } from "react-redux";
import store from "@/store/store";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //If there is a layout present for the page, use it, otherwise use this as a default layout
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Layout>{page} </Layout>
        </SessionProvider>
      </Provider>
    ));

  return getLayout(<Component {...pageProps} />);
}
