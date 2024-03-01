
import './App.css'
import ProductTab from './ProductTab.jsx'
// import Title from './Title.jsx'

// function Title(){
//   return <h1>This is my title</h1>
// } We will create another file named Tilte and import tiltle from there
// function Description(){
//   return <h3>This is my Description</h3>
// }

function App() {
  // return <button>Hello World</button>
  return (
     <div> 
      {/* We can use react fragments like<></> if we dont want to create extra div tag */}
      {/* <Title/>
      <Description/>
      <Title/>
      <Description/> */}
      <ProductTab/>
    </div>
  )
}

export default App
