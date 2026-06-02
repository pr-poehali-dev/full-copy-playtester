import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";
import GameCard, { Game } from "@/components/GameCard";

const filters = [
  "Все игры", "Для вас", "Популярные", "Демоверсии",
  "Инди", "Массовые", "Хоррор", "Выживание", "Уютные", "RPG", "Шутеры",
];

const allGames: Game[] = [
  { id: 1, title: "VELATO", desc: "VELATO — это однопользовательская игра в жанре приключений с глубоким сюжетом.", img: "", gradient: "bg-gradient-to-br from-purple-900 via-indigo-900 to-orange-900", emoji: "🗺️", status: "green", testType: "Открытая бета-версия", meta: "7 дней", platforms: ["steam", "android"] },
  { id: 2, title: "Отнимающие Время", desc: "Каждая прожитая секунда — это секунда, которую ты больше не вернёшь.", img: "", gradient: "bg-gradient-to-br from-fuchsia-900 via-purple-800 to-cyan-800", emoji: "⏳", status: "green", testType: "Закрытое бета-тестирование", meta: "26", platforms: ["steam", "android", "app"] },
  { id: 3, title: "Королевская дорога", desc: "Game of Thrones: Kingsroad — это ролевая игра в жанре фэнтези.", img: "", gradient: "bg-gradient-to-br from-slate-800 via-stone-800 to-zinc-900", emoji: "🐉", status: "red", testType: "Закрытое бета-тестирование", meta: "1 м", platforms: ["steam", "epic", "app", "android"] },
  { id: 4, title: "ВЗБАДРИВАЮЩИЕ ПОЧ...", desc: "Это не обычная футбольная игра. Это хаотичная битва на поле.", img: "", gradient: "bg-gradient-to-br from-orange-700 via-amber-600 to-yellow-700", emoji: "⚽", status: "red", testType: "Закрытое бета-тестирование", meta: "2 м", platforms: ["steam", "android"] },
  { id: 5, title: "Ограничьте количество", desc: "Limit Zero Breakers — динамичный экшен с аниме-стилистикой.", img: "", gradient: "bg-gradient-to-br from-sky-800 via-blue-900 to-indigo-900", emoji: "⚔️", status: "green", testType: "Открытое бета-тестирование", meta: "5 дней", platforms: ["steam", "android"] },
  { id: 6, title: "Ржавый Мобиль", desc: "Rust Anytime Everywhere — выживай в открытом мире на колёсах.", img: "", gradient: "bg-gradient-to-br from-orange-900 via-amber-800 to-stone-800", emoji: "🏜️", status: "green", testType: "Закрытое бета-тестирование", meta: "12", platforms: ["android", "app"] },
  { id: 7, title: "Фарлайт 84", desc: "Farlight 84 — королевская битва с героями и техникой.", img: "", gradient: "bg-gradient-to-br from-lime-700 via-green-700 to-emerald-800", emoji: "🤖", status: "red", testType: "Закрытое бета-тестирование", meta: "3 м", platforms: ["steam", "epic", "android", "app"] },
  { id: 8, title: "Мехараши", desc: "Mecharashi — тактическая RPG с гигантскими роботами.", img: "", gradient: "bg-gradient-to-br from-red-900 via-orange-900 to-stone-900", emoji: "🦾", status: "red", testType: "Закрытое бета-тестирование", meta: "8", platforms: ["android", "app"] },
  { id: 9, title: "Shadows of Eternity", desc: "Тёмное фэнтези с открытым миром и тактическими боями.", img: "", gradient: "bg-gradient-to-br from-violet-950 via-purple-900 to-slate-900", emoji: "🧙", status: "green", testType: "Открытая бета-версия", meta: "10 дней", platforms: ["steam", "epic"] },
  { id: 10, title: "Neon Drift Racing", desc: "Аркадные гонки с неоновой эстетикой и дрифтом.", img: "", gradient: "bg-gradient-to-br from-pink-800 via-fuchsia-900 to-cyan-900", emoji: "🏎️", status: "green", testType: "Демоверсия", meta: "новинка", platforms: ["android", "app"] },
  { id: 11, title: "Void Protocol", desc: "Шутер от первого лица в антиутопическом мире.", img: "", gradient: "bg-gradient-to-br from-zinc-800 via-slate-900 to-black", emoji: "🔫", status: "red", testType: "Закрытое бета-тестирование", meta: "4", platforms: ["steam", "epic"] },
  { id: 12, title: "Pixel Farm Tycoon", desc: "Управляй фермой в милом пиксельном стиле.", img: "", gradient: "bg-gradient-to-br from-green-700 via-emerald-800 to-lime-900", emoji: "🌾", status: "green", testType: "Открытая бета-версия", meta: "новинка", platforms: ["android", "app"] },
];

export default function Games() {
  const [active, setActive] = useState("Все игры");
  const [search, setSearch] = useState("");

  const filtered = allGames.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="pt-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-black text-4xl md:text-5xl text-white tracking-tight mb-2">
              Исследовать игры
            </h1>
            <p className="text-white/45 text-[16px]">
              Найди проект для тестирования и помоги разработчикам
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mb-7">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск игр..."
              className="w-full bg-white/[0.04] border border-white/15 rounded-full pl-11 pr-4 py-3 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/35 transition-colors"
            />
          </div>

          {/* Filter chips */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-[14px] whitespace-nowrap ${
                  active === f ? "chip chip-active" : "chip"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
          {filtered.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            <Icon name="SearchX" size={40} className="mx-auto mb-4 opacity-50" />
            Игры не найдены
          </div>
        )}

        <div className="flex justify-center mt-14">
          <Link to="/games" className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-[15px] hover:bg-white/5 transition-colors">
            Показать больше игр
          </Link>
        </div>
      </section>
    </div>
  );
}
