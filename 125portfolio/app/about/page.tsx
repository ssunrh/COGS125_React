import Image from 'next/image';
import About from '../../components/About';

export default function AboutPage() {
  return (
    <main className="px-8 py-16 flex flex-col md:flex-row gap-5 items-center">
      <div className="md:w-1/2">
        <Image
          src="/profile.jpg"
          alt="Jane Doe"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <About />
      </div>
    </main>
  );
}