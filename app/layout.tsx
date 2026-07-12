import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MecbillTech | Full Stack Software Engineer & Premium Web Development",
  description:
    "MecbillTech builds premium websites and scalable web applications for businesses worldwide. We specialize in restaurant websites, school management systems, enterprise software, and custom digital solutions that drive business growth.",
  keywords: [
    "Full Stack Software Engineer",
    "Premium Web Development",
    "MecbillTech",
    "Restaurant websites",
    "School management systems",
    "Custom web applications",
  ],
  authors: [{ name: "MecbillTech", url: "https://mecbilltech.com" }],
  icons: [
    { 
      rel: "icon", 
      url: "/logo.png" 
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
