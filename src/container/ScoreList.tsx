import React, { useEffect } from 'react';
import { ScoresContextType, IScores } from '../@types/scores';
import { ScoreContext } from '../context/scoreContext';
import Score from '../components/Score';
import styled from 'styled-components';

const UnorderedList = styled.ul`
      padding: 0;
      margin: 0;
      box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.4);
      width: 100%;
      border-radius: 12px;
      background-color: #fff;
      overflow: hidden;
`;

const ScoreList = () => {
  const { scores, updateScores } = React.useContext(ScoreContext) as ScoresContextType;

  useEffect(() => {
    const time = setInterval(() => updateScores(), 1000);
    return () => clearInterval(time);
  }, [updateScores]);

  return (
    <div className="table-section">
      <UnorderedList className="data-list">
        {scores.map((score: IScores, index: number) => (
          <Score key={score.userID} score={score} index={index} />
        ))}
      </UnorderedList>
    </div>
  );
};

export default ScoreList;
