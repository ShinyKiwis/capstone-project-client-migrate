import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "mantine-datatable/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import PageTitleProvider from "./providers/PageTitleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduva",
  description: "An application for outcome-based assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light"/>
      </head>
      <body className={inter.className}>
        <MantineProvider defaultColorScheme="light">
          <PageTitleProvider>{children}</PageTitleProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
