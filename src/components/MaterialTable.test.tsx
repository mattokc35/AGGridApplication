import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import MaterialTable from "./MaterialTable";
import { Chemical } from "../types/Types";

const mockChemicals: Chemical[] = [
  {
    id: 1,
    date: "2024-05-01",
    synthesizer: "Synth Test",
    name: "Chemical A",
    lot: "T1",
    structure: "C6H12O6",
    category: "Host",
    purpose: "Green",
    gram: 5.5,
    sublimationtemp: 350,
    purities: [99.5],
    inchikey: "ABCDEFGHIJKL",
    comment: "First batch",
  },
  {
    id: 2,
    date: "2022-06-15",
    synthesizer: "Synth Test 2",
    name: "Chemical B",
    lot: "T2",
    structure: "C2H4O2",
    category: "Dopant",
    purpose: "Blue",
    gram: 7.5,
    sublimationtemp: 400,
    purities: [98.0],
    inchikey: "MNOPQRSTUVWXYZ",
    comment: "Second batch",
  },
];

describe("MaterialTable Component", () => {
  let setChemicals: jest.Mock;

  beforeEach(() => {
    setChemicals = jest.fn();
  });

  test("renders without crashing", () => {
    render(
      <MaterialTable chemicals={mockChemicals} setChemicals={setChemicals} />
    );
    expect(screen.getByText("Material Table")).toBeInTheDocument();
  });

  test("displays the correct number of rows", () => {
    render(
      <MaterialTable chemicals={mockChemicals} setChemicals={setChemicals} />
    );
    expect(screen.getAllByRole("row")).toHaveLength(mockChemicals.length + 1); // including header row
  });
});
