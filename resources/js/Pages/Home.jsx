import Serach from "@/Components/Buttons/Search";
import CategoryDropDown from "@/Components/Buttons/CategoryDropDown";
import MainImage from "@/Components/MainImage";
import MainLayout from "@/Layouts/MainLayout";
import Heading from "@/Components/Heading";
import Copyright from "@/Components/CopyRight";
import TextBox from "@/Components/TextBox";
import SeeAll from "@/Components/SeeAll";
import TextBoxTwo from "@/Components/TextBoxTwo";
import ShopCard from "@/Components/ShopCard";
import ShopCarousel from "@/Components/ShopCarousel";
import ItemCard from "@/Components/ItemCard";

const headingOne = "Buy & Sell With Us!";
const textOne = "Our mission is to streamline the online shopping experience by bridging the gap between social media and modern e-commerce. We enable online shop owners to create storefronts that retain the familiar structure of social platforms, while offering the clarity and organization of a dedicated shopping interface. With our platform, customers can easily browse and explore products without unnecessary scrolling. Sellers no longer need to build separate websites, allowing them to focus on presenting their products effectively and connecting with their audience. We are committed to enhancing accessibility, efficiency, and user experience in the evolving landscape of digital commerce."

const headingTwo = "Shops";
const headingThree = "Trending Items"
const headingFour = "Start Selling With Us!"

export default function Home() {
    return (
        <div className="mx-4">
            <MainLayout></MainLayout>
            <MainImage>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                    <CategoryDropDown></CategoryDropDown>
                    <div className="md:ml-8 flex">
                        <Serach></Serach>
                    </div>
                </div>
            </MainImage>
            <Heading className="text-center py-5">{headingOne}</Heading>
            <TextBox>{textOne}</TextBox>
            <div className="flex justify-between">
                <Heading className="py-5">{headingTwo}</Heading>
                <SeeAll href="/login"></SeeAll>
            </div>
            <ShopCarousel></ShopCarousel>
            <div className="flex justify-between">
                <Heading className="py-5">{headingThree}</Heading>
                <SeeAll href="/login"></SeeAll>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-5 gap-3">
                {Array.from({ length: 10 }).map((_, index) => (
                    <ItemCard className="transition-all ease-in-out duration-300 md:hover:scale-110" key={index} />
                ))}
            </div>
            <Heading className="py-5">{headingFour}</Heading>
            <TextBoxTwo></TextBoxTwo>
            <Copyright></Copyright>
        </div>
    )
}

