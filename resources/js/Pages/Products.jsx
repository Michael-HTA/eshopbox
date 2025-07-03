import MainLayout from "@/Layouts/MainLayout"
import { Head } from "@inertiajs/react";

function Products() {
    return (
        <>
            <Head title="Products"></Head>
            <div>Hello from the product page</div>
        </>
    )
}

Products.layout = page => <MainLayout>{page}</MainLayout>

export default Products;