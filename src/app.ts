import fs from "fs";
import path from "path";
import xlsx from "xlsx";
import { Lead } from "./model/lead";

const file = "fake_data/cadastros_21052022_10_linhas.xlsx";
const fullPath = path.join(__dirname, file);

if (fs.existsSync(fullPath)) {
    console.log("Planilha localizada:", fullPath);
} else {
    console.log("Planilha NÃO localizada:", fullPath);
}

console.log("Lendo Planilha...");

let worksheet = xlsx.readFile(fullPath, { sheetRows: 11 });
let sheetsList = worksheet.SheetNames;

console.log("Abas: ", sheetsList);

let sheetData = xlsx.utils.sheet_to_json(worksheet.Sheets[sheetsList[0]], {
  defval: "",
  blankrows: true,
});

console.table(sheetData); 

console.log("Total Registros:", sheetData.length);
console.log("Leitura finalizada!");
console.log("Montando objetos:");

for(var row in sheetData){
    let lead = (sheetData[row] as Lead);
    console.log(`Linha ${row}: `, lead.nome, lead.email, lead.telefone, lead.cidade, lead.nota);
}

console.log("Processamento finalizado!");