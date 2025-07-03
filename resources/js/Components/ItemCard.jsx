import SupermarketImage from "@/Components/Images/supermarket-background.jpg"; // Or use /public/
import { Link } from "@inertiajs/react";

export default function ItemCard({className}) {
    return (
        <Link href="/login" className={`rounded-2xl bg-white text-center md:text-sm flex-shrink-0 shadow ${className}`}>
            <img src={SupermarketImage} alt="Supermarket" className="p-2 rounded-2xl mx-auto" />
            <div className="text-base font-semibold ">Fresh Market</div>
            <div className="text-xs">Grocery Store</div>
            <div className="text-blue-600 font-semibold pb-2">$ 45</div>
        </Link>
    );
}
