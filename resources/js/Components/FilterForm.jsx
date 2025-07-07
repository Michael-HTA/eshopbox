import Heading from "@/Components/Heading"
import useAppContext from "./Providers/AppProvider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import { Input } from "./ui/input"

const states = ['Yangon', 'Mandalay', 'Bago']

const Select = ({ className = '', ...props }) => {
    return (
        <select {...props} className={className}>
            {states.map(state => (<option key={state}>{state}</option>))}
        </select>
    )
}

const HeadAndInput = ({ label, options = [], selectedValue, onChange }) => {
    return (
        <>
            <Heading className="text-xs py-1">{label}</Heading>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-center text-xs border border-black rounded relative h-6 flex items-center justify-between px-2 w-full">
                    <span>{selectedValue || "Select..."}</span>
                    <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {options.map(option => (
                        <DropdownMenuItem key={option} onClick={() => onChange(option)}>
                            {option}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

const HeadAndNumberInput = ({ label, onChange }) => {
    return (
        <>
            <Heading className="text-xs py-1">{label}</Heading>
            <Input className=" border-black rounded h-6 px-2 w-full" onChange={onChange} placeholder="0"></Input>
        </>
    )
}


const FilterForm = () => {

    const {
        stateOrRegion, setStateOrRegion,
        cityOrTown, setCityOrTown,
        category, setCategory,
        madeIn, setMadeIn,
        maxPrice, setMaxPrice,
        minPrice, setMinPrice,
        searchTerm, setSearchTerm,
        date, setDate,
    } = useAppContext()

    const handleMaxPriceChange = (e) => {
        setMaxPrice(Number(e.target.value));
    }

    const handleMinPriceChange = (e) => {
        setMinPrice(Number(e.target.value));
    }

    return (
        <>
            <HeadAndInput
                label="State/Region"
                options={['Yangon', 'Mandalay', 'Bago']}
                selectedValue={stateOrRegion}
                onChange={setStateOrRegion}
            />

            <HeadAndInput
                label="City/Town"
                options={['Hpa-An', 'Taunggyi', 'Meiktila']}
                selectedValue={cityOrTown}
                onChange={setCityOrTown}
            />

            <HeadAndInput
                label="Category"
                options={['Medicine', 'Supplement', 'Equipment']}
                selectedValue={category}
                onChange={setCategory}
            />

            <HeadAndInput
                label="Made In"
                options={['Myanmar', 'India', 'USA']}
                selectedValue={madeIn}
                onChange={setMadeIn}
            />

            <HeadAndNumberInput
                label="Maximum Price"
                value={maxPrice}
                onChange={handleMaxPriceChange}
            />

            <HeadAndNumberInput
                label="Minimum Price"
                value={minPrice}
                onChange={handleMinPriceChange}
            />
        </>
    )
}


export default FilterForm

