/** This function maps every content type of http requests to the correct file's format */
export function contentTypeToExtension(contentType) {
  let ret = "";
  switch (contentType) {
    case "text/css":
      ret = ".css";
      break;
    case "text/csv":
      ret = ".csv";
      break;
    case "application/msword":
      ret = ".doc";
      break;
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      ret = ".docx";
      break;
    case "application/vnd.ms-fontobject":
      ret = ".eot";
      break;
    case "application/epub+zip":
      ret = ".epub";
      break;
    case "image/gif":
      ret = ".gif";
      break;
    case "text/html":
      ret = ".html";
      break;
    case "application/json":
      ret = ".json";
      break;
    case "application/vnd.oasis.opendocument.text":
      ret = ".odt";
      break;
    case "image/png":
      ret = ".png";
      break;
    case "application/pdf":
      ret = ".pdf";
      break;
    case "application/vnd.ms-excel":
      ret = ".xls";
      break;
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      ret = ".xlsx";
      break;
    case "text/plain":
    default:
      ret = ".txt";
  }
  return ret;
}
