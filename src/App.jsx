// import './App.css'
import Product from './components/Product';
import { favBooks } from './components/Books';
import BookList from './components/Books';
import MyButton from './components/MyButton';
import { DayQuote } from './components/DayQuote';
import { Alert } from './components/Alert';



function App() {

  return (
    <>
      <MyButton/>
      <DayQuote></DayQuote>
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
      <div id="alert-block">
        <Alert variant="info">Would you like to browse our recommended products?</Alert>
        <Alert variant="error" outlined>There was an error during transaction!</Alert>
        <Alert variant="success" elevated>Payment received, thank you for your purchase!</Alert>
        <Alert variant="warning">Please update your profile contact information</Alert>
      </div>
    </>
  )
}

export default App
