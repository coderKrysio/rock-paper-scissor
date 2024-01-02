"use client";
import { computerChoice } from "@/lib/bot";
import { Orbitron, Oxanium } from "next/font/google";
import { useContext, useState } from "react";
import { AppContext } from "./game-board";
const orbitron = Orbitron({
    weight: ["400", "500", "600"],
    subsets: ["latin"],
});
const oxanium = Oxanium({ weight: ["400", "500", "600"], subsets: ["latin"] });
export const Computer = () => {
    const { userSubmitted } = useContext(AppContext);
    const [cmpChoice, setComputerChoice] = useState("");
    const [timer, setTimer]= useState(3)
    if (userSubmitted) {
        // while (timer>0) setTimeout(()=>setTimer(prev=>prev-1),1000)
        setTimeout(() => setComputerChoice(computerChoice), 3000);
    }

    console.log(cmpChoice);

    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 ${oxanium.className}`}
        >
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-lg font-medium">
                    Computer Points {timer}
                </p>
                <p
                    className={`text-6xl font-semibold text-[#f96363] ${orbitron.className}`}
                >
                    3
                </p>
            </div>
            <div className="flex items-center justify-center gap-5">
                <label>
                    <input
                        type="radio"
                        name="playerChoice"
                        value={"rock"}
                        onChange={() => console.log("rock")}
                        className="hidden peer"
                        required
                        checked={cmpChoice == "rock"}
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
                        checked={cmpChoice == "paper"}
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
                        checked={cmpChoice == "scissor"}
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
