//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"

//ini component yg dikembalikan
function MyComponent() {
  // return (<div>
  //          <h1>hello ini cara pakai React.createElement</h1>
  // </div>)
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello ini dgn create element!")
  )
}

ReactDOM.render(<MyComponent />, document.getElementById("root"))

/*
jadi kalau mau pakai reac.element 
caranya rumus sama dia adalah tag,{props},childer isi yg ada di element
nah mislakan ada 2 kalang maka yg pertama harus disebut 
nah utk kalang kedua ditulis di paling belakanag dekat kurung penutup
esbgai crete element yg baru begitu seterunya inicuman asal mulanya saja


*/
