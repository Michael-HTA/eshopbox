import { Link } from '@inertiajs/react';
import MenuLinkList from './MenuLinkList';

export default function NavLink(){
    return(
        <div className='flex justify-around'>
           {
             MenuLinkList.map((link,key) => {
                return(<Link href="/test" key={key} className='hover:text-blue-500 hidden md:block text-sm'>{link.name}</Link>)
            })
           }
        </div>
    )
}
