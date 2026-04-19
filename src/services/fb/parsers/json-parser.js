export const parseJSON = async (file) => {
  const text = await file.text();
  return JSON.parse(text);
};