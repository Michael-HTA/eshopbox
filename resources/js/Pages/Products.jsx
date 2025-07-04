import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react";

function Products({query, category}) {
    return (
        <>
            <Head title="Products"></Head>
            <div>Hello from the product page</div>
            <div>{query}</div>
            <div>{category}</div>
        </>
    )
}

Products.layout = page => <MainLayout>{page}</MainLayout>

export default Products;