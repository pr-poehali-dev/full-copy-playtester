import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";

const allGames = [
  { id: 1, title: "Shadows of Eternity", genre: "RPG", status: "active", testers: 24, rating: 4.8, reward: "500₽", img: "🧙", platform: "PC", deadline: "15 июня", desc: "Тёмное фэнтези с открытым миром и тактическими боями" },
  { id: 2, title: "Neon Drift Racing", genre: "Гонки", status: "active", testers: 12, rating: 4.6, reward: "350₽", img: "🏎️", platform: "Mobile", deadline: "20 июня", desc: "Аркадные гонки с неоновой эстетикой" },
  { id: 3, title: "Dungeon Crawler X", genre: "Roguelike", status: "pending", testers: 8, rating: 0, reward: "750₽", img: "⚔️", platform: "PC", deadline: "25 июня", desc: "Процедурно генерируемые подземелья и случайные события" },
  { id: 4, title: "Pixel Farm Tycoon", genre: "Симулятор", status: "active", testers: 31, rating: 4.9, reward: "200₽", img: "🌾", platform: "Mobile", deadline: "18 июня", desc: "Управляй фермой в пиксельном стиле" },
  { id: 5, title: "Void Protocol", genre: "Шутер", status: "active", testers: 19, rating: 4.7, reward: "600₽", img: "🔫", platform: "PC", deadline: "22 июня", desc: "Шутер от первого лица в антиутопическом мире" },
  { id: 6, title: "Celestial Arena", genre: "MOBA", status: "closed", testers: 45, rating: 4.5, reward: "900₽", img: "⭐", platform: "PC", deadline: "Завершён", desc: "5v5 командная битва с уникальными героями" },
  { id: 7, title: "Zombie Fortress", genre: "Стратегия", status: "active", testers: 15, rating: 4.4, reward: "450₽", img: "🧟", platform: "PC", deadline: "28 июня", desc: "Строй укрепления и отражай волны зомби" },
  { id: 8, title: "Stellar Voyage", genre: "Adventure", status: "pending", testers: 5, rating: 0, reward: "1200₽", img: "🚀", platform: "Console", deadline: "10 июля", desc: "Исследуй процедурно генерируемые галактики" },
  { id: 9, title: "Ghost Recon: Reborn", genre: "Шутер", status: "active", testers: 28, rating: 4.6, reward: "800₽", img: "👻", platform: "PC", deadline: "5 июля", desc: "Тактический шутер с элементами стелса" },
];

const genres = ["Все", "RPG", "Шутер", "MOBA", "Гонки", "Roguelike", "Стратегия", "Симулятор"];
const platforms = ["Все платформы", "PC", "Mobile", "Console"];

export default function Games() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Все");
  const [platform, setPlatform] = useState("Все платформы");
  const [sortBy, setSortBy] = useState("newest");

  const filtered = allGames.filter((g) => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre === "Все" || g.genre === genre;
    const matchPlatform = platform === "Все платформы" || g.platform === platform;
    return matchSearch && matchGenre && matchPlatform;
  });

  return (
    <div className="min-h-screen bg-[#0a0d12]">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-medium text-green-400 tracking-widest uppercase">Каталог проектов</span>
            <h1 className="text-4xl md:text-5xl font-['Rajdhani'] font-bold text-white mt-2 mb-2">
              Все игры для тестирования
            </h1>
            <p className="text-slate-500">Найди проект и начни зарабатывать</p>
          </div>

          {/* Filters */}
          <div className="glass-card rounded-xl p-5 mb-8 flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px] relative">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск игр..."
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-green-400/40"
              />
            </div>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-green-400/40"
            >
              {platforms.map((p) => <option key={p} value={p} className="bg-[#0a0d12]">{p}</option>)}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-green-400/40"
            >
              <option value="newest" className="bg-[#0a0d12]">Новые</option>
              <option value="reward" className="bg-[#0a0d12]">По вознаграждению</option>
              <option value="rating" className="bg-[#0a0d12]">По рейтингу</option>
            </select>
            <span className="text-xs text-slate-600">{filtered.length} проектов</span>
          </div>

          {/* Genre tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  genre === g
                    ? "bg-green-400/15 text-green-400 border border-green-400/30"
                    : "text-slate-500 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((g) => (
              <Link to={`/games/${g.id}`} key={g.id} className="glass-card rounded-xl overflow-hidden group block">
                <div className="h-36 bg-gradient-to-br from-slate-800/50 to-slate-900/80 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12]/60 to-transparent" />
                  <span className="relative z-10">{g.img}</span>
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide ${
                      g.status === "active" ? "badge-active" :
                      g.status === "pending" ? "badge-pending" : "badge-closed"
                    }`}>
                      {g.status === "active" ? "АКТИВЕН" : g.status === "pending" ? "СКОРО" : "ЗАКРЫТ"}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="px-2 py-0.5 rounded-md text-[10px] bg-black/50 text-slate-300 border border-white/10">{g.platform}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-['Rajdhani'] font-bold text-white text-lg leading-tight group-hover:text-green-400 transition-colors">{g.title}</h3>
                      <span className="text-xs text-slate-500">{g.genre}</span>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <div className="text-green-400 font-['Rajdhani'] font-bold text-lg">{g.reward}</div>
                      <div className="text-[10px] text-slate-600">за отчёт</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">{g.desc}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1"><Icon name="Users" size={11} />{g.testers} тестеров</div>
                    {g.rating > 0 && <div className="flex items-center gap-1 text-yellow-400"><Icon name="Star" size={11} />{g.rating}</div>}
                    <div className="flex items-center gap-1"><Icon name="Clock" size={11} />{g.deadline}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
