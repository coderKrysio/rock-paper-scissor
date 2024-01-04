import { GameBoard } from "@/components/game-board";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-4 overflow-hidden">
            <GameBoard />
            <footer className="fixed bottom-0 w-screen text-[#97999b] font-medium flex flex-col items-center justify-center p-4 select-none text-center">
                <p>Made with ❤️ by coderKrysio</p>
                <span>© All rights reserved</span>
            </footer>
        </main>
    );
}
