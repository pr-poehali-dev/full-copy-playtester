import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Главная" },
    { to: "/games", label: "Игры" },
    { to: "/testers", label: "Тестеры" },
    { to: "/help", label: "Справка" },
  ];

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#0a0d12]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg neon-border flex items-center justify-center glow-pulse">
              <Icon name="Gamepad2" size={16} className="text-green-400" />
            </div>
            <span className="font-['Orbitron'] font-bold text-white text-lg tracking-wider">
              PLAY<span className="neon-text">TESTER</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-['Rajdhani'] tracking-wide ${
                  isActive(l.to)
                    ? "text-green-400 bg-green-400/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/messages"
              className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Icon name="MessageSquare" size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-green-400"></span>
            </Link>
            <Link
              to="/notifications"
              className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Icon name="Bell" size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-green-400"></span>
            </Link>
            <div className="w-px h-6 bg-white/10 mx-1" />
            <Link
              to="/profile"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs font-bold text-black">
                АИ
              </div>
              <span className="text-sm text-slate-300 font-medium">Мой профиль</span>
            </Link>
            <Link
              to="/games"
              className="neon-btn px-4 py-1.5 rounded-lg text-sm"
            >
              + Проект
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0d12] px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium font-['Rajdhani'] tracking-wide ${
                isActive(l.to)
                  ? "text-green-400 bg-green-400/10"
                  : "text-slate-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2">
            <Link to="/profile" onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-2 rounded-lg border border-white/10 text-slate-300 text-sm">
              Профиль
            </Link>
            <Link to="/games" onClick={() => setMenuOpen(false)} className="flex-1 text-center neon-btn px-4 py-2 rounded-lg text-sm">
              + Проект
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
