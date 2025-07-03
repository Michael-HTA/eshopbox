import { Link } from "@inertiajs/react";

export default function TextBoxTwo({children}) {
    return (
        <div className="md:text-xl text-base mx-auto bg-[#f3f4f6] p-3 rounded-2xl text-gray-600 grid grid-cols-1 sm:grid-cols-2 items-center text-center">
            <p className="">
                Join our growing community of shop owners who are making online selling easier and faster. No need to build a separate website just create your account and showcase your products in a clean, scroll-free interface that customers love.
            </p>
            <Link href="/login" className="border-2 rounded-full border-black w-auto text-base mx-auto p-2 mt-2 md:mt-0 bg-gradient-to-r from-[#a6a6a6] to-[#ffffff}">
                Create Your Free Shop Now
            </Link>
        </div>
    )
}
