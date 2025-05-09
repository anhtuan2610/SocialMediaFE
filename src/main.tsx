import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import SplashCursor from "./components/cursor/index.tsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <SplashCursor />
      <Toaster
        position="top-center"
        richColors
        toastOptions={{
          style: { padding: "20px" },
        }}
      />
    </QueryClientProvider>
  </BrowserRouter>
);
