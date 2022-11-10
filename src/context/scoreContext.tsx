
import * as React from 'react';
import { ScoresContextType, IScores, Props } from '../@types/scores';

export const ScoreContext = React.createContext<ScoresContextType | null>(null);

function ScoreProvider({ children }: Props) {

    const [scores, setScores] = React.useState<IScores[]>([
        {
            "userID": "u-1",
            "displayName": "Jone",
            "picture": "/assets/profile1.jpg",
            "score": 157000
        },
        {
            "userID": "u-2",
            "displayName": "Victoria",
            "picture": "/assets/profile2.jpg",
            "score": 46200
        },
        {
            "userID": "u-3",
            "displayName": "Joy",
            "picture": "/assets/profile3.jpg",
            "score": 38800
        },
        {
            "userID": "u-4",
            "displayName": "Quinn",
            "picture": "/assets/profile4.jpg",
            "score": 33400
        },
        {
            "userID": "u-5",
            "displayName": "Sheenalo",
            "picture": "/assets/profile5.jpg",
            "score": 31600
        },
        {
            "userID": "u-6",
            "displayName": "Charlene",
            "picture": "/assets/profile6.jpg",
            "score": 30800
        },
        {
            "userID": "u-7",
            "displayName": "LeonaBaby",
            "picture": "/assets/profile7.jpg",
            "score": 22300
        },
        {
            "userID": "u-8",
            "displayName": "Sunny",
            "picture": "/assets/profile8.jpg",
            "score": 17800
        },
        {
            "userID": "u-9",
            "displayName": "ImWord",
            "picture": "/assets/profile9.jpg",
            "score": 17300
        },
        {
            "userID": "u-10",
            "displayName": "Dophine",
            "picture": "/assets/profile10.jpg",
            "score": 15400
        }
    ])

    function getMultipleRandom(arr: IScores[], num: number) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    const updateScores = () => {
        let randomArray = getMultipleRandom(scores, Math.random() * 5);
        let data: Array<IScores> = scores.map((sc) => {
            if (randomArray.includes(sc)) {
                sc.score = Math.floor((sc.score + (Math.random() * 100000)));
            }
            return sc
        })
        data = data.sort((a: IScores, b: IScores) => b.score - a.score);
        setScores([...data]);
    }

    return <ScoreContext.Provider value={{ scores, updateScores }}>{children}</ScoreContext.Provider>;
}
export default ScoreProvider;