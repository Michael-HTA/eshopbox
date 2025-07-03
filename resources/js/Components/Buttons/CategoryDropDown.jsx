import { useEffect, useRef, useState } from 'react';
import MenuLinkList from '@/Components/MenuLinkList';
import {
    ChevronDownIcon
} from '@heroicons/react/16/solid'

export default function CategoryDropDown() {
    const [categoryValue, setCategoryValue] = useState("Category");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleCategoryClick = () => {
        setIsOpen(!isOpen);
    }
    const handleCategoryListClick = (data) => {
        setCategoryValue(data);
        setIsOpen(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <div className="flex" ref={dropdownRef}>
            <input
                className="px-6 py-1 rounded-l-lg border-0 text-center focus:ring-0 focus:outline-none border-r-2 border-gray-500 focus:border-gray-500 w-auto md:w-96"
                placeholder="Search"
            />
            <div className='md:flex flex-col w-36 relative hidden'>
                <button className="bg-white rounded-r-lg py-1" type="button" onClick={handleCategoryClick}>
                    {categoryValue}
                <ChevronDownIcon className="h-5 w-5 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"></ChevronDownIcon>
                </button>
                <ul className={`${isOpen ? "block" : "hidden"} mt-3 absolute top-8 bg-white w-full overflow-y-auto h-40 rounded-md`}>

                    {MenuLinkList.map((item, key) => {
                        return (
                            <li key={key} onClick={() => handleCategoryListClick(item.name)}>
                                <button
                                    type="button"
                                    onClick={() => handleCategoryListClick(item.name)}
                                    className="w-full p-2 text-center cursor-pointer hover:bg-gray-100 active:bg-gray-200 rounded transition-colors duration-150"
                                >
                                    {item.name}
                                </button>
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    );
}