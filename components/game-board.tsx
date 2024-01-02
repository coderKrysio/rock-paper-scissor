"use client";
import { Computer } from "@/components/computer";
import { Player } from "@/components/player";
import { createContext, useState } from "react";

type AppContextType = {
    userSubmitted: boolean;
    setUserSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const iAppContextState = {
    userSubmitted: false,
    setUserSubmitted: () => {},
};

export const AppContext = createContext<AppContextType>(iAppContextState);

export const GameBoard = () => {
    const [userSubmitted, setUserSubmitted] = useState(false);

    return (
        <div className="flex w-full min-h-screen flex-col items-center justify-start p-4">
            <div className="w-fit text-5xl text-center text-transparent font-bold mb-16 bg-gradient-to-r from-[#cc11f0] via-[#ff008d] to-[#6300ff] bg-clip-text select-none">
                Rock Paper Scissor
            </div>

            <AppContext.Provider value={{ userSubmitted, setUserSubmitted }}>
                <div className="flex items-start justify-center gap-20 select-none">
                    <Player />
                    <Computer />
                </div>
            </AppContext.Provider>
        </div>
    );
};
