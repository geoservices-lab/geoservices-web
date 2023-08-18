import { BasePage } from "module/BasePage";
import React from "react";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

import { MyAppProps } from "../module/types";

/**
 * Main App render function.
 * @return {AppProps} rendered page.
 */
function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  const title = Component.title;

  return (
    <BasePage title={title}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </BasePage>
  );
}

export default MyApp;
