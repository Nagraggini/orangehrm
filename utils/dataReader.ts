import path from "path";
import { readCSV } from "../utils/csvReader";
import { readExcel } from "../utils/excelReader";
import fs, { readFileSync } from "fs";

// A ? azt jelenti, hogy nem kötelező megadni.
export function readData(filePath: string, sheetName?: string) {
    const ext = path.extname(filePath).toLowerCase();

    switch (ext) {
        case ".csv":
            return readCSV(filePath);
        case ".xlsx":
            return readExcel(filePath, sheetName || "Sheet1");
        case ".json":
            const JSONData = fs.readFileSync(filePath, "utf-8");
            return JSON.parse(JSONData);
        default:
            // Backtick (Visszafelé dőlő ékezet)-t használj!
            throw new Error(`Unsupported file type - ${ext}`);
    }
}
