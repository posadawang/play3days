import ItineraryDisplay from "../components/ItineraryDisplay";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff0f3] p-4 md:p-8 font-sans selection:bg-rose-200">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8 pt-4">
          <h1 className="text-4xl md:text-5xl font-black text-rose-500 mb-2 tracking-tight drop-shadow-sm">
            台南三天兩夜
          </h1>
          <p className="text-rose-400 font-medium text-lg">
            🌿 最 Chill 的行程表 🌿
          </p>
        </header>

        <ItineraryDisplay />

        <footer className="text-center mt-12 pb-8 text-rose-300 text-xs">
          <p>© 2026 Chill Travel. Made with ❤️</p>
        </footer>
      </div>
    </main>
  );
}
