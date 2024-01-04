"use client";
import { chooseComputerChoice, gameLogic } from "@/lib/game";
import { useContext } from "react";
import { oxanium } from "@/lib/font";
import { GameContext } from "@/lib/game-context";
export const Computer = () => {
    const {
        userSubmitted,
        playerChoice,
        computerChoice,
        setComputerChoice,
        setMatchStatus,
    } = useContext(GameContext);

    if (userSubmitted) {
        setTimeout(() => {
            setComputerChoice(chooseComputerChoice);
            setMatchStatus(gameLogic({ computerChoice, playerChoice }));
        }, 700);
    }

    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 ${oxanium.className}`}
        >
            <div className="flex flex-col items-center justify-center gap-2 text-2xl font-semibold">
                Computer
            </div>
            <div className="flex items-center justify-center gap-5 max-[400px]:gap-4">
                <label>
                    <input
                        type="radio"
                        name="playerChoice"
                        value={"rock"}
                        onChange={() => console.log("rock")}
                        className="hidden peer"
                        required
                        checked={computerChoice == "rock"}
                        onClick={() => console.log("rock")}
                    />
                    <div className="w-[100px] h-[50px] rounded-xl flex items-center justify-center border-2 border-[#ea00d9] text-[#ea00d9] text-xl peer-checked:bg-[#ea00d9] peer-checked:text-[#010101] peer-checked:font-semibold hover:cursor-pointer hover:bg-[#ea00d9] hover:text-[#010101] hover:font-semibold">
                        rock
                    </div>
                </label>

                <label>
                    <input
                        type="radio"
                        name="playerChoice"
                        value={"paper"}
                        onChange={() => console.log("paper")}
                        className="hidden peer"
                        checked={computerChoice == "paper"}
                        required
                        onClick={() => console.log("paper")}
                    />
                    <div className="w-[100px] h-[50px] rounded-xl flex items-center justify-center border-2 border-[#0abdc6] text-[#0abdc6] text-xl peer-checked:bg-[#0abdc6] peer-checked:text-[#010101] peer-checked:font-semibold hover:cursor-pointer hover:bg-[#0abdc6] hover:text-[#010101] hover:font-semibold">
                        paper
                    </div>
                </label>

                <label>
                    <input
                        type="radio"
                        name="playerChoice"
                        value={"scissor"}
                        onChange={() => console.log("scissor")}
                        checked={computerChoice == "scissor"}
                        className="hidden peer"
                        required
                        onClick={() => console.log("scissor")}
                    />
                    <div className="w-[100px] h-[50px] rounded-xl flex items-center justify-center border-2 border-[#feff6e] text-[#feff6e] text-xl peer-checked:bg-[#feff6e] peer-checked:text-[#010101] peer-checked:font-semibold hover:cursor-pointer hover:bg-[#feff6e] hover:text-[#010101] hover:font-semibold">
                        scissor
                    </div>
                </label>
            </div>
        </div>
    );
};
