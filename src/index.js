//sayaarat 1
import { render } from "@testing-library/react"
import React from "react"
import ReactDOM from "react-dom"

//ini component yg dikembalikan
function MyComponent() {
  //harus ada retrun dari component /func yg dibuat
  return <h1>Hello Indra iam compnent which render !</h1>
}

ReactDOM.render(<MyComponent />, document.getElementById("root"))

// return (<tag> </tag>) <---adalah jsx yg ditulis dalam function js
//jadi harus dikembalikan dirender di dom
