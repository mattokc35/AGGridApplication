export type Chemical = {
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
