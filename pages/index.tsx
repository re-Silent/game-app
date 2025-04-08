import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { GameCard } from "@/components/GameCard";
import { HeartIcon, KeyIcon } from "lucide-react";

const games = [
  { title: "Resident Evil 7", image: "/games/resident-evil.jpg", tags: ["Хоррор", "Квест"], age: "12+", favorite: false, licensed: true },
  { title: "Apex Legends", image: "/games/apex.jpg", favorite: true, licensed: true },
  { title: "Atomic Heart", image: "/games/atomic.jpg", favorite: false, licensed: false },
  { title: "Among Us", image: "/games/amongus.jpg", favorite: false, licensed: true },
  { title: "Valorant", image: "/games/valorant.jpg", favorite: false, licensed: true },
  { title: "League of Legends", image: "/games/lol.jpg", favorite: true, licensed: true },
  { title: "GTA V", image: "/games/gta.jpg", favorite: false, licensed: false },
  { title: "FC 24", image: "/games/fc24.jpg", favorite: true, licensed: true },
  { title: "Hunt Showdown", image: "/games/hunt.jpg", favorite: false, licensed: true }
];

export default function GameLauncher() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(games.map((g) => g.favorite));

  const toggleFavorite = (index) => {
    const updated = [...favorites];
    updated[index] = !updated[index];
    setFavorites(updated);
  };

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="bg-[#0f1117] min-h-screen text-white p-4 cursor-custom">
      <style jsx global>{`
        .cursor-custom {
          cursor: url('/cursor/cursor.svg'), auto;
        }
      `}</style>

      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-between items-center mb-6">
        <div className="text-2xl font-bold">🎮 Игровой центр</div>
        <div className="flex gap-4 items-center">
          <span>2ч 18мин</span>
          <Button variant="ghost">🔔</Button>
          <Button variant="ghost">👤 JG</Button>
        </div>
      </motion.header>

      <nav className="flex gap-6 mb-6">
        <Button variant="ghost">Главная</Button>
        <Button variant="default">Игровой контент</Button>
        <Button variant="ghost">Приложения</Button>
        <Button variant="ghost">Магазин</Button>
      </nav>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="relative bg-cover bg-center rounded-2xl overflow-hidden h-72 mb-6" style={{ backgroundImage: `url('/games/resident-evil.jpg')` }}>
        <div className="bg-black/60 p-6 h-full flex flex-col justify-end">
          <div className="text-3xl font-bold">RESIDENT EVIL 7 <span className="text-sm font-normal">12+</span></div>
          <div className="text-sm opacity-80 mb-2">Хоррор-выживание от первого лица от студии Capcom...</div>
          <div className="flex gap-2">
            <Button onClick={() => alert('Игра запущена!')}>🚀 Запуск</Button>
            <Button variant="outline">🔗 Лицензия центра</Button>
          </div>
        </div>
      </motion.section>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Поиск игры"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded-md bg-[#1b1e29] text-white placeholder:text-white/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition w-64"
        />
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Все игры</TabsTrigger>
            <TabsTrigger value="shooters">Шутеры</TabsTrigger>
            <TabsTrigger value="casual">Казуальные</TabsTrigger>
            <TabsTrigger value="horror">Ужасы</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {filteredGames.map((game, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="relative group">
            <img src={game.image} alt={game.title} className="rounded-xl w-full h-40 object-cover" />
            <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-sm p-1 rounded">
              {game.title}
            </div>
            <div className="absolute top-2 right-2 flex gap-2">
              <button onClick={() => toggleFavorite(index)}>
                <HeartIcon className={`w-5 h-5 ${favorites[index] ? 'text-red-500' : 'text-white/60'} hover:text-red-400`} />
              </button>
              {game.licensed && <KeyIcon className="w-5 h-5 text-green-400" />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
