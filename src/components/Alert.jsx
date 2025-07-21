import '../css/Alert.css'


// const getBackgroundColor = (variant) => {
//     switch (variant) {
//         case "info":
//             return "bleu";
//         case "error":
//             return "red";
//         case "success":
//             return "green";
//         case "warning":
//             return "orange";
//         default:
//             throw new Error(`Unsupported variant prop value - ${variant}`
//         );
//     }
// }


export const Alert = ({ variant, outlined, elevated, children }) => {
    // const classNames = ["alert", `alert-${variant}`];
     const classNames = ["alert", variant];

    if (outlined) {
        classNames.push("is-outlined");
    }

    if (elevated) {
        classNames.push("is-elevated");
    }

    return (
        // <p className="alertStyles">{children}</p>   1
        // <p className={`alertStyles alert-${variant}`}> {children}</p >   2
        <p className={classNames.join(" ")}> {children}</p >   

    );
}



// const Alert = ({ variant, children }) => {
//   const classNames = ["alert", variant];

//   return <p className={classNames.join(" ")}>{children}</p>;
// };
