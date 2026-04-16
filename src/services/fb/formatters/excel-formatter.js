import * as XLSX from "xlsx";

export const formatToExcel = (data, type = "xlsx") => {
  // Convertir JSON → hoja
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Crear libro
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Chat");

  // Generar archivo en formato binario
  return XLSX.write(workbook, {
    bookType: type, // "xlsx", "xls", "ods"
    type: "array"
  });
};