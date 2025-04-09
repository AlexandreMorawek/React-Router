import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'
import App from "./App.tsx";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Article from "./pages/Article.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
]);
// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}