
import "@/node_modules/flag-icons/css/flag-icons.min.css";
import Nabvar from "@/components/nabvar";
import Footer from "@/components/footer";
import { Language } from "@/utils/i18n";
import type { Metadata } from "next";
import "@/styles/globals.css";


export const metadata: Metadata = {
  title: "Taup Agencia",
  description: "Somos una empresa que se dedica a brindar soluciones digitales a empresas y estudiantes. Nuestro objetivo es integrar el mundo físico al digital.",
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
        className={`antialiased [&::-webkit-scrollbar]:fixed [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-zinc-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-500 [&::-webkit-scrollbar-thumb]:hover:bg-orange-600`}
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
