export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* fade-in on hero text */}
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
        Bem-vindo à B2 Marketing Industrial
      </h1>
      <p className="text-xl max-w-2xl animate-fade-in">
        Soluções criativas para sua marca no mundo industrial.
      </p>
    </section>
  );
}