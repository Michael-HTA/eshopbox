import { useRef, useState, useEffect } from "react";
import ShopList from "./ShopList";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ShopCarousel() {
    const scrollRef = useRef(null);
    const [scrollLeftValue, setScrollLeftValue] = useState(0);
    const [scrollAmount, setScrollAmount] = useState(400); // default for desktop

    // ✅ Adjust scroll amount based on screen size
    useEffect(() => {
        const updateScrollAmount = () => {
            // Only work in inertia
            const width = window.innerWidth;
            if (width <= 640) {
                setScrollAmount(240); // smaller scroll for mobile
            } else if (width <= 1024) {
                setScrollAmount(320); // tablet
            } else {
                setScrollAmount(400); // desktop
            }
        };

        updateScrollAmount(); // initial set
        window.addEventListener("resize", updateScrollAmount);

        return () => window.removeEventListener("resize", updateScrollAmount);
    }, []);

    // ✅ Track scroll position
    const handleScroll = () => {
        if (scrollRef.current) {
            setScrollLeftValue(scrollRef.current.scrollLeft);
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full">
            {/* Buttons */}
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
            >
                <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto gap-4 scrollbar-hide px-10 scroll-smooth"
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <ShopList className="w-24 md:w-56" key={index} />
                ))}
            </div>

            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full"
            >
                <ChevronRightIcon className="w-5 h-5" />
            </button>

            {/* Debug or tracking output */}
            {/* <div className="text-xs text-gray-500 text-center mt-2">
                Current scroll position: {scrollLeftValue}px
            </div> */}
        </div>
    );
}
