export default function Filter({className = '', ...props}) {
    return (
        <button {...props} className={`${className} rounded bg-blue-600 text-white`} type="button">Filter</button>
    )
}