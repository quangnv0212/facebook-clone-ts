import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div className="">{children}</div>
      </main>
    </>
  );
}
