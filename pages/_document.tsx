import useLocalStorage from "@rehooks/local-storage";
import { ThemeContext } from "contexts/ThemeContext";
import { Html, Main, NextScript, Head } from "next/document";
import { useEffect, useRef } from "react";
import { Theme } from "types/Theme";

export default function Document() {
    return (
      <Html>
        <Head /> 
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }