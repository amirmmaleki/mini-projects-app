// src/components/ProjectDetail.tsx
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Project } from "../types/Project";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!id) return;
    axios
      .get<Project>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setProject(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!project) return <p className="p-8 text-gray-700">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project {project.id}</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{project.title}</h2>
        <p className="text-gray-700 mb-6">{project.body}</p>
        <Link
          to="/"
          className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          ⬅ Back to Projects
        </Link>
      </div>
    </div>
  );
}
