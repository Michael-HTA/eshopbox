import { Link } from '@inertiajs/react';
import MenuLinkList from './MenuLinkList';

export default function NavLink(){
    return(
        <nav className='flex justify-around'>
           {
             MenuLinkList.map((link,key) => {

                

                return(<Link href="/products" key={key} className='hover:text-blue-500 hidden md:block text-sm'>{link.name}</Link>)
            })
           }
        </nav>
    )
}
