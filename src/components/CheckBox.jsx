import './Checkbox.css';


export default function CheckBox({checkboxTerms, onChangeTerms}) {
    return (
        <form className="checkboxTerms">
            <label>
                <input
                    type="checkbox"
                    name="terms"
                    checked={checkboxTerms}
                    onChange={onChangeTerms}
                />
                I accept terms and conditions
            </label>
            <label>
                <input
                    type="checkbox"
                    name="terms"
                    checked={checkboxTerms}
                    onChange={onChangeTerms}
                />
                I have written the rules
            </label>
            <button className="checkbox-button" type="button" disabled={!checkboxTerms}>Proceed</button>
        </form>
    );
}

