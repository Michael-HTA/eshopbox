import { AppProvider } from "@/Components/AppProvider";
import Button from "../Components/Buttons/Button";
import SignUpButton from "../Components/Buttons/SignUpButton";
import Logo from "../Components/Logo/Logo";
import HamList from "@/Components/HamList";
import Hamburger from "@/Components/Hamburger";
import { Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function MainLayout() {
    return (
        <AppProvider>
            <Head title="Home"></Head>
            <div className="flex justify-between items-center">
                <Logo></Logo>
                <div className="gap-x-3 hidden md:flex">
                    <Button></Button>
                    <SignUpButton></SignUpButton>
                </div>
                <div className="md:hidden">
                    <Hamburger></Hamburger>
                </div>
            </div>
                <hr className="h-[2px] bg-black" />
                <HamList></HamList>
                <NavLink></NavLink>
        </AppProvider>
    )
}
