
import "@/node_modules/flag-icons/css/flag-icons.min.css";
import Nabvar from "@/components/nabvar";
import { Language } from "@/utils/i18n";
import type { Metadata } from "next";
import "@/styles/globals.css";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }, { lang: 'pt' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Language }
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`antialiased`}
      >
        <main>
          <Nabvar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}