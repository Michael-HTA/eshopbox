export default function Heading({children, className = ""}){
    return(
        <>
            <h1 className={`text-2xl font-semibold ${className}`}>{children}</h1>
        </>
    )
}