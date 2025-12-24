
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Project } from "../types/Project";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Project[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 5).map((project) => ( 
          <div
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
            <p className="text-gray-600">{project.body.substring(0, 80)}...</p>
            <span className="mt-4 inline-block text-blue-500 font-medium">Read more →</span>
          </div>
        ))}
      </div>
    </div>
  );
}
