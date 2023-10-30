import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@/styles/globals.css";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
