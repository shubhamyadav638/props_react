import React from 'react'
import Card from './pages/Card'
import Herosection from './components/herosection'
// import Data from './Data'
// import User from './User'
// import Hello from './Hello'
let api ='This is api'

function App() {

  // let d = 'hii shubham'
  // let b = "user info"
  // let c= 'hello wold'

  function click (){
    alert("success!")
  }
  return (
   <>
    <div>
      <h1>this is info file</h1>
      {/* <Data a={d}/>
      <User v={b}/>
      <Hello g={c}/> */}

      <Card data ={api} d={click}/>
      <Herosection data= {api} d={click}/>

      
    </div>
   </>
  )
}

export default App