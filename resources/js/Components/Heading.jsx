export default function Heading({children, className = "", ...props}){
    return(
        <>
            <h1  {...props} className={`font-semibold ${className}`}>{children}</h1>
        </>
    )
}