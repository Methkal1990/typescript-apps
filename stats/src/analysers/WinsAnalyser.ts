import { Analyser } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalyser implements Analyser {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.homeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.awayWin) {
        wins++;
      }
    }
    return `the team ${this.team} won ${wins} games`;
  }
}
