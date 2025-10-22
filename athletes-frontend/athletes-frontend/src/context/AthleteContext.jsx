import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const AthleteContext = createContext();
export const useAthletes = () => useContext(AthleteContext);

const API_URL = "http://localhost:3000/athletes";

export function AthleteProvider({ children }) {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setAthletes(data.athletes || []);
    } catch (e) {
      setError("Tietojen haku epäonnistui");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const createAthlete = async (athlete) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(athlete),
    });
    fetchAll();
  };

  const updateAthlete = async (id, athlete) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(athlete),
    });
    fetchAll();
  };

  const deleteAthlete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setAthletes((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <AthleteContext.Provider
      value={{
        athletes,
        loading,
        error,
        createAthlete,
        updateAthlete,
        deleteAthlete,
      }}
    >
      {children}
    </AthleteContext.Provider>
  );
}
