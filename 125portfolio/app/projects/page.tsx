import Link from 'next/link';
import { projects } from '../../data/projects';

const ProjectsPage = () => (
  <main className="px-8 py-16">
    <h1 className="text-3xl font-bold mb-8">PROJECTS</h1>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.slug} className="border p-4 rounded shadow hover:shadow-lg transition">
          <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
          <Link href={`/projects/${project.slug}`} className="text-pink-500 mt-2 inline-block">
            Read more →
          </Link>
        </div>
      ))}
    </div>
  </main>
);

export default ProjectsPage;