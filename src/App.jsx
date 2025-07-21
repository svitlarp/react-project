// import './App.css'
import Product from './components/Product';
import { favBooks } from './components/Books';
import BookList from './components/Books';

// React component names must always start with a capital letter, while HTML tags must be lowercase.
function MyButton() {
  return (
    <button>Click Me Button</button>
  )
}


// const DayQuote = () => (
//   <p>"Do sport every day"</p>
// )

const DayQuote = () => {
  return (
    <p>"Do sport every day"</p>
  );
}

function App() {

  return (
    <>
      <MyButton />
      <DayQuote />
      <p style={{
        color: "orange",
        fontSize: 24,
        padding: "12px",
        backgroundColor: "black",
      }}
      >Hello from React app!</p>
      <Product
        name="Tacos1"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={999}/>
      <Product
        name="Tacos2 With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
      name="Tacos3"
        price={44.15} />
      
      <div id="books">
        <h5>Books of the week</h5>
        <BookList books={favBooks} />
      </div>
    </>
  )
}

export default App

