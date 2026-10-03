import Calculator from "./components/Calculator";
import Guide from "./components/Guide";

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-forest text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold sm:text-2xl">Simple Calculator</h1>
          <a href="#guide-title" className="rounded-md px-3 py-1 text-sm text-gold hover:bg-white/10">
            User guide
          </a>
        </div>
        <div className="h-1 bg-gold" />
      </header>

      <main className="mx-auto grid max-w-6xl items-start justify-items-center gap-12 px-4 py-10 lg:grid-cols-2">
        <Calculator />
        <Guide />
      </main>

      <footer className="border-t border-green-900/10 py-6 text-center text-sm text-stone-500">
        Built with React and Tailwind CSS · DCIT 26 Laboratory 1
      </footer>
    </div>
  );
}
