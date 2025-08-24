
export default function RadioButton({size, onSizeChange }) {
    
    return (
        <>
            <form className="radio-button">
                <label>Large
                    <input
                        type="radio"
                        name="size"
                        value="L"
                        // checked={coffeeSize === "L"}
                        onChange = {onSizeChange}
                    />
                </label>
                <label>Medium
                    <input
                        type="radio"
                        name="size"
                        value="M"
                        // checked={coffeeSize === "M"}
                        onChange = {onSizeChange}
                    />
                </label>
                <label>Smal
                    <input
                        type="radio"
                        name="size"
                        value="S"
                        // checked={coffeeSize === "S"}
                        onChange = {onSizeChange}
                        defaultChecked />
                </label>
                <p>Selected size: { size}</p>
            </form>
        </>
    )
}