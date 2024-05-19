import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { GridApi, IRowNode } from "ag-grid-community";
import { Chemical } from "../types/Types";
import { columnDefs } from "../constants/Constants";

type MaterialTableProps = {
  chemicals: Chemical[];
  setChemicals: React.Dispatch<React.SetStateAction<Chemical[]>>;
};

const MaterialTable: React.FC<MaterialTableProps> = ({
  chemicals,
  setChemicals,
}) => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [isRowSelected, setIsRowSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsRowSelected(false);
  }, [chemicals]);

  const handleDeleteSelectedRows = () => {
    if (gridApi) {
      const selectedNodes: IRowNode[] | null = gridApi.getSelectedNodes();
      if (selectedNodes && selectedNodes.length > 0) {
        const selectedRows: Chemical[] = selectedNodes.map((node) => node.data);
        const remainingRows: Chemical[] = chemicals.filter(
          (chem) => !selectedRows.includes(chem)
        );
        setChemicals(remainingRows);
        gridApi.deselectAll();
      }
    }
  };

  const onSelectionChanged = () => {
    if (gridApi) {
      setIsRowSelected(gridApi.getSelectedNodes().length > 0);
    }
  };

  return (
    <>
      <div
        className="ag-theme-alpine-dark"
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#333",
          gap: "1rem",
        }}
      >
        <h1>Material Table</h1>
        <p>
          Rows are editable, sortable, filterable, and also able to be deleted.
          Select a row by clicking, and edit a row cell value by double clicking
          the cell!
        </p>
        {isRowSelected && (
          <button
            style={{ width: "15%", height: "2rem" }}
            onClick={handleDeleteSelectedRows}
          >
            Delete Selected Rows
          </button>
        )}

        <div
          className="ag-theme-alpine-dark"
          style={{
            height: "100vh",
            width: "95%",
          }}
        >
          <AgGridReact
            rowData={chemicals}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={20}
            domLayout="autoHeight"
            defaultColDef={{ resizable: true, filter: true, sortable: true }}
            onGridReady={(params) => setGridApi(params.api)}
            rowSelection="multiple"
            onSelectionChanged={onSelectionChanged}
          />
        </div>
      </div>
    </>
  );
};

export default MaterialTable;
