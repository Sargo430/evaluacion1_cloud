import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6">
        <Home />
      </div>
    </div>
  );
}

export default App;