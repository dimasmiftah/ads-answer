type Classment = {
  Indonesia: number;
  Malaysia: number;
  Jepang: number;
  Cina: number;
};

type MatchResult = {
  NamaTeam1: string[];
  NamaTeam2: string[];
  SkorTeam1: number[];
  SkorTeam2: number[];
};

const classement: Classment = {
  Indonesia: 0,
  Malaysia: 0,
  Jepang: 0,
  Cina: 0,
};

const matchResult: MatchResult = {
  NamaTeam1: ['Indonesia', 'Malaysia', 'Cina', 'Cina', 'Indonesia', 'Jepang'],
  NamaTeam2: ['Malaysia', 'Jepang', 'Malaysia', 'Indonesia', 'Jepang', 'Cina'],
  SkorTeam1: [5, 1, 3, 0, 0, 1],
  SkorTeam2: [2, 3, 0, 2, 0, 3],
};

function countTeamScore(
  classement: Classment,
  matchResult: MatchResult
): Classment {
  for (let i = 0; i < matchResult.NamaTeam1.length; i++) {
    if (matchResult.SkorTeam1[i] > matchResult.SkorTeam2[i]) {
      classement[matchResult.NamaTeam1[i]] += 3;
    } else if (matchResult.SkorTeam1[i] < matchResult.SkorTeam2[i]) {
      classement[matchResult.NamaTeam2[i]] += 3;
    } else {
      classement[matchResult.NamaTeam1[i]] += 1;
      classement[matchResult.NamaTeam2[i]] += 1;
    }
  }

  return classement;
}

countTeamScore(classement, matchResult); // { Indonesia: 7, Malaysia: 0, Jepang: 4, Cina: 6 }
