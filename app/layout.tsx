import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/font";

export const metadata: Metadata = {
    title: "Rock Paper Scissor",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
