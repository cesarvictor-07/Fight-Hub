import Papa from "papaparse";

export const formatToCSV = (data) => {
  return Papa.unparse(data);
};