import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
    </main>
  );
}