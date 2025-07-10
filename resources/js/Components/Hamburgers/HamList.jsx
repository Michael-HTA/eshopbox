import { useEffect, useRef, useState } from "react";
import { useNavContext } from "../Providers/NavProvider";
import { Link } from "@inertiajs/react";
import MenuLinkList from "../MenuLinkList";

export default function HamList() {

    // Getting shared data
    const { isOpen, setIsOpen } = useNavContext();

    // Setting height of nav tag
    const [maxHeight, setMaxHeight] = useState('0px');

    // To control the height of the nav tag
    const navRef = useRef(null);

    // Getting current width of page
    // This can cause problem if inertia try to run in server like Next.js SSR
    const [width, setWidth] = useState(0);

    // For getting current width of the page when there is a resizing
    useEffect(() => {

        //Getting the width only in the client side
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    // Closing the hamburger menu list when user click outside the box
    useEffect(() => {

        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
                // console.log('click')
            }
        }

        window.addEventListener('mousedown', handleClickOutside);

        return () => window.removeEventListener('mousedown', handleClickOutside)
    }, []);

    // For nav list apperance
    useEffect(() => {
        if (isOpen && navRef.current) {
            setMaxHeight(navRef.current.scrollHeight + 'px');
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);

    // Closing toggle when screen size is larger than 768
    useEffect(() => {
        if (width >= 768 && isOpen) {
            setIsOpen(false); // Only if setIsOpen is available
        }
    }, [width]);

    return (
        <>
            <nav ref={navRef} className={`md:hidden text-center rounded-lg text-white mt-1 p-1  bg-slate-800 transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex flex-col`} style={{ maxHeight: isOpen ? '600px' : '0px' }}>
                <ul className="flex flex-col space-y-3">
                    {MenuLinkList.map((list, id) => {

                        // const background = id % 2 === 0 ? "bg-red-500" : "bg-blue-200"
                        return (
                            <li key={id}>
                                <Link href='#' >{list.name}</Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            </nav>
        </>
    )
}
