import { Orbitron, Oxanium, Poppins } from "next/font/google";

export const oxanium = Oxanium({
    weight: ["400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const orbitron = Orbitron({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});
