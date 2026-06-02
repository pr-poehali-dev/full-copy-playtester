import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/games", label: "Исследовать" },
    { to: "/games", label: "Категории" },
    { to: "/help", label: "О нас" },
    { to: "/help", label: "Блог" },
  ];

  const isActive = (label: string) =>
    (label === "Исследовать" && location.pathname.startsWith("/games")) ||
    (label === "О нас" && location.pathname.startsWith("/help"));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left: logo + nav */}
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2.5">
              <Icon name="Navigation" size={22} className="text-white -rotate-45" />
              <span className="font-bold text-white text-xl tracking-tight">Playtester</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {links.map((l, i) => (
                <Link
                  key={i}
                  to={l.to}
                  className={`px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                    isActive(l.label) ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <button className="flex items-center gap-1 px-3.5 py-2 text-[15px] font-semibold text-white/60 hover:text-white transition-colors">
                Еще <Icon name="ChevronDown" size={15} />
              </button>
            </div>
          </div>

          {/* Right: search + add game + avatar */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-white/70 hover:text-white transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <Link to="/games" className="btn-white px-5 py-2.5 rounded-full text-[15px]">
              Добавить игру
            </Link>
            <Link to="/profile" className="block">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 ring-2 ring-white/10" />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-white/80"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-1">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-[15px] font-semibold text-white/70"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/games"
            onClick={() => setMenuOpen(false)}
            className="block btn-white text-center px-5 py-2.5 rounded-full text-[15px] mt-3"
          >
            Добавить игру
          </Link>
        </div>
      )}
    </nav>
  );
}
