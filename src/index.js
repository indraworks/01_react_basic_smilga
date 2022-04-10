//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"

//NESTED COMPONENT DAN TOOLS
/*
yang perlu diingat pada react sekali lagi hanya ada 1 buah kluaran 
dari jsx utk dirender,nah jika banyak komponent bagaimana krena 
hal ini maka dijadikan function2 
nah ada function utama dibawah ini disebutkan 
Mycomponent adalah 1 buah function utama yg berisi jsx yg dirender nntinya 
nah didalamnya dia mis ada anak2 componentlainnya misalkan 
function Mesagge(){ return ()}
function Person (){return()}
nah jadi dalam fucntion utama tadi function2 yg merupaka anak di 
taruh sbgai element didalam funtion utama ! 
function Mycomponent( {
  return ( 
    <> //jangan lupa pasang fragment karna harus ada 1 tag kluaran sbagai pembungkus  ]
    <Person/>
    <Message/>
    </>
  )
})



*/

const MyComponent = () => {
  return (
    <>
      <Person />
      <Message />
    </>
  )
}

const Person = () => {
  return (
    <div>
      {" "}
      <h2>nama Indara</h2>
    </div>
  )
}
const Message = () => {
  return <h1>hello message baru ini !</h1>
}

ReactDOM.render(<MyComponent />, document.getElementById("root"))
