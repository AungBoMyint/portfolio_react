import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";
import router from "./router.tsx";
import { Toaster } from "./components/ui/toaster";
import { system } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <>
            <Toaster />
            <RouterProvider router={router} />
          </>
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
