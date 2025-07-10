// export default function Product() {
//     return (
//         <div>
//             <h2>Cookies</h2>
//             <p>Price: 999 credits</p>
//         </div>
//     );
// };


export default function Product({
    name,
    imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
    price,
}) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} width="640" />

            {price < 20 ? <p>Chipest food</p> : <p>{price}</p>}
            {/* <p>Price: {price} credits</p> */}
        </div>
    );
};
