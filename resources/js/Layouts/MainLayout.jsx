import { NavProvider } from "@/Components/Providers/NavProvider";
import Button from "../Components/Buttons/Button";
import SignUpButton from "../Components/Buttons/SignUpButton";
import Logo from "../Components/Logo/Logo";
import HamList from "@/Components/Hamburgers/HamList";
import Hamburger from "@/Components/Hamburgers/Hamburger";
import NavLink from "@/Components/NavLink";


export default function MainLayout({ children }) {
    return (
        <>
        <NavProvider>
            <div className="mx-4">
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
                <hr className="h-[2px] bg-black shrink-0" />
                <HamList></HamList>
                <NavLink></NavLink>
            </div>
        </NavProvider>
        {/* <main className="flex-1 flex flex-col">{children}</main> */}
        </>
    )
}
