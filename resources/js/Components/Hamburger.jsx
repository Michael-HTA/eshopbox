import { useAppContext } from "./AppProvider";

export default function Hamburger() {


    const { isOpen, setIsOpen } = useAppContext();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            onClick={toggleMenu}
            className="hover:text-sky-500">
            <path fill="currentColor" d="M3 5V4h17v1zm0 4V8h17v1zm0 4v-1h17v1zm0 4v-1h17v1zm0 4v-1h17v1z">
            </path>
            </svg>
        </>
    );

}
