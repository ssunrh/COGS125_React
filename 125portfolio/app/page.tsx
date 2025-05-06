import Hero from '../components/Hero';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/hero-bg.jpg')`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black/50 min-h-screen">
        <Hero />
        <Contact />
      </div>
    </main>
  );
}