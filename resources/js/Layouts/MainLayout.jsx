import { AppProvider } from "@/Components/AppProvider";
import Button from "../Components/Buttons/Button";
import SignUpButton from "../Components/Buttons/SignUpButton";
import Logo from "../Components/Logo/Logo";
import HamList from "@/Components/HamList";
import Hamburger from "@/Components/Hamburger";

export default function MainLayout() {
    return (
        <AppProvider>
            <div className="flex justify-between mx-4 my-2">
                <Logo></Logo>
                <div className="gap-x-3 hidden md:flex">
                    <Button></Button>
                    <SignUpButton></SignUpButton>
                </div>
                <div className="md:hidden">
                    <Hamburger></Hamburger>
                </div>
            </div>
            <div className="mx-4 my-2">
                <HamList></HamList>
            </div>
        </AppProvider>
    )
}
