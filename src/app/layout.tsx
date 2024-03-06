import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import '@mantine/tiptap/styles.css';

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import App from "./_components/App";

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
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
