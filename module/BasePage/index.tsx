import Head from "next/head";
import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import { BasePageProps } from "./type";

export const BasePage = ({ children, title }: BasePageProps) => {
  return (
    <SSRProvider>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}
    </SSRProvider>
  );
};
