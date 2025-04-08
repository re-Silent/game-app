const apps = [
  { name: "Steam", installed: true },
  { name: "Discord", installed: true },
  { name: "Epic Games", installed: false },
  { name: "Riot Games", installed: true },
  { name: "TeamSpeak", installed: true },
  { name: "Logitech GHub", installed: false }
];

export default function Apps() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Приложения</h1>
      <div className="grid grid-cols-3 gap-4">
        {apps.map((app, i) => (
          <div key={i} className="bg-[#1c1f2a] p-4 rounded-xl flex justify-between items-center">
            <span>{app.name}</span>
            <button className="px-3 py-1 text-sm rounded-md bg-indigo-600 hover:bg-indigo-500">
              {app.installed ? "Открыть" : "Установить"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
