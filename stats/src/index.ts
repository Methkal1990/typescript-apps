import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./outputTargets/ConsoleReport";
import { WinsAnalyser } from "./analysers/WinsAnalyser";
import { HtmlReport } from "./outputTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

// HtmlReport
const summary = new Summary(new WinsAnalyser("Bournemouth"), new HtmlReport());
// ConsoleReport
// const summary = new Summary(new WinsAnalyser("Bournemouth"), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
