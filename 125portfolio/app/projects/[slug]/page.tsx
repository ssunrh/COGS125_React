import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 object-cover my-4 rounded"
      />
      <p className="text-lg mb-6">{project.fullDescription ?? project.description}</p>

      <a
        href={project.link}
        className="text-pink-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit project →
      </a>
    </main>
  );
}