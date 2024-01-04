"use client";
import { Computer } from "@/components/computer";
import { Player } from "@/components/player";
import { orbitron } from "@/lib/font";
import { GameContext } from "@/lib/game-context";
import { useGameBoard } from "@/lib/hooks";
import Link from "next/link";

export const GameBoard = () => {
    const {
        playerChoice,
        setPlayerChoice,
        computerChoice,
        setComputerChoice,
        matchStatus,
        setMatchStatus,
        userSubmitted,
        setUserSubmitted,
        handleRefresh,
    } = useGameBoard();

    return (
        <div className="flex w-full h-full flex-col items-center justify-start gap-16 p-4">
            <Link
                href={"/"}
                className="w-fit text-3xl text-center text-transparent font-bold bg-gradient-to-r from-[#ff008d] to-[#6300ff] bg-clip-text select-none"
            >
                Rock Paper Scissor
            </Link>

            <GameContext.Provider
                value={{
                    userSubmitted,
                    setUserSubmitted,
                    playerChoice,
                    setPlayerChoice,
                    computerChoice,
                    setComputerChoice,
                    matchStatus,
                    setMatchStatus,
                }}
            >
                <div className="flex flex-wrap items-start justify-center gap-20 select-none">
                    <Player />
                    <Computer />
                </div>
            </GameContext.Provider>

            {matchStatus !== "" && (
                <div>
                    <div
                        className={`text-4xl text-center text-[#00aba9] font-bold max-[465px]:text-3xl max-[397px]:text-2xl ${orbitron.className}`}
                    >
                        {matchStatus}
                    </div>
                    <button
                        className="underline underline-offset-4 text-lg text-[#f58b57] text-center w-full mt-5"
                        onClick={handleRefresh}
                    >
                        Restart
                    </button>
                </div>
            )}
        </div>
    );
};
