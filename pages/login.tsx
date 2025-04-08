export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1117] text-white">
      <form className="bg-[#1c1f2a] p-8 rounded-xl w-96 space-y-4">
        <h1 className="text-2xl font-bold">🔐 Вход</h1>
        <input type="text" placeholder="Логин" className="w-full p-2 rounded-md bg-[#2a2d3a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <input type="password" placeholder="Пароль" className="w-full p-2 rounded-md bg-[#2a2d3a] border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button type="submit" className="w-full py-2 rounded-md bg-indigo-600 hover:bg-indigo-500">
          Войти
        </button>
      </form>
    </div>
  );
}
