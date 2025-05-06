import { projects } from '../../../data/projects';
import { notFound } from 'next/navigation';

interface Props {
  project: Project;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await fetchProjectData(params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await fetchProjectData(params.slug);

  if (!project) {
    return notFound(); // Return 404 page if no project found
  }

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
        className="text-pink-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit project
      </a>
    </main>
  );
}

async function fetchProjectData(slug: string): Promise<Project | null> {

  // Simulate async delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return projects.find((project) => project.slug === slug) || null;
}