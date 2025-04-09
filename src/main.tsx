import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'
import App from "./App.tsx";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Article from "./pages/Article.tsx";

const getWeatherOfTheDay = () => {
  return "sunny";
};

const allData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    title: "Schnapsum",
    content: "Lorem Elsass ipsum Salut bisamme",
  },
  {
    id: 3,
    title: "Cupcake Ipsum",
    content: "Tiramisu pastry wafer brownie soufflé",
  },
];

type Data = typeof allData[0];

const getSomeData = (id: number) => {
  return allData.find((article) => article.id === id) as Data | null;
};


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return getWeatherOfTheDay();
        },
        id: "app",
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
        loader: ({ params }) => {
          const idAsInt = parseInt(params.id ?? "0");

          return getSomeData(idAsInt);
        },
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