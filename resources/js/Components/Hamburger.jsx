import { useAppContext } from "./AppProvider";

export default function Hamburger() {


    const { isOpen, setIsOpen } = useAppContext();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 20 20"
            onClick={toggleMenu}
            className="hover:text-sky-500">
            <path fill="currentColor" fillRule="evenodd" d="M3 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" clipRule="evenodd"></path>
        </svg>
    );

}
