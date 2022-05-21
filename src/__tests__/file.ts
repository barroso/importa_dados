import { WorksheetFile } from "../worksheet/file";

describe("Filter function", () => {
  const file = "../fake_data/cadastros_21052022_10_linhas.xlsx";
  
  test("error message empty", () => {
    let worksheet = new WorksheetFile(__dirname, file);
    worksheet.execute();
    let sheetData = worksheet.pageData(0);
    
    expect(worksheet.error_message).toBeUndefined();
  });
  
  test("error message is not empty", () => {
    let worksheet = new WorksheetFile(__dirname, file);
    let sheetData = worksheet.pageData(0);

    expect(worksheet.error_message).toBe("Não possível acessar os dados da planilha! Você lembrou de chamar o execute antes?");
  });
});
