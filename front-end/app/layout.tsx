import {Montserrat} from 'next/font/google';

import "./css/globals.css";

import HeaderComponent from "@/app/component/header_component";
import Script from "next/script";

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
            {
                <Script
                    src="https://kit.fontawesome.com/c3423ba623.js"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            }
                <HeaderComponent/>
                <main className="pt-12">
                    <div className="max-w-[1650px] mx-auto px-4 space-y-8">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}

