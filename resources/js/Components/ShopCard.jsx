import SupermarketImage from "@/Components/Images/supermarket-background.jpg"; // Or use /public/
import { Link } from "@inertiajs/react";

export default function ShopCard({className}) {
    return (
        <Link href="/login" className={`rounded-md overflow-hidden bg-white text-center md:text-sm flex-shrink-0 shadow ${className}`}>
            <img src={SupermarketImage} alt="Supermarket" className="mb-2" />
            <div className="text-blue-600 text-sm md:text-base font-semibold">Fresh Market</div>
            <div className="text-xs mb-2">Grocery Store</div>
        </Link>
    );
}
