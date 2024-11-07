import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400 500 600",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "400 500 600",
});

export const metadata: Metadata = {
  title:
    "Hamza Iqbal - Full Stack Engineer | Rust, Flutter, React Native Developer",
  description:
    "Full Stack Engineer with 7+ years of experience in Rust, Flutter, React Native, NextJS, and NodeJS. View my portfolio, projects, and professional experience.",
  keywords: [
    "Full Stack Engineer",
    "Software Developer",
    "Rust Developer",
    "Flutter Developer",
    "React Native Developer",
    "NextJS Developer",
    "NodeJS Developer",
    "Mobile App Development",
    "Web Development",
  ],
  authors: [{ name: "Hamza Iqbal", url: "https://hmziq.rs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hmziq.rs",
    siteName: "Hamza Iqbal - Full Stack Engineer",
    title: "Hamza Iqbal - Full Stack Engineer Portfolio",
    description:
      "Full Stack Engineer specializing in Rust, Flutter, React Native, and web technologies.",
    images: [
      {
        url: "/pfp.png",
        width: 700,
        height: 700,
        alt: "Hamza Iqbal - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hmziqrs",
    creator: "@hmziqrs",
    title: "Hamza Iqbal - Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in Rust, Flutter, React Native, and web technologies.",
    images: ["/pfp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hamza Iqbal",
  jobTitle: "Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in Rust, Flutter, React Native, and web technologies.",
  url: "https://hmziq.rs",
  sameAs: [
    "https://github.com/hmziqrs",
    "https://linkedin.com/in/hmziqrs",
    "https://twitter.com/hmziqrs",
  ],
  image: "https://hmziq.rs/profile.jpg",
  email: "hmziqrs@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col dark:text-white text-black dark:bg-zinc-950 bg-white transition-colors duration-500`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.toggleJpeg = function toggleJpeg() {
          // Find all elements with class 'jpeg'
          const jpegElements = document.getElementsByClassName("jpeg");

          // Convert HTMLCollection to Array and iterate through each element
          Array.from(jpegElements).forEach((element) => {
            // Toggle the 'hidden' class
            element.classList.toggle("hidden");
          });
        };`,
          }}
        />
      </body>
    </html>
  );
}
