import SupermarketImage from "@/Components/Images/supermarket-background.jpg"; // Or use /public/
import { Link } from "@inertiajs/react";

export default function ShopList({className}) {
    return (
        <Link href="/login" className={`rounded-2xl bg-white text-center md:text-sm flex-shrink-0 shadow ${className}`}>
            <img src={SupermarketImage} alt="Supermarket" className="p-2 rounded-2xl mx-auto" />
            <div className="text-blue-600 text-xs ">Fresh Market</div>
            <div className="text-xs pb-2">Grocery Store</div>
        </Link>
    );
}
