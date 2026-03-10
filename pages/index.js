import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white bg-opacity-90">
      <Navbar />
      <Hero />
    </div>
  );
}