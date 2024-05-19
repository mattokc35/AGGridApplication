import { useState, useEffect } from "react";
import MaterialTable from "./components/MaterialTable";
import { Chemical } from "./types/Types";

function App() {
  const [chemicals, setChemicals] = useState<Chemical[]>([]);

  useEffect(() => {
    fetchChemicals();
  }, []);

  const fetchChemicals = async () => {
    fetch("http://localhost:8000/chemicals/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setChemicals(data);
      })
      .catch((error) => {
        console.error("Error fetching chemicals: ", error);
      });
  };

  return (
    <div>
      <MaterialTable chemicals={chemicals} setChemicals={setChemicals} />
    </div>
  );
}

export default App;
