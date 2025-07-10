// export default function Product() {
//     return (
//         <div>
//             <h2>Cookies</h2>
//             <p>Price: 999 credits</p>
//         </div>
//     );
// };


export default function Product(props) {

    const price = 999;

    return (
        <div>
            <h2>{props.name}</h2>
            <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640" alt={props.name} width="640" />
            <p>Price: {props.price} credits</p>
        </div>
    );
};
