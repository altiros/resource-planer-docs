import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "Ressourcenplaner Docs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<strong>Ressourcenplaner</strong>} />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/altiros/resource-planer-docs/tree/main"
          footer={<Footer>Altiros GmbH</Footer>}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
