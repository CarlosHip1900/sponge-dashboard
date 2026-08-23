import React from "react";


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "warning" | "error";
}

export default function Card({ children, className = "", variant = "default", ... props }: CardProps){
    const baseStyles = "bg-linear-to-bl from-black via-[#131313] to-black rounded-2xl p-5";

    const borderStyles = {
        default: "border border-neutral-700",
        warning: "border border-yellow-500/40",
    };

    // @ts-ignore
    const combinedClasses = `${baseStyles} ${borderStyles[variant]} ${className}`;

    return (
        <div className={combinedClasses} {...props}>
            {children}
        </div>
    );
}