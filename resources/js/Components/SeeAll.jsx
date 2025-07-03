import { Link } from "@inertiajs/react";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function SeeAll({href}){
    return(
            <Link href={href} className="text-blue-600 flex items-center">
                <span>See All</span>
                <ArrowRightIcon className="w-4 h-4 ml-1"></ArrowRightIcon>
            </Link>
    )
}