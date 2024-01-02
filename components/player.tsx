"use client";
import { Orbitron, Oxanium } from "next/font/google";
import { useContext, useState } from "react";
import { AppContext } from "./game-board";
const orbitron = Orbitron({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});
const oxanium = Oxanium({ weight: ["400", "500", "600"], subsets: ["latin"] });
export const Player = () => {
    const [playerChoice, setPlayerChoice] = useState("rock");
    const { setUserSubmitted } = useContext(AppContext);
    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 ${oxanium.className}`}
        >
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-lg font-medium">Player Points</p>
                <p
                    className={`text-6xl font-semibold text-[#f96363] ${orbitron.className}`}
                >
                    3
                </p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setUserSubmitted(true);
                    console.log(playerChoice);
                }}
                className="flex flex-col items-center justify-center gap-4"
            >
                <div className="flex items-center justify-center gap-5">
                    <label>
                        <input
                            type="radio"
                            name="playerChoice"
                            value={"rock"}
                            className="hidden peer"
                            required
                            defaultChecked
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
                            onChange={() => setPlayerChoice("scissor")}
                        />
                        <div className="w-[100px] h-[50px] rounded-xl flex items-center justify-center border-2 border-[#feff6e] text-[#feff6e] text-xl peer-checked:bg-[#feff6e] peer-checked:text-[#010101] peer-checked:font-semibold hover:cursor-pointer hover:bg-[#feff6e] hover:text-[#010101] hover:font-semibold">
                            scissor
                        </div>
                    </label>
                </div>

                <button className="w-full py-2 border-2 border-[#00ff9f] text-[#00ff9f] text-xl font-semibold rounded-xl hover:bg-[#00ff9f] hover:text-black transition-colors">
                    Ready Go!
                </button>
            </form>
        </div>
    );
};
