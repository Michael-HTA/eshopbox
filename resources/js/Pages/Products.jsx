import Filter from "@/Components/Buttons/Filter";
import FilterForm from "@/Components/FilterForm";
import ItemCard from "@/Components/ItemCard";
import Paginate from "@/Components/Paginate";
import { AppProvider } from "@/Components/Providers/AppProvider";
import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react";


function Products({ auth, category }) {
    return (
        <>
            <Head title="Products"></Head>
            <div className="flex flex-col min-h-screen">
                <div className="md:h-[5rem]">
                    <MainLayout auth={auth}></MainLayout>
                </div>
                <AppProvider>
                    <div className="grid grid-cols-12 mx-4 ">
                        <div className="col-span-2 text-black hidden sm:flex md:h-[calc(100vh-5rem)]">
                            <div className="flex flex-col w-[90%]">
                                <FilterForm></FilterForm>
                                <Filter className="px-2 py-1 text-sm self-end mt-4"></Filter>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-10 overflow-auto md:h-[calc(100vh-5rem)]">
                            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-2">
                                {Array.from({ length: 48 }, (_, i) => (
                                    <ItemCard key={i}></ItemCard>
                                ))}
                            </div>
                            <Paginate></Paginate>
                        </div>
                    </div>
                </AppProvider>
            </div>
        </>
    )
}

// Products.layout = page => <MainLayout>{page}</MainLayout>

export default Products;