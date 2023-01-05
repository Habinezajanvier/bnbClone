import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Figtree } from "@next/font/google";
import { IconContext } from "react-icons";

const figTree = Figtree({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${figTree.style.fontFamily};
        }
      `}</style>
      <IconContext.Provider
        value={{ color: "rgb(113, 113, 113)", size: "1.7rem" }}
      >
        <Component {...pageProps} />
      </IconContext.Provider>
    </>
  );
}
