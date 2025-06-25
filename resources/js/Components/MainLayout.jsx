import Button from "./Buttons/Button";
import SignUpButton from "./Buttons/SignUpButton";
import Logo from "./Logo/Logo";

export default function MainLayout() {
    return (
        <div className="flex justify-between mx-4 my-2">
            <Logo></Logo>
            <div className="flex gap-4">
                <Button></Button>
                <SignUpButton></SignUpButton>
            </div>
        </div>
    )
}