import * as React from 'react';
import { IScores } from '../@types/scores';
import styled, { keyframes } from 'styled-components';
import "../score.css";

type Props = {
  score: IScores;
  index: number
};

const rotate = keyframes`
  from {
    transform: translateY(100%);
    }

  to {
    transform: translateY(0%);
  }
`;
const List = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 6px 16px;
    border-bottom: 1px solid #D6D6D6;
    background-color:#fff;   
    animation: ${rotate} 0.9s ease-in-out; 
    &:nth-child(even) {
      background-color: #E9EEF8;
    }
    &:hover{
      background-color: #4E67F3;
    } 
`;
const SubTitle = styled.h2`
    font-size: 18px;
    line-height: 28px;
    margin: 0;
    font-weight: 600;
    color: #000;
`;
const Image = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
`;

const counter = keyframes`
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
`;

const Paragraph = styled.p`
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    font-weight: 600;
    color: #323030;
    animation: ${counter} ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;
const Badge = styled.p`
    width: 15px;
    height: 15px;
    background-color: #4E67F3;
    color: #fff;
    font-size: 8px;
    line-height: 14px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -5px;
    bottom: 0px;
    border: 1px solid #fff;
    margin: 0;
    padding-bottom: 1px;
`;
const Span = styled.span`
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: #939393;
    padding-left: 6px;
`;

const Score: React.FC<Props> = ({ score, index }) => {

  return (
    <List id={score.userID} key={index} className="list-item first-list">
      <div className="left-content">
        <div className="profile-image">
          <Image src={score.picture} alt={score.userID} />
          <Badge>{index + 1}</Badge>
        </div>
        <div className="profile-text">
          <SubTitle>{score.displayName}</SubTitle>
        </div>
      </div>
      <div className="right-content">
        <Paragraph>{score.score}</Paragraph>
        <Span>points</Span>
      </div>
    </List>
  );
};

export default Score;