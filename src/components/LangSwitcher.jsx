import { useId } from "react"


export const LangSwitcher = ({value, onSelect}) => {
    
    const selectId = useId();

    return (
        <div className="lang-switcher" >
            <label htmlFor={selectId}>Choose language.. </label>
            <select
                id={selectId}
                value={value}
                onChange={(evt) => {
                    onSelect(evt.target.value);
                }}
            >
                <option value="en">English</option>
                <option value="uk">Ukrainian</option>
                <option value="fr">French</option>
            </select>
        </div>
    )
}

