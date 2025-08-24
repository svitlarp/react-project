
export default function Button({onSmash, buttonMessage}) {
    

    return (
        <>
            <button onClick={onSmash}>I don't do anything { buttonMessage}</button>
        </>
    )   
}