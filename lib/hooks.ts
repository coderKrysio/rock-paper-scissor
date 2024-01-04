import { useState } from "react";

export const useGameBoard = () => {
    const handleRefresh = () => {
        location.reload();
    };
    const [playerChoice, setPlayerChoice] = useState("rock");
    const [computerChoice, setComputerChoice] = useState("");
    const [matchStatus, setMatchStatus] = useState("");
    const [userSubmitted, setUserSubmitted] = useState(false);

    return {
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
        matchStatus,
        setMatchStatus,
        userSubmitted,
        setUserSubmitted,
        handleRefresh,
    };
};
