import { useEffect, useRef, useState } from "react";
import { useAppContext } from "./AppProvider";
import { Link } from "@inertiajs/react";

export default function HamList() {

    // Getting shared data
    const { isOpen, setIsOpen } = useAppContext();

    // Setting height of nav tag
    const [maxHeight, setMaxHeight] = useState('0px');

    // To control the height of the nav tag
    const navRef = useRef(null);

    // Getting current width of page
    const [width, setWidth] = useState(window.innerWidth);

    // Nav link list
    const list = [
        'Login',
        'SignUp',
        'Products',
        'Shop List',
        'About',
        'Contact',
    ];

    // For getting current widht of the page when there is a resizing
    useEffect(() => {

        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    // For nav list apperance
    useEffect(() => {
        if (isOpen && navRef.current) {
            setMaxHeight(navRef.current.scrollHeight + 'px');
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);

    useEffect(() => {
        if (width >= 768 && isOpen) {
            setIsOpen(false); // Only if setIsOpen is available
        }
    },[width]);

    return (
        <>
            <nav ref={navRef} className={`text-center transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex flex-col`} style={{ maxHeight: maxHeight }}>
                {list.map((list, id) => <Link href='#' key={id}>{list}</Link>)}
            </nav>
        </>
    )
}
