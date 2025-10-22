import "./App.css";
import { AthleteProvider } from "./context/AthleteContext";
import AthleteForm from "./components/AthleteForm";
import AthleteList from "./components/AthleteList";

function App() {
  return (
    <AthleteProvider>
      <div className="container py-4">
        <header className="text-center mb-5">
          <div className="p-4 bg-primary text-white rounded shadow-sm">
            <h1 className="mb-2">Urheilijat</h1>
            <p className="lead mb-0">
              Lisää, muokkaa ja selaa suomalaisia urheilijoita
            </p>
          </div>
        </header>

        <main>
          <AthleteForm />
          <AthleteList />
        </main>

        <footer className="text-center mt-5 small">
          <p>Web-ohjelmointi 2 – Kurssitehtävä – {new Date().getFullYear()}</p>
        </footer>
      </div>
    </AthleteProvider>
  );
}

export default App;
