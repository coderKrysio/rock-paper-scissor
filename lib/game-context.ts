import { createContext } from "react";

type GameContextType = {
    userSubmitted: boolean;
    setUserSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
    playerChoice: string;
    setPlayerChoice: React.Dispatch<React.SetStateAction<string>>;
    computerChoice: string;
    setComputerChoice: React.Dispatch<React.SetStateAction<string>>;
    matchStatus: string;
    setMatchStatus: React.Dispatch<React.SetStateAction<string>>;
};

const iGameContextState = {
    userSubmitted: false,
    setUserSubmitted: () => {},
    playerChoice: "rock",
    setPlayerChoice: () => {},
    computerChoice: "",
    setComputerChoice: () => {},
    matchStatus: "",
    setMatchStatus: () => {},
};

export const GameContext = createContext<GameContextType>(iGameContextState);
