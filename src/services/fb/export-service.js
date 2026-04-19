import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import { formatToJSON } from "./formatters/json-formatter";
import { formatToCSV } from "./formatters/csv-formatter";
import { formatToXML } from "./formatters/xml-formatter";
import { formatToExcel } from "./formatters/excel-formatter";

const getMessagesByGame = async (selectedGame) => {
  const snapshot = await getDocs(
    collection(db, "chats", selectedGame, "messages")
  );

  return snapshot.docs.map(doc => {
    const data = doc.data();

    return {
      id: doc.id,
      Username: data.Username,
      Message: data.Message,
      userId: data.userId,
      timestamp: data.timestamp?.toDate()?.toISOString() || null
    };
  });
};
export const exportChat = async (selectedGame, format) => {
  if (!selectedGame) return;

  const data = await getMessagesByGame(selectedGame);

  if (!data.length) {
    alert("No hay mensajes para exportar");
    return;
  }

  let content;
  let type;
  let filename;

  switch (format) {
    case "json":
      content = formatToJSON(data);
      type = "application/json";
      filename = `${selectedGame}.json`;
      break;

    case "csv":
      content = formatToCSV(data);
      type = "text/csv";
      filename = `${selectedGame}.csv`;
      break;

    case "xml":
      content = formatToXML(data);
      type = "application/xml";
      filename = `${selectedGame}.xml`;
      break;

    case "xlsx":
      content = formatToExcel(data, "xlsx");
      type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      filename = `${selectedGame}.xlsx`;
      break;

    case "xls":
      content = formatToExcel(data, "xls");
      type = "application/vnd.ms-excel";
      filename = `${selectedGame}.xls`;
      break;

    case "ods":
      content = formatToExcel(data, "ods");
      type = "application/vnd.oasis.opendocument.spreadsheet";
      filename = `${selectedGame}.ods`;
      break;

    default:
      return;
  }

  downloadFile(content, type, filename);
};

const downloadFile = (content, type, filename) => {
  const blob = new Blob([content], {
    type: type || "application/octet-stream"
  });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
};