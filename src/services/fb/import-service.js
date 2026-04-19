import { addNews } from "./news-service";
import { parseJSON } from "./parsers/json-parser";
import { parseCSV } from "./parsers/csv-parser";
import { parseXML } from "./parsers/xml-parser";
import { parseExcel } from "./parsers/excel-parser";
import { deleteAllNews } from "./news-service";

export const importNews = async (file) => {
  const extension = file.name.split(".").pop().toLowerCase();

  let data;

  switch (extension) {
    case "json":
      data = await parseJSON(file);
      break;

    case "csv":
      data = await parseCSV(file);
      break;

    case "xml":
      data = await parseXML(file);
      break;

    case "xlsx":
    case "xls":
    case "ods":
      data = await parseExcel(file);
      break;

    default:
      alert("Format not supported");
      return;
  }

  await deleteAllNews();

  // Guardar en Firebase
  for (const news of data) {
    await addNews({
      title: news.title || "",
      content: news.content || "",
      imageUrl: news.imageUrl || null
    });
  }
};

