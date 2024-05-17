import { ColDef } from "ag-grid-community";

export const columnDefs: ColDef[] = [
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
