import { ColDef } from "ag-grid-community";

export const columnDefs: ColDef[] = [
  {
    headerName: "ID",
    field: "id",
    editable: true,
    filter: "agNumberColumnFilter",
  },
  {
    headerName: "Date",
    field: "date",
    editable: true,
    filter: "agDateColumnFilter",
  },
  {
    headerName: "Synthesizer",
    field: "synthesizer",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Name",
    field: "name",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Lot",
    field: "lot",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Structure",
    field: "structure",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Category",
    field: "category",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Purpose",
    field: "purpose",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Gram",
    field: "gram",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Sublimation Temp",
    field: "sublimationtemp",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Purities",
    field: "purities",
    valueGetter: (params: any) => params.data.purities.join(", "),
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Inchikey",
    field: "inchikey",
    editable: true,
    filter: "agTextColumnFilter",
  },
  {
    headerName: "Comment",
    field: "comment",
    editable: true,
    filter: "agTextColumnFilter",
  },
];
