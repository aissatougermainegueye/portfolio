import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Aïssatou Gueye - Ingénieure Informatique",
  description:
    "Portfolio d'Aïssatou Gueye, ingénieure informatique diplômée de Sup Galilée. À la recherche d'un CDI à partir d'octobre 2026.",
  keywords: [
    "Aïssatou Gueye",
    "ingénieure informatique",
    "software engineer",
    "développeuse fullstack",
    "portfolio",
    "Sup Galilée",
    "Java",
    "React",
    "Python",
  ],
  authors: [{ name: "Aïssatou Gueye" }],
  openGraph: {
    title: "Aïssatou Gueye - Ingénieure Informatique",
    description:
      "Portfolio d'Aïssatou Gueye, ingénieure informatique.",
    locale: "fr_FR",
    type: "website",
  },
};

// Pre-hydration script: apply theme + language from localStorage
// to avoid any FOUC (flash of unstyled content).
const preHydrationScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored === 'dark' || (!stored && prefersDark);
    if (isDark) document.documentElement.classList.add('dark');
    var lang = localStorage.getItem('lang');
    if (lang === 'fr' || lang === 'en') {
      document.documentElement.setAttribute('lang', lang);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: preHydrationScript }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
