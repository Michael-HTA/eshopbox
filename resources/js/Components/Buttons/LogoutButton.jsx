import { Link } from "@inertiajs/react";

export default function LogoutButton(){
    return(
        <>
            <Link href={route('logout')} method="post" className="rounded-md px-6 py-1 border-black border-[1px]" as="button">Logout</Link>
        </>
    )
}