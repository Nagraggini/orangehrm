import fs from "fs";
import * as csvParseSync from "csv-parse/sync";

export function readCSV(filePath: string) {
    // Adj hozzá 'utf-8'-at, hogy biztosan szövegként olvassa be
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const records = csvParseSync.parse(fileContent, {
        columns: true, // A fejlés a mezőneveket tartalmazza.
        skip_empty_lines: true,
    });
    return records;
}
