import * as XLSX from "xlsx";

export const parseExcel = async (file) => {
  const arrayBuffer = await file.arrayBuffer();

  const workbook = XLSX.read(arrayBuffer, { type: "array" });

  // Primera hoja
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convertir a JSON
  const data = XLSX.utils.sheet_to_json(worksheet);

  return data.map(row => ({
    title: row.title || "",
    content: row.content || "",
    imageUrl: row.imageUrl || null
  }));
};