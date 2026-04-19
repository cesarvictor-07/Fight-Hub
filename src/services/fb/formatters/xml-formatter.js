import { Builder } from "xml2js";

export const formatToXML = (data) => {
  const builder = new Builder({
    rootName: "chat",
    headless: true
  });

  return builder.buildObject({
    message: data
  });
};