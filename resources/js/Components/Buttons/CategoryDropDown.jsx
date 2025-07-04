import { useEffect, useRef, useState } from 'react';
import MenuLinkList from '@/Components/MenuLinkList';
import { ChevronDownIcon, XCircleIcon } from '@heroicons/react/16/solid'
import { router } from '@inertiajs/react';

export default function CategoryDropDown() {
    const [categoryValue, setCategoryValue] = useState("Category");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("");

    //Setting search bar data
    const handleSearchOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    //Closing category box
    const handleCategoryClick = () => {
        setIsOpen(!isOpen);
    }

    //Setting category type
    const handleCategoryListClick = (data) => {
        setCategoryValue(data);
        setIsOpen(false);
    }

    //Clearing search data in bar
    const handleClearSearch = () => {
        setSearchTerm("");
    };

    // Submitting search route
    const handleSearch = () => {
        const query = searchTerm.trim();

        if (query !== '') {
            router.get("/search", {
                category: categoryValue,
                query: query,
            })
        }
    }

    // Closing the category box when user click anywhere on the page
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
        <div className="flex w-full justify-center" ref={dropdownRef}>
            <div className='w-[65%] sm:w-96 relative'>

                {/* Input bar */}
                <input onChange={handleSearchOnChange} value={searchTerm} onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="py-1 rounded-l-lg border-0 text-center focus:ring-0 focus:outline-none border-r-2 border-gray-500 focus:border-gray-500 w-full"
                    placeholder="Search"
                />

                {/* Search clear button */}
                {searchTerm && (
                    <XCircleIcon
                        onClick={handleClearSearch}
                        className="w-5 h-5 text-gray-500 absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer hover:text-gray-700 transition"
                    />
                )}
            </div>
            <div className='md:flex flex-col w-36 relative hidden'>

                {/* Category button */}
                <button className="bg-white rounded-r-lg py-1" type="button" onClick={handleCategoryClick}>
                    {categoryValue}
                    <ChevronDownIcon className="h-5 w-5 absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"></ChevronDownIcon>
                </button>

                {/* Catergory list */}
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

            {/* Search button */}
            <button onClick={handleSearch} className="md:ml-3 rounded-r-lg md:rounded-full px-6 py-1 bg-white text-center" type='button'>Search</button>

        </div>
    );
}