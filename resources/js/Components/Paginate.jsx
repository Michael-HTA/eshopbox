import { Link } from "@inertiajs/react";
const links = [
    {
        link:"/home",
        label:"1",
        active: false
    },
    {
        link:"/home",
        label:"2",
        active: true
    },
    {
        link:"/home",
        label:"3",
        active: false
    },
    {
        link:"/home",
        label:"4",
        active: false
    },
    {
        link:"/home",
        label:"5",
        active: false
    },
]

export default function Paginate() {
    return (
        <div className="flex justify-center p-4 space-x-2">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url ?? "#"}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`
                        px-3 py-1 border text-sm rounded-md
                        ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}
                        ${!link.url ? 'pointer-events-none opacity-50' : 'hover:bg-gray-100'}
                    `}
                />
            ))}
        </div>
    )
}