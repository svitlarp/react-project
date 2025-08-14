import { useState } from "react";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    function handleChange(evt) {
        setInputValue(evt.target.value);
    }
    

    return (
        <div>
            <input type="text" name="search-bar" onChange={handleChange} />
            <p>{ inputValue}</p>
        </div>
    );
}

export default SearchBar;