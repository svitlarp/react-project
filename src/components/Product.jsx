// JSX is stricter than HTML. 
// The EXPORT DEFAULT keywords specify the main component in the file
// import PropTypes from 'prop-types';

// export default function Product({
//     name,
//     imgUrl="https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
//     price }) {
    
//     return (
//         <div>
//             <h2>{name}</h2>
//             <img src={imgUrl} alt={name} width="320" />
//             <p>
//                 {price > 100 ? "Price is more then usual" : `Price is: ${price}`}
//             </p>
//         </div>
//     )
// } 


// Product.propTypes = {
//     name: PropTypes.string,
//     imgUrl: PropTypes.string,
//     price: PropTypes.number.isRequired,
// }
// _______________
// {price > 100 ? (<p>Price is more then usual</p>) : (<p>Price is: {price}</p>)}
// {price > 100 && (
//     <p>Price is more then usual</p>
// )}