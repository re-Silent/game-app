export default function Store() {
  const tariffs = [
    { name: "1 час", price: "100₽" },
    { name: "3 часа", price: "250₽" },
    { name: "VIP-день", price: "500₽" }
  ];

  const items = [
    { name: "Red Bull", price: "150₽" },
    { name: "Наушники в аренду", price: "100₽" },
    { name: "Мерч футболка", price: "1000₽" }
  ];

  return (
    <div className="min-h-screen bg-[#0f1117] text-white p-6 space-y-8">
      <h1 className="text-3xl font-bold">🛍 Магазин</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">💳 Тарифы</h2>
        <div className="grid grid-cols-3 gap-4">
          {tariffs.map((t, i) => (
            <div key={i} className="bg-[#1c1f2a] p-4 rounded-xl">
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="text-sm opacity-75">{t.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">🎁 Товары</h2>
        <div className="grid grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div key={i} className="bg-[#1c1f2a] p-4 rounded-xl">
              <div className="text-lg font-semibold">{item.name}</div>
              <div className="text-sm opacity-75">{item.price}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
