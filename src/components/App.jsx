import './App.css'
import Product from './Product'


export default function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product
        name='Tacos with lime'
        price={12.99}
      />
      <Product
        name='Fries and Burger'
        imgUrl='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640'
        price={24.00} />
      <Product />
      <div>
        {[10, 20, 30].map(item => {
          return <p>{item}</p>
        })}
      </div>
    </div>
  );
}

