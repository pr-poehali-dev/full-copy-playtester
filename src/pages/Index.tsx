import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";
import GameCard, { Game } from "@/components/GameCard";

const filters = [
  "Все игры", "Для вас", "Популярные", "Все игровые тесты",
  "Демоверсии", "Инди", "Массовые", "Хоррор", "Выживание", "Уютные",
];

const games: Game[] = [
  { id: 1, title: "VELATO", desc: "VELATO — это однопользовательская игра в жанре...", img: "", gradient: "bg-gradient-to-br from-purple-900 via-indigo-900 to-orange-900", emoji: "🗺️", status: "green", testType: "Открытая бета-версия", meta: "7 дней на...", platforms: ["steam", "android"] },
  { id: 2, title: "Отнимающие Время", desc: "Каждая прожитая секунда — это секунда, которую ты...", img: "", gradient: "bg-gradient-to-br from-fuchsia-900 via-purple-800 to-cyan-800", emoji: "⏳", status: "green", testType: "Закрытое бета-тестирование", meta: "26", platforms: ["steam", "android", "app"] },
  { id: 3, title: "Королевская дорога игр...", desc: "Game of Thrones: Kingsroad — это ролевая игра в жанре...", img: "", gradient: "bg-gradient-to-br from-slate-800 via-stone-800 to-zinc-900", emoji: "🐉", status: "red", testType: "Закрытое бета-тестирование", meta: "1 м", platforms: ["steam", "epic", "app", "android"] },
  { id: 4, title: "ВЗБАДРИВАЮЩИЕ ПОЧ...", desc: "Это не обычная футбольная игра. Это хаотичная битва на...", img: "", gradient: "bg-gradient-to-br from-orange-700 via-amber-600 to-yellow-700", emoji: "⚽", status: "red", testType: "Закрытое бета-тестирование", meta: "2 м", platforms: ["steam", "android"] },
  { id: 5, title: "Ограничьте количество...", desc: "Limit Zero Breakers — динамичный экшен с аниме-стилисти...", img: "", gradient: "bg-gradient-to-br from-sky-800 via-blue-900 to-indigo-900", emoji: "⚔️", status: "green", testType: "Открытое бета-тестирование", meta: "5 дней на...", platforms: ["steam", "android"] },
  { id: 6, title: "Ржавый Мобиль", desc: "Rust Anytime Everywhere — выживай в открытом мире на...", img: "", gradient: "bg-gradient-to-br from-orange-900 via-amber-800 to-stone-800", emoji: "🏜️", status: "green", testType: "Закрытое бета-тестирование", meta: "12", platforms: ["android", "app"] },
  { id: 7, title: "Фарлайт 84", desc: "Farlight 84 — королевская битва с героями и техникой...", img: "", gradient: "bg-gradient-to-br from-lime-700 via-green-700 to-emerald-800", emoji: "🤖", status: "red", testType: "Закрытое бета-тестирование", meta: "3 м", platforms: ["steam", "epic", "android", "app"] },
  { id: 8, title: "Мехараши", desc: "Mecharashi — тактическая RPG с гигантскими роботами...", img: "", gradient: "bg-gradient-to-br from-red-900 via-orange-900 to-stone-900", emoji: "🦾", status: "red", testType: "Закрытое бета-тестирование", meta: "8", platforms: ["android", "app"] },
];

export default function Index() {
  const [active, setActive] = useState("Все игровые тесты");

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* HERO — large featured game banner */}
      <section className="relative h-[560px] w-full overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_60%_40%,rgba(217,119,6,0.25),transparent)]" />
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(255,255,255,0.02)_40px,rgba(255,255,255,0.02)_80px)]" />
          {/* fade to black bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        {/* Floating game emoji art */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 text-[180px] opacity-20 select-none hidden lg:block">🏰</div>

        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="max-w-xl pt-16">
            <h1 className="font-black text-5xl md:text-6xl text-blue-400 mb-6 tracking-tight animate-fade-up" style={{ fontFamily: "Inter", textShadow: "0 0 30px rgba(96,165,250,0.5)" }}>
              BALLGAME
            </h1>
            <p className="text-white/75 text-[17px] leading-relaxed mb-5 max-w-md animate-fade-up animate-delay-100">
              Цельтесь, прыгайте, бейте и крушите в Ballgame — дерзком физическом платформере, где вы и есть мяч. Участвуйте в...
            </p>
            <p className="text-white/60 text-[14px] font-semibold mb-7 animate-fade-up animate-delay-100">
              Платформер, аркада <span className="mx-1.5">•</span> Демо
            </p>
            <div className="flex items-center gap-3 animate-fade-up animate-delay-200">
              <Link to="/games/100" className="btn-white px-8 py-3.5 rounded-xl text-[15px]">
                Узнайте больше
              </Link>
              <button className="w-12 h-12 rounded-xl border border-white/25 flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors">
                <Icon name="Bookmark" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CHIPS */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 -mt-2 relative z-20">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-[14px] whitespace-nowrap flex items-center gap-1.5 ${
                active === f ? "chip chip-active" : "chip"
              }`}
            >
              {f}
              {f === "Все игровые тесты" && <Icon name="ChevronDown" size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* GAME GRID */}
      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
          {games.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link to="/games" className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-[15px] hover:bg-white/5 transition-colors">
            Показать больше игр
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-14 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-5 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <Icon name="Navigation" size={20} className="text-white -rotate-45" />
                <span className="font-bold text-white text-lg">Playtester</span>
              </div>
              <p className="text-[14px] text-white/40 max-w-xs leading-relaxed">
                Платформа для тестирования игр. Находи проекты, тестируй и помогай разработчикам делать игры лучше.
              </p>
            </div>
            {[
              { title: "Платформа", links: ["Исследовать", "Категории", "Тестеры", "Аналитика"] },
              { title: "Компания", links: ["О нас", "Блог", "Карьера", "Контакты"] },
              { title: "Поддержка", links: ["Справка", "Правила", "Конфиденциальность", "FAQ"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold text-white text-[14px] mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((l, j) => (
                    <li key={j}><a href="#" className="text-[14px] text-white/40 hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-[13px] text-white/30">© 2024 Playtester. Все права защищены.</span>
            <div className="flex gap-4">
              {["Twitter", "Discord", "YouTube"].map((s, i) => (
                <a key={i} href="#" className="text-[13px] text-white/30 hover:text-white/60 transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
