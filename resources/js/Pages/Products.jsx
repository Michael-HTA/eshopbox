import Filter from "@/Components/Buttons/Filter";
import FilterForm from "@/Components/FilterForm";
import ItemCard from "@/Components/ItemCard";
import { AppProvider } from "@/Components/Providers/AppProvider";
import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react";

function Products({ query, category }) {
    return (
        <>
            <Head title="Products"></Head>
            <MainLayout></MainLayout>
            <AppProvider>
                <div className="mx-4">
                    <div className="flex-1 grid grid-cols-12">
                        <div className="col-span-2 text-black hidden sm:flex">
                            <div className="flex flex-col w-[90%]">
                                <FilterForm></FilterForm>
                                <Filter className="px-2 py-1 text-sm self-end mt-4"></Filter>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-10">
                            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-2">
                                {Array.from({ length: 24 }, (_, i) => (
                                    <ItemCard></ItemCard>
                                ))}
                            </div>
                            <div className="text-center w-full bg-green-200 p-2">1 2 3</div>
                        </div>
                    </div>
                </div>
            </AppProvider>
        </>
    )
}

// Products.layout = page => <MainLayout>{page}</MainLayout>

export default Products;