export interface IScores {
    userID: string;
    displayName: string;
    picture: string;
    score: number;
  }
  export type ScoresContextType = {
    scores: IScores[];
    updateScores: () => void;
  };
 export interface Props {
    children: React.ReactNode
}