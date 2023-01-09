import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Figtree } from "@next/font/google";
import { IconContext } from "react-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-alice-carousel/lib/alice-carousel.css";

const figTree = Figtree({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${figTree.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <IconContext.Provider
          value={{ color: "rgb(113, 113, 113)", size: "1.7rem" }}
        >
          <Component {...pageProps} />
        </IconContext.Provider>
      </QueryClientProvider>
    </>
  );
}
