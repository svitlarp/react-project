import { useState } from 'react'
import reactLogo from '../assets/react.svg'
// import viteLogo from '../../public/vite.svg'
import './App.css'
import Product from './Product'


// src/App.jsx

export default function App() {
  return (
    <div>
      <h1>Products</h1>

      <Product name='Tacos with lime' price='12.99' />
      <Product name='Fries and Burger' price='24.00' />
      <Product />
    </div>
  );
}




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
