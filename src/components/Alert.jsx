import '../css/Alert.css'


const getBackgroundColor = (variant) => {
    switch (variant) {
        case "info":
            return "bleu";
        case "error":
            return "red";
        case "success":
            return "green";
        case "warning":
            return "orange";
        default:
            throw new Error(`Unsupported variant prop value - ${variant}`
        );
    }
}


export const Alert = ({ variant, children }) => {
    return (
        // <p className="alertStyles">{children}</p>
        <p className={`alertStyles alert-${variant}`}> {children}</p >
    );
}

