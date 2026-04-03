import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My awsome portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    }
  } catch (e) {}
})();
            `,
          }}
        />
      </head>
      <body
        className={twMerge(
          "bg-background dark:bg-dark-background min-h-screen flex flex-col justify-center items-center antialiased font-mono",
        )}
      >
        <Header />
        <main className="p-4 max-w-7xl w-full grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
