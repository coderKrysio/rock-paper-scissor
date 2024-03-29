"use client";
import { useContext } from "react";
import { oxanium } from "@/lib/font";
import { GameContext } from "@/lib/game-context";
export const Player = () => {
    const { userSubmitted, setUserSubmitted, setPlayerChoice, matchStatus } =
        useContext(GameContext);
    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 ${oxanium.className}`}
        >
            <div className="flex flex-col items-center justify-center gap-2 text-2xl font-semibold">
                Player
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setUserSubmitted(true);
                }}
                className="flex flex-col items-center justify-center gap-4"
            >
                <div className="flex items-center justify-center gap-5 max-[400px]:gap-4">
                    <label>
                        <input
                            type="radio"
                            name="playerChoice"
                            value={"rock"}
                            className="hidden peer"
                            required
                            defaultChecked
                            disabled={userSubmitted}
                            onChange={() => setPlayerChoice("rock")}
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
                            className="hidden peer"
                            required
                            disabled={userSubmitted}
                            onChange={() => setPlayerChoice("paper")}
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
                            className="hidden peer"
                            required
                            disabled={userSubmitted}
                            onChange={() => setPlayerChoice("scissor")}
                        />
                        <div className="w-[100px] h-[50px] rounded-xl flex items-center justify-center border-2 border-[#feff6e] text-[#feff6e] text-xl peer-checked:bg-[#feff6e] peer-checked:text-[#010101] peer-checked:font-semibold hover:cursor-pointer hover:bg-[#feff6e] hover:text-[#010101] hover:font-semibold">
                            scissor
                        </div>
                    </label>
                </div>

                {matchStatus === "" && (
                    <button className="w-full py-2 border-2 border-[#00ff9f] text-[#00ff9f] text-xl font-semibold rounded-xl hover:bg-[#00ff9f] hover:text-black transition-colors">
                        Ready Go!
                    </button>
                )}
            </form>
        </div>
    );
};
