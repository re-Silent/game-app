import { HeartIcon, KeyIcon } from "lucide-react";

export function GameCard({ image, title, favorite, licensed, onToggleFavorite }) {
  return (
    <div className="relative group">
      <img src={image} alt={title} className="rounded-xl w-full h-40 object-cover" />
      <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-sm p-1 rounded">{title}</div>
      <div className="absolute top-2 right-2 flex gap-2">
        <button onClick={onToggleFavorite}>
          <HeartIcon className={`w-5 h-5 ${favorite ? "text-red-500" : "text-white/60"} hover:text-red-400`} />
        </button>
        {licensed && <KeyIcon className="w-5 h-5 text-green-400" />}
      </div>
    </div>
  );
}
