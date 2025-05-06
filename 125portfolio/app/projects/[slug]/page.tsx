import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === await params.slug);

  if (!project) return notFound();

  return (
    <main className="px-8 py-16">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg mb-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">
        Visit project →
      </a>
    </main>
  );
};