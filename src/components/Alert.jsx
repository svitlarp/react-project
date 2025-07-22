import clsx from "clsx";
import '../css/Alert.css';
import { DiCodeBadge } from "react-icons/di";


export const Alert = ({ variant, outlined, elevated, children }) => {
    return (
        <>
        <DiCodeBadge />
        <p className={clsx(
            "alert",
            variant,
            outlined && "is-outlined",
            elevated && "is-elevated"
            )}>{children}</p>
        </>
    )
}


// ________________________________________________________
// export const Alert = ({ variant, outlined, elevated, children }) => {
//      const classNames = ["alert", variant];

//     if (outlined) {
//         classNames.push("is-outlined");
//     }

//     if (elevated) {
//         classNames.push("is-elevated");
//     }

//     return (
//         // <p className="alertStyles">{children}</p>   1
//         // <p className={`alertStyles alert-${variant}`}> {children}</p >   2
//         <p className={classNames.join(" ")}> {children}</p >   

//     );
// }


// ________________________________________________________
// const Alert = ({ variant, children }) => {
//   const classNames = ["alert", variant];

//   return <p className={classNames.join(" ")}>{children}</p>;
// };
