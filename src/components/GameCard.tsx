import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export interface Game {
  id: number;
  title: string;
  desc: string;
  img: string;
  gradient: string;
  emoji: string;
  status: "green" | "red";
  testType: string;
  meta: string;
  platforms: string[];
}

const platformIcon: Record<string, string> = {
  steam: "Gamepad2",
  epic: "Hexagon",
  app: "Apple",
  android: "Play",
};

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link to={`/games/${game.id}`} className="game-card block group">
      {/* Thumbnail 16:9 */}
      <div className="game-thumb relative aspect-[16/10]">
        <div className={`absolute inset-0 ${game.gradient} flex items-center justify-center`}>
          <span className="text-6xl drop-shadow-lg">{game.emoji}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
        {/* Platform icons top-right */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          {game.platforms.map((p, i) => (
            <div key={i} className="w-7 h-7 rounded-md bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <Icon name={platformIcon[p] as never} fallback="Gamepad2" size={14} className="text-white/90" />
            </div>
          ))}
        </div>
      </div>

      {/* Title + status */}
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-white text-[17px] leading-snug truncate group-hover:text-white/80 transition-colors">
            {game.title}
          </h3>
          <span className={`shrink-0 w-2 h-2 rounded-full ${game.status === "green" ? "dot-green" : "dot-red"}`} />
        </div>
        <p className="text-[14px] text-white/45 mt-1 line-clamp-2 leading-snug">{game.desc}</p>
        <div className="flex items-center gap-2 mt-2.5 text-[13px] text-white/55">
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span className="font-medium">{game.testType}</span>
          <span className="text-white/30">·</span>
          <span>{game.meta}</span>
        </div>
      </div>
    </Link>
  );
}
