import { useId } from "react"

function SelectedMenu() {
    const selectId = useId();

    return (
        <>
            <label htmlFor={selectId}>Select size</label>
            <select className="select-menu">
                <option value="">XL - Tres large</option>
                <option value="">L - Large</option>
                <option value="">M - Medium</option>
                <option value="">S - Small</option>
            </select>
        </>
        
    )
}


export default SelectedMenu;