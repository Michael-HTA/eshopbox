import supermarketIamge from "./Images/supermarket-background.jpg"
export default function MainImage({children}){
    return(
        <div className="mt-4 relative">
            <img src={supermarketIamge} className="w-full h-40 md:h-80 object-cover" ></img>
            {children}
        </div>
    )
}