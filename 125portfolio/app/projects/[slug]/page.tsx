import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Props {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="p-8 prose max-w-3xl mx-auto">
      <h1>{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="rounded mb-6" />
      <ReactMarkdown>{project.fullDescription ?? project.description}</ReactMarkdown>
      <a
        href={project.link}
        className="text-pink-600 mt-6 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project →
      </a>
    </main>
  );
}