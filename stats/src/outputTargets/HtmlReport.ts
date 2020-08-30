import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>Summary</div>
        <h1>Analysis Report</h1>
        <div>${report}</div>
        `;

    fs.writeFileSync("report.html", html);
  }
}
