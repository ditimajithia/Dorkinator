import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import History from "./routes/History.tsx";
import Login from "./routes/Login.tsx";
import Signup from "./routes/Signup.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "./components/ui/toaster.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="relative">
        <App />
      </div>
    ),
  },
  {
    path: "history",
    element: <History />,
  },
  {
    path: "login",
    element: <Login />,
  },
  { path: "signup", element: <Signup /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="bg-black text-white">
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />,
      </QueryClientProvider>
    </CookiesProvider>
    <Toaster />
  </div>
);
