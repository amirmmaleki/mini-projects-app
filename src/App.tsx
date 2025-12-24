import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";

const router = createBrowserRouter([
  { path: "/", element: <Projects /> },
  { path: "/project/:id", element: <ProjectDetail /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
