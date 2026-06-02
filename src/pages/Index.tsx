import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";

const games = [
  { id: 1, title: "Shadows of Eternity", genre: "RPG", status: "active", testers: 24, rating: 4.8, reward: "500₽", img: "🧙", platform: "PC", deadline: "15 июня" },
  { id: 2, title: "Neon Drift Racing", genre: "Гонки", status: "active", testers: 12, rating: 4.6, reward: "350₽", img: "🏎️", platform: "Mobile", deadline: "20 июня" },
  { id: 3, title: "Dungeon Crawler X", genre: "Roguelike", status: "pending", testers: 8, rating: 0, reward: "750₽", img: "⚔️", platform: "PC", deadline: "25 июня" },
  { id: 4, title: "Pixel Farm Tycoon", genre: "Симулятор", status: "active", testers: 31, rating: 4.9, reward: "200₽", img: "🌾", platform: "Mobile", deadline: "18 июня" },
  { id: 5, title: "Void Protocol", genre: "Шутер", status: "active", testers: 19, rating: 4.7, reward: "600₽", img: "🔫", platform: "PC", deadline: "22 июня" },
  { id: 6, title: "Celestial Arena", genre: "MOBA", status: "closed", testers: 45, rating: 4.5, reward: "900₽", img: "⭐", platform: "PC", deadline: "Завершён" },
];

const stats = [
  { label: "Активных игр", value: "1,247", icon: "Gamepad2" },
  { label: "Тестеров", value: "8,932", icon: "Users" },
  { label: "Отчётов", value: "94,201", icon: "FileText" },
  { label: "Выплачено", value: "₽12.4M", icon: "TrendingUp" },
];

const features = [
  { icon: "Search", title: "Найди игру", desc: "Выбирай проекты по жанру, платформе и вознаграждению" },
  { icon: "ClipboardList", title: "Тестируй", desc: "Проходи задания, фиксируй баги и отправляй обратную связь" },
  { icon: "BarChart2", title: "Аналитика", desc: "Разработчики получают детальные отчёты и метрики" },
  { icon: "Wallet", title: "Получай оплату", desc: "Автоматические выплаты после принятия отчёта" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0a0d12]">
      <Navbar />

      {/* Hero */}
      <section className="hero-bg relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-500/5 blur-3xl" />
          <div className="absolute top-60 -left-20 w-[400px] h-[400px] rounded-full bg-green-500/4 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-xs font-medium mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              8,932 тестера онлайн прямо сейчас
            </div>

            <h1 className="text-5xl md:text-7xl font-['Rajdhani'] font-bold text-white leading-tight mb-6 animate-fade-up animate-delay-100">
              Платформа для<br />
              <span className="neon-text">тестирования игр</span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed animate-fade-up animate-delay-200">
              Соединяем разработчиков с профессиональными тестерами. Находи баги быстрее, улучшай качество, выпускай игры уверенно.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
              <Link to="/games" className="neon-btn px-8 py-3.5 rounded-xl text-base flex items-center gap-2">
                <Icon name="Gamepad2" size={18} />
                Найти игры для тестирования
              </Link>
              <Link to="/games" className="px-8 py-3.5 rounded-xl text-base border border-white/10 text-white hover:bg-white/5 transition-all flex items-center gap-2 font-['Rajdhani'] font-semibold">
                <Icon name="PlusCircle" size={18} />
                Добавить свою игру
              </Link>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-7xl mx-auto mt-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-400/10 flex items-center justify-center">
                    <Icon name={s.icon as any} size={16} className="text-green-400" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{s.label}</span>
                </div>
                <div className="text-2xl font-['Rajdhani'] font-bold text-white">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-medium text-green-400 tracking-widest uppercase">Как это работает</span>
            <h2 className="text-4xl font-['Rajdhani'] font-bold text-white mt-2">Просто. Быстро. Эффективно.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass-card rounded-xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 text-[120px] font-['Orbitron'] font-black text-white/[0.02] leading-none select-none">
                  {i + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center mb-4 group-hover:bg-green-400/15 transition-all">
                  <Icon name={f.icon as any} size={22} className="text-green-400" />
                </div>
                <h3 className="text-lg font-['Rajdhani'] font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games catalog */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-medium text-green-400 tracking-widest uppercase">Каталог</span>
              <h2 className="text-4xl font-['Rajdhani'] font-bold text-white mt-1">Открытые проекты</h2>
            </div>
            <Link to="/games" className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors font-medium">
              Все проекты <Icon name="ArrowRight" size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Все", "PC", "Mobile", "Console", "RPG", "Шутер", "MOBA"].map((f, i) => (
              <button
                key={i}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  i === 0
                    ? "bg-green-400/15 text-green-400 border border-green-400/30"
                    : "text-slate-500 border border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {games.map((g) => (
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
                    <span className="px-2 py-0.5 rounded-md text-[10px] bg-black/50 text-slate-300 border border-white/10">
                      {g.platform}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-['Rajdhani'] font-bold text-white text-lg leading-tight group-hover:text-green-400 transition-colors">
                        {g.title}
                      </h3>
                      <span className="text-xs text-slate-500">{g.genre}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-['Rajdhani'] font-bold text-lg">{g.reward}</div>
                      <div className="text-[10px] text-slate-600">вознаграждение</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={11} />
                      {g.testers} тестеров
                    </div>
                    {g.rating > 0 && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Icon name="Star" size={11} />
                        {g.rating}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={11} />
                      {g.deadline}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-green-400/20 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5 p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(34,197,94,0.08),transparent)]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-['Rajdhani'] font-bold text-white mb-4">
                Готов стать тестером?
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Присоединяйся к тысячам тестеров — зарабатывай, улучшая игры
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/testers" className="neon-btn px-8 py-3.5 rounded-xl text-base">
                  Стать тестером
                </Link>
                <Link to="/games" className="px-8 py-3.5 rounded-xl text-base border border-white/10 text-white hover:bg-white/5 transition-all font-['Rajdhani'] font-semibold">
                  Узнать больше
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg neon-border flex items-center justify-center">
                  <Icon name="Gamepad2" size={14} className="text-green-400" />
                </div>
                <span className="font-['Orbitron'] font-bold text-white text-sm">PLAY<span className="neon-text">TESTER</span></span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Платформа для профессионального тестирования игр
              </p>
            </div>
            {[
              { title: "Платформа", links: ["Каталог игр", "Тестеры", "Аналитика", "Сообщения"] },
              { title: "Разработчикам", links: ["Добавить проект", "Тарифы", "API", "Документация"] },
              { title: "Поддержка", links: ["Справочный центр", "Контакты", "Политика", "О нас"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-['Rajdhani'] font-bold text-white text-sm tracking-wider mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-slate-600 hover:text-slate-300 transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-700">© 2024 PlayTester. Все права защищены.</span>
            <div className="flex items-center gap-4">
              {["Twitter", "Github", "Discord"].map((s, i) => (
                <a key={i} href="#" className="text-xs text-slate-700 hover:text-slate-400 transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
