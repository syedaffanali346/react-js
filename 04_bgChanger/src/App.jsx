import { useState } from "react"


function App() {

  const [color,setColor] = useState("olive");

  return (
    // <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    //   <div className="fixed flex flex-wrap justify-center right-12 inset-y-3 px-2 ">
    //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  rounded-3xl">
    //       <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}> Red </button>
    //       <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"red"}}> Red </button>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div class="w-32 h-screen text-white flex flex-col pt-11 bg-white rounded-full ml-10">
          <nav class="flex-1 pl-6 pt-14 space-y-4">
            <button href="#" class="block py-2 px-4 rounded w-20" style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>Red</button>
            <button href="#" class="block py-2 px-4 rounded w-20" style={{backgroundColor:"blue"}} onClick={()=> setColor("blue")}>Blue</button>
            <button href="#" class="block py-2 px-4 rounded w-20" style={{backgroundColor:"green"}} onClick={()=> setColor("green")}>Green</button>
            <button href="#" class="block py-2 px-4 rounded w-20" style={{backgroundColor:"gray"}} onClick={()=> setColor("gray")}>Gray</button>
            <button href="#" class="block py-2 px-4 rounded w-20 text-black" style={{backgroundColor:"pink"}} onClick={()=> setColor("pink")}>Pink</button>
            <button href="#" class="block py-2 px-4 rounded w-20" style={{backgroundColor:"purple"}} onClick={()=> setColor("purple")}>Purple</button>
            <button href="#" class="block py-2 px-4 rounded w-20" style={{backgroundColor:"black"}} onClick={()=> setColor("black")}>Black</button>
            <button href="#" class="block py-2 px-4 rounded w-20 text-black" style={{backgroundColor:"yellow"}} onClick={()=> setColor("yellow")}>Yellow</button>
            {/* <button href="#" class="block py-2 px-4 rounded w-20 text-black" style={{backgroundColor:"white"}}>White</button> */}
          </nav>
        </div>
    </div>

  )
}

export default App
