import {Montserrat} from 'next/font/google';
import "./css/globals.css";

import Header_component from "@/app/component/header_component";

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html
            lang="pt-BR"
            className={montserrat.className}
        >
            <body className="min-h-screen bg-[#080808] text-white ">
                <Header_component/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}

