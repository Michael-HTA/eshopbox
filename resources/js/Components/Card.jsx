import { MapPinIcon, StarIcon, UsersIcon } from "@heroicons/react/16/solid";
import { Link } from "@inertiajs/react";
import SupermarketImage from "@/Components/Images/supermarket-background.jpg"


const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
        <StarIcon
            key={i}
            className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
    ));
};

export default function Card() {
    return (
        <Link key="1" to={`/login`}>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer overflow-hidden">
                <div className="relative">
                <img
                    src={SupermarketImage}
                    alt="fish"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {true && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Verified
                    </div>
                )}
                {/* <div className="absolute bottom-4 left-4">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3">
                        <Store className="h-6 w-6 text-blue-600" />
                    </div>
                </div> */}
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        Fresh Market
                    </h3>
                </div>

                <p className="text-sm text-blue-600 font-medium mb-2">Grocery Store</p>
                <p className="text-gray-600 mb-4 line-clamp-2">Fresh organic produce and daily essentials</p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPinIcon className="h-4 w-4 -ml-0.5 mr-1" />
                    <span>Downtown</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            {renderStars(2.0)}
                            <span className="ml-2 text-sm font-medium text-gray-900">2.0</span>
                        </div>
                        <span className="text-sm text-gray-500">({100})</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                        <UsersIcon className="h-4 w-4 mr-1"></UsersIcon>
                        <span>1250 products</span>
                    </div>
                </div>
            </div>
        </div>
        </Link >
    )
}