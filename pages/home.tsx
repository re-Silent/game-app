import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

const topGames = [
  "Apex Legends",
  "League of Legends",
  "Valorant",
  "GTA V",
  "FC 24"
];

const activities = [
  "Пользователь Alex заработал достижение 'Мастер AWP'",
  "Пользователь Lisa купила VIP тариф",
  "Пользователь Vlad провел 5 часов подряд в League of Legends"
];

export default function Home() {
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f1117] text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold">🏠 Главная</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">🔥 Топ игр</h2>
        <ol className="space-y-2">
          {topGames.map((game, i) => (
            <li key={i} className="bg-[#1c1f2a] p-3 rounded-xl">
              #{i + 1} — {game}
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">📱 QR-код на соцсеть</h2>
        <div className="bg-white p-4 w-fit rounded-xl">
          <QRCode value="https://vk.com/yourclub" size={128} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">📢 Активность центра</h2>
        <motion.div
          key={activityIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1c1f2a] p-4 rounded-xl"
        >
          {activities[activityIndex]}
        </motion.div>
      </section>
    </div>
  );
}
