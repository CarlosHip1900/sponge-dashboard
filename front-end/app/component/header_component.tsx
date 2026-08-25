import NavBar from "@/app/module/nav_bar";

export default function HeaderComponent() {
    return (
        <header className="pt-5">
            <div className="max-w-[1650px] mx-auto flex justify-center">
                <NavBar/>
            </div>
        </header>
    )
}