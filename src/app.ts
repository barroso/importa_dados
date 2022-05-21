import { Lead } from "./model/lead";
import { WorksheetFile } from "./worksheet/file";

const file = "fake_data/cadastros_21052022_10_linhas.xlsx";

let worksheet = new WorksheetFile(__dirname, file);
worksheet.execute();
let sheetData = worksheet.pageData(0);

if (worksheet.error_message || sheetData == undefined) {
    throw new Error(worksheet.error_message);
} else {
    console.table(sheetData); 
    console.log("Total Registros:", sheetData.length);

    console.log("Montando objetos:");

    for(var row in sheetData){
        let lead = (sheetData[row] as Lead);
        console.log(`Linha ${row}: `, lead.nome, lead.email, lead.telefone, lead.cidade, lead.nota);
    }
    
    console.log("Processamento finalizado!");
}
