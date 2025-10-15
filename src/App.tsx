

function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        MikuBunny Frontend
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Se você está vendo cores e espaçamento bonitinhos, o Tailwind está funcionando!
      </p>

      <div className="min-h-screen bg-pink-500 text-white flex items-center justify-center">
  <h1 className="text-4xl font-bold">Tailwind Funciona!</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-full h-32 bg-pink-200 rounded mb-2"></div>
          <h2 className="font-semibold text-lg">Pack 1</h2>
          <p className="text-gray-500 text-sm">Preview borrado</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-full h-32 bg-pink-300 rounded mb-2"></div>
          <h2 className="font-semibold text-lg">Pack 2</h2>
          <p className="text-gray-500 text-sm">Preview borrado</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <div className="w-full h-32 bg-pink-400 rounded mb-2"></div>
          <h2 className="font-semibold text-lg">Pack 3</h2>
          <p className="text-gray-500 text-sm">Preview borrado</p>
        </div>
      </div>
    </div>
  );
}

export default App;
