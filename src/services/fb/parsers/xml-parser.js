import { parseStringPromise } from "xml2js";

export const parseXML = async (file) => {
  const text = await file.text();
  const result = await parseStringPromise(text);

  // Adaptar estructura
  const messages = result.chat.message || [];

  return messages.map(msg => ({
    title: msg.title?.[0] || "",
    content: msg.content?.[0] || "",
    imageUrl: msg.imageUrl?.[0] || null
  }));
};