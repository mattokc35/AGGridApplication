import { useState, useEffect } from "react";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";

type Chemical = {
  id: number;
  date: string;
  synthesizer: string;
  name: string;
  lot: string;
  structure: string;
  category: string;
  purpose: string;
  gram: number;
  sublimationtemp: number;
  purities: number[];
  inchikey: string;
  comment: string;
};

function App() {
  const [chemicals, setChemicals] = useState<Chemical[]>([]);

  useEffect(() => {
    fetchChemicals();
  }, []);

  const fetchChemicals = async () => {
    try {
      const response = await fetch("http://localhost:8000/chemicals/");
      const data = await response.json();
      console.log(data);
      setChemicals(data);
    } catch (error) {
      console.error("Error fetching chemicals:", error);
    }
  };

  const columnDefs: ColDef[] = [
    { headerName: "ID", field: "id", editable: true },
    { headerName: "Date", field: "date", editable: true },
    { headerName: "Synthesizer", field: "synthesizer", editable: true },
    { headerName: "Name", field: "name", editable: true },
    { headerName: "Lot", field: "lot", editable: true },
    { headerName: "Structure", field: "structure", editable: true },
    { headerName: "Category", field: "category", editable: true },
    { headerName: "Purpose", field: "purpose", editable: true },
    { headerName: "Gram", field: "gram", editable: true },
    {
      headerName: "Sublimation Temp",
      field: "sublimationtemp",
      editable: true,
    },
    {
      headerName: "Purities",
      field: "purities",
      valueGetter: (params: any) => params.data.purities.join(", "),
      editable: true,
    },
    { headerName: "Inchikey", field: "inchikey", editable: true },
    { headerName: "Comment", field: "comment", editable: true },
  ];

  return (
    <>
      <div
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Material Table</h1>
        <div
          className="ag-theme-alpine-dark"
          style={{ height: "100vh", width: "95%" }}
        >
          <AgGridReact
            rowData={chemicals}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={20}
            domLayout="autoHeight"
            defaultColDef={{ resizable: true }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
